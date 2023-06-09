import "./styles/style.scss";

export const metadata = {
  title: "Hymns Of Web",
  description:
    "We are a group of passionate freelancers that build awesome and cool websites. We try to use the best and most efficient modern day practices to build your websites while also making your websites fun and interactive"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
