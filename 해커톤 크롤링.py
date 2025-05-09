import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import json

# 대상 페이지 목록 (3개 모두 포함)
base_urls = [
    "http://www.yscsc.co.kr/02/01.php",  # 공익 활동사업
    "http://www.yscsc.co.kr/02/02.php",  # 공동체사업단
    "http://www.yscsc.co.kr/02/03.php"   # 노인역량활용사업
]

# 결과 저장 리스트
results = []

# 각 URL에 대해 순차적으로 크롤링
for base_url in base_urls:
    response = requests.get(base_url)
    response.encoding = 'utf-8'

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        activity_boxes = soup.find_all("div", class_="sub02_01_in_box")

        for box in activity_boxes:
            # 이미지 추출
            img_tag = box.find("img")
            img_src = img_tag.get("src") if img_tag else None
            full_img_url = urljoin(base_url, img_src) if img_src else ""

            # 제목 추출
            title_tag = box.find("p", class_="sub02_01_in_box_right_title")
            title_text = title_tag.get_text(strip=True) if title_tag else ""

            # 출력
            print(f"사진: {full_img_url}")
            print(f"{title_text}")
            print("-" * 50)

            # 결과 저장
            results.append({
                "image_url": full_img_url,
                "text": title_text
            })
    else:
        print(f"❌ 요청 실패: {base_url} (status code: {response.status_code})")

# JSON 파일 저장
with open("ysc_image_text_pairs.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=4)

print("✅ 전체 크롤링 완료 및 'ysc_image_text_pairs.json' 저장 완료.")
