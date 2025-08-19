# Chef Mistral
*(Tiếng Việt | [English](./README.md))*

Một website gợi ý công thức nấu ăn đơn giản, được xây dựng bằng **React + Vite** và sử dụng **Mistral AI của Hugging Face**.  
Chỉ cần nhập những nguyên liệu bạn đang có trong bếp, và đầu bếp sẽ gợi ý công thức mới cho bạn!

Được làm trong khi mình học React từ course của Bob Ziroll trên Scrimba

## Cài đặt
1. Tạo bản sao repo: `git clone https://github.com/sock1000kg/ChefMistral`
2. Cài đặt dependencies: `npm install`
3. Sao chép `.env.example` vào `.env` và thay Hugging Face token của bạn:
- Tạo tài khoản Hugging Face
- Vào Settings -> Access Tokens
- Tạo token mới (chỉ cần tick Make calls to Inference Providers nếu chỉ muốn dùng thử cho site này)
- Sao chép token (chỉ hiển thị một lần khi mới tạo), và dán vào file .env
4. Chạy server dev: `npm run dev`

## Hình ảnh
<img width="1895" height="920" alt="screenshot-1755580690329" src="https://github.com/user-attachments/assets/24287457-c848-4da5-aee9-692973037403" />
<img width="1893" height="920" alt="screenshot-1755580868295" src="https://github.com/user-attachments/assets/a50f1d45-eb0f-4049-9aa2-75a2b8af36de" />
