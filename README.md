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
