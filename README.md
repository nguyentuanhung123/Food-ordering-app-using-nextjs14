This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Các bước chuẩn bị đầu tiên
- B1: Chuyển cỡ chữ: Latin -> Roboto (Chỉ cần chuyển ở file layout.jsx, không cần chuyển ở đầu khác)
- B2: Ở file page.jsx mặc định xóa hết các code mặc định 
- B3: Ở file global.css xóa hết chỉ để lại 3 dòn cơ bản của dòng tailwind
- B4: Bổ sung thẻ main trong thẻ body ở layout.jsx (trong trường hợp thẻ main không có tailwind thì ta tắt browser cũ đi và chạy lại)
- B5: Xóa cái backgroundImage bên trong extend ở tailwind.config.js và sửa lại theo ý muốn
### Khi sử sụng thẻ Link thì ta phải có thêm attribute : href={''}

### Sử dụng thẻ Image trong NextJS-14 (Xem chi tiết trong thẻ Hero.jsx)

```jsx
<div className='w-16 h-16 relative'>
    <Image 
        src={'/pizza.png'} 
        alt='pizza'
        layout={'fill'}
        objectFit={'contain'}
    />
</div>
```

- Component Image trong next đã có sẵn và có css: 

```css
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    object-fit: contain;
    color: transparent;
```

### Sử dụng Hero icons 
- B1: Tạo folder icons trong components
- B2: Tạo file bất kỳ trong đó và copy JSX trên trang Heroicons
- B3: Paste trong return

### Sử dụng &nbsp; để tạo khoảng cách nhỏ với text trong thẻ với thẻ span trong đó (Xem trong Hero.jsx)

### Khi bạn thêm thuộc tính h-full (hoặc height: 100%) vào một phần tử con có position: absolute, và phần tử cha không có position: relative, phần tử con sẽ cố gắng lấy chiều cao của phần tử cha làm giới hạn cho nó. Tuy nhiên, do không có phần tử cha nào có position: relative, nên phần tử con sẽ dựa vào phần tử gốc của trang (thường là thẻ <body>) để xác định chiều cao.

### Kết quả có thể không như mong đợi nếu chiều cao của phần tử cha không được đặt cụ thể (ví dụ: không có nội dung để mở rộng chiều cao), hoặc nếu các phần tử cha trước đó có các thuộc tính vị trí hoặc overflow không phù hợp.

### Sử dụng Next-Auth

- NextAuth.js là giải pháp xác thực nguồn mở hoàn chỉnh cho các ứng dụng Next.js.

- Nó được thiết kế từ đầu để hỗ trợ Next.js và Serverless.

## Linh hoạt và dễ sử dụng
- Được thiết kế để hoạt động với mọi dịch vụ OAuth, nó hỗ trợ OAuth 1.0, 1.0A, 2.0 và OpenID Connect
- Built-in support for many popular sign-in services (Hỗ trợ tích hợp cho nhiều dịch vụ đăng nhập phổ biến)
- Supports email / passwordless authentication (Hỗ trợ xác thực email/không cần mật khẩu)
- Supports stateless authentication with any backend (Active Directory, LDAP, etc) (Hỗ trợ xác thực không trạng thái với bất kỳ chương trình phụ trợ nào (Active Directory, LDAP, v.v.))
- Supports both JSON Web Tokens and database sessions (Hỗ trợ cả Mã thông báo Web JSON và phiên cơ sở dữ liệu)
- Designed for Serverless but runs anywhere (AWS Lambda, Docker, Heroku, etc…) (Được thiết kế cho Serverless nhưng chạy ở mọi nơi (AWS Lambda, Docker, Heroku, v.v.))

## Sở hữu dữ liệu của riêng bạn
- NextAuth.js có thể được sử dụng có hoặc không có cơ sở dữ liệu.

- An open-source solution that allows you to keep control of your data (Một giải pháp nguồn mở cho phép bạn kiểm soát dữ liệu của mình)
- Supports Bring Your Own Database (BYOD) and can be used with any database (Hỗ trợ Mang cơ sở dữ liệu của riêng bạn (BYOD) và có thể được sử dụng với bất kỳ cơ sở dữ liệu nào)
- Built-in support for MySQL, MariaDB, Postgres, SQL Server, MongoDB and SQLite (Hỗ trợ tích hợp cho MySQL, MariaDB, Postgres, SQL Server, MongoDB và SQLite)
- Works great with databases from popular hosting providers (Hoạt động tốt với cơ sở dữ liệu từ các nhà cung cấp dịch vụ lưu trữ phổ biến)
- Can also be used without a database (e.g. OAuth + JWT) (Cũng có thể được sử dụng mà không cần cơ sở dữ liệu (ví dụ: OAuth + JWT))

# Note: Email sign-in requires a database to be configured to store single-use verification tokens. (Lưu ý: Đăng nhập qua email yêu cầu phải định cấu hình cơ sở dữ liệu để lưu trữ mã thông báo xác minh sử dụng một lần.)

