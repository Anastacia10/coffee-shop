import { Inter, Righteous, Urbanist } from "next/font/google";

export const urbanistFont = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--urbanist-font",
});

export const righteousFont = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--righteous-font",
});

export const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--inter-font",
});
