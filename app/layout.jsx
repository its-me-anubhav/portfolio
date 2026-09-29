import "./globals.css";

export const metadata = {
  title: "Anubhav | Full Stack Software Engineer",
  description: "Portfolio of Anubhav, a Full-Stack Developer based in Delhi, India. Specializing in Next.js, React.js, Node.js, and building scalable enterprise CRM systems.",
  keywords: [
    "Anubhav",
    "Anubhav Developer",
    "Anubhav Full Stack Developer",
    "Anubhav Shakya",
    "Anubhav CRM Developer",
    "React Developer Delhi",
    "Next.js Developer India",
    "Software Engineer Anubhav",
    "Anubhav Portfolio",
    "Full Stack Engineer Delhi"
  ],
  authors: [{ name: "Anubhav" }],
  creator: "Anubhav",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Anubhav | Full Stack Developer",
    description: "Full Stack Developer based in Delhi, India. Specializing in Next.js, React.js, Node.js, and scalable CRM systems.",
    siteName: "Anubhav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhav | Full Stack Developer",
    description: "Full Stack Developer based in Delhi, India. Specializing in Next.js and enterprise CRMs.",
    creator: "@Anubhavshakya63",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
