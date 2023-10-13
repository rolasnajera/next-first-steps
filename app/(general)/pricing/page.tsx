import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing information",
  keywords: ["pricing", "next", "framework"],
};
export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
