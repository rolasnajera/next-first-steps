import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "Info about next framework.",
  keywords: ["about", "next", "framework"],
};
export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About page</span>
    </>
  );
}
