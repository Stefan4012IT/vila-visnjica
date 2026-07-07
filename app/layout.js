import "./globals.scss";

export const metadata = {
  title: "Vila Višnjica | Ekološki vrtić u Višnjičkoj Banji",
  description:
    "Onepage prezentacija predškolske ustanove Vila Višnjica, ekološkog vrtića za decu od 1 do 6,5 godina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
