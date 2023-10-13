import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information.",
  keywords: ["next", "framework", "contact"],
};
export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