## Bảo mật theo mặc định
- Promotes the use of passwordless sign-in mechanisms (Khuyến khích việc sử dụng cơ chế đăng nhập không cần mật khẩu)
- Designed to be secure by default and encourage best practices for safeguarding user data (Được thiết kế để bảo mật theo mặc định và khuyến khích các phương pháp tốt nhất để bảo vệ dữ liệu người dùng)
- Uses Cross-Site Request Forgery Tokens on POST routes (sign in, sign out) (Sử dụng Mã thông báo giả mạo yêu cầu trên nhiều trang web trên các tuyến POST (đăng nhập, đăng xuất))
- Default cookie policy aims for the most restrictive policy appropriate for each cookie (Chính sách cookie mặc định hướng tới chính sách hạn chế nhất phù hợp với từng cookie)
- When JSON Web Tokens are enabled, they are encrypted by default (JWE) with A256GCM (Khi Mã thông báo Web JSON được bật, chúng được mã hóa theo mặc định (JWE) bằng A256GCM)
- Auto-generates symmetric signing and encryption keys for developer convenience (Tự động tạo khóa ký và mã hóa đối xứng để thuận tiện cho nhà phát triển)
- Features tab/window syncing and keepalive messages to support short-lived sessions (Tính năng đồng bộ hóa tab/cửa sổ và thông báo lưu giữ để hỗ trợ các phiên hoạt động ngắn hạn)
- Attempts to implement the latest guidance published by Open Web Application Security Project (Nỗ lực triển khai hướng dẫn mới nhất do Dự án bảo mật ứng dụng web mở xuất bản)

# Các tùy chọn nâng cao cho phép bạn xác định quy trình của riêng mình để xử lý việc kiểm soát những tài khoản nào được phép đăng nhập, để mã hóa và giải mã Mã thông báo Web JSON cũng như đặt chính sách bảo mật cookie tùy chỉnh và thuộc tính phiên, để bạn có thể kiểm soát ai có thể đăng nhập và tần suất phiên phải được xác nhận lại.

### Getting Started (https://next-auth.js.org/getting-started/example)

- B1: npm install next-auth

- If you are using TypeScript, NextAuth.js comes with its types definitions within the package. (Nếu bạn đang sử dụng TypeScript, NextAuth.js sẽ đi kèm với các định nghĩa loại của nó trong gói.)

## Thêm API route (https://next-auth.js.org/configuration/initialization)
- To add NextAuth.js to a project create a file called [...nextauth].js in pages/api/auth. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations. (Để thêm NextAuth.js vào dự án, hãy tạo một tệp có tên [...nextauth].js trong pages/api/auth. Phần này chứa trình xử lý tuyến động cho NextAuth.js cũng sẽ chứa tất cả các cấu hình NextAuth.js chung của bạn.)

- If you're using Next.js 13.2 or above with the new App Router (app/), you can initialize the configuration using the new Route Handlers by following our guide. (Nếu đang sử dụng Next.js 13.2 trở lên với Bộ định tuyến ứng dụng (app/) mới, bạn có thể khởi tạo cấu hình bằng Trình xử lý tuyến đường mới bằng cách làm theo hướng dẫn của chúng tôi.)

-In Next.js, you can define an API route that will catch all requests that begin with a certain path. Conveniently, this is called Catch all API routes. (Trong Next.js, bạn có thể xác định tuyến API sẽ bắt tất cả các yêu cầu bắt đầu bằng một đường dẫn nhất định. Thuận tiện, tính năng này được gọi là Bắt tất cả các tuyến API.)

- When you define a /pages/api/auth/[...nextauth] JS/TS file, you instruct NextAuth.js that every API request beginning with /api/auth/* should be handled by the code written in the [...nextauth] file. (Khi xác định tệp JS/TS /pages/api/auth/[...nextauth], bạn hướng dẫn NextAuth.js rằng mọi yêu cầu API bắt đầu bằng /api/auth/* phải được xử lý bằng mã được viết trong tệp [. ..nextauth] tập tin.)

- B2: Tạo file route.ts trong folder [...nextauth] (folder [...nextauth] anwmf trong folder auth, auth nằm trong api, api nằm trong app)

### Credentials (Thông tin xác thực) (https://next-auth.js.org/configuration/providers/credentials)
# Làm cách nào để
- Nhà cung cấp thông tin xác thực cho phép bạn xử lý việc đăng nhập bằng thông tin xác thực tùy ý, chẳng hạn như tên người dùng và mật khẩu, xác thực hai yếu tố hoặc thiết bị phần cứng (ví dụ: YubiKey U2F / FIDO).

- Nó nhằm mục đích hỗ trợ các trường hợp sử dụng trong đó bạn có một hệ thống hiện có mà bạn cần xác thực người dùng.

- B3: Tạo folder register và route.jsx trong đó (bên trong thư mục api và cùng cấp với auth)

### Lưu ý: Component nào dùng useState như register thì phải thêm "use client"

### Kết nối MongoDB, tạo file .env cùng cấp với folder src

- B1: npm i mongoose
- B2: Tạo folder models bên trong app
