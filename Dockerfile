# Sử dụng hình ảnh Node.js chính thức
FROM node:20.18.0

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY ./home/package*.json ./

# Cài đặt các gói cần thiết
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY ./home ./

# Mở cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
