import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// CORS 설정
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

// JSON 파싱 미들웨어 추가
app.use(express.json());

// 정적 파일 제공
app.use(express.static('dist'));

// JSON 파일 제공을 위한 라우트
app.get('/api/image-text-pairs', (req, res) => {
    try {
        console.log('Received request for image-text-pairs');
        const jsonPath = path.join(__dirname, 'ysc_image_text_pairs.json');
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        console.log('Sending response with', jsonData.length, 'items');
        res.json(jsonData);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).json({ error: 'Failed to read JSON file' });
    }
});

// 모든 요청을 React 앱으로 전달
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 