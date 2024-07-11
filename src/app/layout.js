import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LEVEL UP STYLE© Official Website",
    description:
        "Welcome to the website dedicated to Level Up Style and can be accessed via the URL www.levelupstyle.id Please read carefully the Terms of Use of this website. By accessing this site you accept the website's Terms of Use without objection.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
