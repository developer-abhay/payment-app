"use client";
import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  const value = useBalance();
  return (
    <main className="bg-slate-400 w-screen h-screen flex justify-center items-center">
      Hello {value}
    </main>
  );
}
