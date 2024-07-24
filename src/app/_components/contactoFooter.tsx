'use client'
import Image from "next/image";
import Carousel from "./carousel";
import Link from "next/link";
import { Phone,Mail,MapPin} from "lucide-react";
import { FaWhatsapp,FaFacebook,FaInstagram } from "react-icons/fa";

export function ContactoFooter() {
    return (
        <div className="w-screen  bg-gradient-to-r from-[#FFCCED] to-[#FE9CDB] ">
        <div className="relative w-screen h-full py-28">
              <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url("/patron1.png")', opacity: 0.5 }}
              ></div>
              <div className="relative z-10 text-center px-3 md:p-0 max-w-[700px] mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-center text-white md:gap-10">
                  <Image src="/peru-globo-logo.png" alt="logo-peru-globo" width={136} height={76} className="w-[136px] md:my-auto" />
                  <div className="hidden md:flex border-l-4 border-white h-[400px]"></div>
                  <div>
                    <p className="shabby-patty text-white text-5xl   underline-custom mt-10 md:m-0">Contáctanos</p>

                    <div className="flex flex-col gap-5 mt-10 items-center justify-center font-semibold">
                        <div className="flex flex-col items-center justify-center">
                            <Phone size={32}/>
                            <p>(054)227655</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <Mail size={32}/>
                            <p>Av. Los Incas J -10 Urb. Pablo VI - Cercado Arequipa - Peru</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <MapPin size={32}/>
                            <div>
                                <p>ventas@peruglobo.com</p>
                                <p>alquileres@peruglobo.com</p>
                            </div>
                        </div>
                    </div>

                  </div>
                  <div className="hidden md:flex border-l-4 border-white h-[400px]"></div>

                  <div >
                    <p className="shabby-patty text-white text-5xl   underline-custom mt-14 md:m-0">Siguenos</p>
                    <div className="flex flex-col gap-8 mt-5 items-center justify-center font-semibold">
                        <Link href={'https://wa.me/51959101294?text=Hola estoy interesado en adquirir un producto'} target="_blank">
                            <FaWhatsapp size={40}/>
                        </Link>
                        <Link href={'https://www.facebook.com/peruglobo'} target="_blank">
                            <FaFacebook size={40}/>
                        </Link>
                        <Link href={'https://www.instagram.com/peruglobo_aqp/'} target="_blank">
                            <FaInstagram size={40}/>
                        </Link>
                    </div>
                  </div>


              </div>
          </div>
        </div>
    )
}