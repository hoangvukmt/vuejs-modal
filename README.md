# Vue 2.0 Simple App

# Hướng dẫn chạy project

``` bash
# cài đặt dependencies
npm install

# khởi chạy project localhost:8080
npm run dev

# build project production
npm run build
```

# Cấu trúc hệ thống
- main.js
    + Khởi tạo đối tượng vue
    + Khởi tạo các config dùng trong toàn hệ thống như (interceptors, i18n, http, toasted)
    + Load phần tử tương ứng với mỗi router hệ thống (ViewComponent, i18n)
    + Public đối tượng Vue để có thể sử dụng khi cần (window["vueApp"] = app)
- router.js
    + Khai báo các router của hệ thống
    + Chỉ sử dụng router cơ bản
- Thư mục assets
    + Chứa các tài nguyên do dev tạo ra
    + css: Chứa các file css mà dev tạo ra
    + i18n: Chứa các file json đa ngôn ngữ
        * common: Các file ngôn ngữ dùng chung cho tất cả các trang
        * các folder còn lại được đặt tên theo đúng tên của router tương ứng (bắt buộc)
        * mỗi một router sẽ có một folder tương ứng trong này
    + img: Chứa các file ảnh mà dev thêm vào
    + js: Chứa các file js mà dev tạo ra
- Thư mục components
    + Chứa các component dùng chung trong toàn hệ thống (do dev tạo ra)
- Thư mục core
    + const.js: Định nghĩa các const dùng trong hệ thống (hạn chế việc hardcode)
    + Thư mục base
        * Chứa class base, các class khác trong thư mục pages của hệ thống sẽ kế thừa lại trang này
        * class này sẽ khai báo các biến, các function để có thể gọi ra tại bất kì class nào kế thừa class này
        * Hạn chế việc viết lại code, tăng tính dùng lại
    + Thư mục services
        * Chứa các service được sử dụng trong hệ thống
        * httpService.js: service dùng để call api khi cần (Sửa lại tùy theo loại api mà hệ thống connect tới)
- Thư mục layouts
    + Chứa các layout dùng chung trong toàn hệ thống (trang master, error)
- Thư mục pages
    + Là thư mục chính của project
    + Chứa các trang màn hình của ứng dụng
    + Các trang này sẽ kế thừa lại class base trong thư mục core
- Thư mục resources
    + Chứa các tài nguyên (css, js, img...) của bên thứ 3
    + Tránh lẫn lộn với các tài nguyên do dev tạo ra trong quá trình code
    + VD: các file css, js của boostrap sẽ cho vào đây

# VIP, PRO, PERFECT!!! :D :D :D
