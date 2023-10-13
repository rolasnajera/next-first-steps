import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>Hello, World!</span>
      <Link href="/about">About page</Link>
    </main>
  );
}
