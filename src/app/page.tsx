"use client";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  // useEffect(() => {
  //   router.push("/nosotros");
  // }, [router]);
  
  return (
    <main >
      <img src="/banner.png" alt="banner" className=" w-full h-[400px] md:h-[500px] object-fill" />
    </main>
  );
}
