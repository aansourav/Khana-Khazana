import AuthProvider from "@/providers/AuthProvider";
import ToastProvider from "@/providers/ToastProvider";
import { dbConnect } from "@/services/mongo";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Khana Khazana",
    description: "Food you will love",
};

export default async function RootLayout({ children }) {
    await dbConnect();
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastProvider>
                    <AuthProvider>
                        <Navbar />
                        {children}
                    </AuthProvider>
                </ToastProvider>
            </body>
        </html>
    );
}
