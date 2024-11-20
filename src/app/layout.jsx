import "./globals.css";

export const metadata = {
  title: "HackHayward",
  description: "Join HackHayward, the first student-organized hackathon in Hayward, California, hosted by CSU East Bay. Open to all Bay Area students, this event promotes innovation and awareness for marginalized communities in March 2025",
  keywords: "HackHayward, hackathon, CSU East Bay, Hayward hackathon, Bay Area, student hackathon, March 2025, MLH, Major League Hacking, technology, software development, programming challenge, collaborative coding, STEM event, hackathon event",
  author: "HackHayward Technical Team, CSU East Bay",

  openGraph: {
    title: "HackHayward",
    description: "The first student-organized hackathon in Hayward, California, hosted by CSU East Bay in March 2025",
    image: "https://www.hackhayward.com/assets/openGraph/openGraphBG.png",
    url: "https://www.hackhayward.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
