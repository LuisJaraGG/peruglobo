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
      <img src="/banner.png" alt="banner" className=" w-full h-[400px] md:min-h-[500px] object-fill" />
      <div className=" min-h-screen py-40 " style={{backgroundImage: 'url("/patron1.png")', backgroundSize: "cover"}}>
      <p className="text-center font-bold text-6xl text-[#62C7F1] mb-12">Ultimos eventos</p>
      <div className=" flex flex-wrap max-w-[1200px] gap-3 justify-center items-center mx-auto">
        <img src="/evento1.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
        <img src="/evento2.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
        <img src="/evento3.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
        <img src="/evento4.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
      </div>
      </div>

    </main>
  );
}
