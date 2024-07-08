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
      <div className=" h-screen py-40" style={{backgroundImage: 'url("/patron1.png")', backgroundSize: "cover"}}>
      <p className="text-center font-bold text-6xl text-[#62C7F1]">Ultimos eventos</p>
      <div>
        <img src="" alt="" />
      </div>
      </div>

    </main>
  );
}
