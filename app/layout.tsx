import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "时光策展案 - 印象派记忆画廊",
  description: "五卷温情档案，收集线索解锁温暖真相",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
