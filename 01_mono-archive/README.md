# MONO ARCHIVE — 카페24 스킨 (디자인 목업)

고감도 패션/액세서리 디자이너 브랜드 컨셉 스킨. 미니멀 · 하이엔드 · 볼드 타이포그래피.
구매/결제/로그인 **기능 없음** — 모양(HTML/CSS/바닐라JS)만 구현. 기능은 카페24 모듈 연동으로 대체.

## 페이지 구성
| 파일 | 내용 |
|---|---|
| `index.html` | 메인 (히어로 Swiper 3장 · 카테고리 · 추천 · 룩북 · 신상품 · 베스트 · 띠배너 2 · 팝업 2) |
| `products.html` | 상품목록 (16개 · 필터탭 · 정렬바 · 페이지네이션) |
| `product-detail.html` | 상품상세 (갤러리 · 옵션/수량 · 상세이미지 800×3000 · 리뷰/Q&A/배송 탭) |
| `cart.html` | 장바구니 (상품표 · 주문 요약) |
| `login.html` / `signup.html` | 로그인 / 회원가입 |
| `board-notice.html` / `board-view.html` | 공지 목록 / 상세 |
| `board-qna.html` / `board-review.html` | Q&A / 구매후기 |

## 디자인 수정 방법
모든 페이지 `<head>` 안 `<style>` 최상단 `:root { ... }` 값만 바꾸면 됩니다.

```css
--main:#141414;      /* 메인칼라 */
--sub:#8A8478;       /* 서브칼라 */
--point:#FF4D00;     /* 포인트칼라 (버튼·가격·배지·호버) */
--bg:#F7F5F1;        /* 배경색 */
--container:1500px;  /* 콘텐츠 최대폭 */
--section-gap:130px; /* 섹션 간격 */
--gutter:24px;       /* 좌우 여백 */
--fs-display / --fs-h2 / --fs-h3 / --fs-body / --fs-small  /* 계층별 글자크기 */
--fw-display / --fw-h2 / --fw-h3                            /* 두께 */
--radius:8px;        /* 모서리 라운드 */
```
※ 페이지별로 스타일이 인라인 복사되어 있으므로, 색을 바꿀 땐 **모든 html의 :root를 동일하게** 수정하세요.

## 이미지 (images/)
- `hero/` 2000×900 ×3 · `banner/` 2000×500 ×2 · `popup/` 400×300 ×2
- `product/` 600×600 ×32 (p01~p16 + 호버용 `-b` 컷)
- `category/` 600×800 ×4 · `lookbook/` 800×1000 ×3 · `detail/` 800×3000 ×1

## 사용 라이브러리 (CDN)
Pretendard · Archivo(Google Fonts) · Font Awesome 6 · Swiper 11(index의 히어로 슬라이드에만)
그 외 효과는 순수 CSS + IntersectionObserver(바닐라 JS).
