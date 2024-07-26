import { title } from "process";

export const indexImages = [
    {
        image: "/index/1.png",
        title: "Acuaticos",
        url: "/alquiler?sort=acuaticos#productos"
    },
    {
        image: "/index/2.png",
        title: "Inflables",
        url: "/alquiler?sort=inflables#productos"
    },
    {
        image: "/index/3.png",
        title: "Mecanicos",
        url: "/alquiler?sort=mecanicos#productos"
    },
    {
        image: "/index/4.png",
        title: "Cama Saltarina",
        url: "/alquiler?sort=camas#productos"
    }
]

export const eventsImages = [
    {
        image: "/events/1.jpeg",
    },
    {
        image: "/events/2.jpeg",
    },
    {
        image: "/events/3.jpeg",
    }
]


interface ImageProduct {
    image: string;
    type: string;
    color:string;
    title: string;
  }

export const imagesInicioProductos:ImageProduct[]  = [
    {
        image: "/index/1.png",
        type: "acuaticos",
        color: "#FE9CDB",
        title: "Acuaticos"
    },
    {
        image: "/index/2.png",
        type: "inflables",
        color: "#FFCC00",
        title: "Inflables"
    },
    {
        image: "/index/3.png",
        type: "mecanicos",
        color: "#88E2FE",
        title: "Mecanicos"
    },
    {
        image: "/index/4.png",
        type: "camas",
        color: "#9CD2A6",
        title: "Cama Saltarina"
    }
]

export const imagesProducts:{
    image: string;
    type: string;
    title: string;
    description?:string
}[] = [
    {
        image: "/productos/1.jpeg",
        type: "mecanicos",
        title: "Tren Infantil",
        description: "Tren estacionario"
    },
    {
        image: "/productos/2.jpeg",
        type: "mecanicos",
        title: "Tren Fiesta",
        description: "Tren sin rieles"
    },
    {
        image: "/productos/3.jpeg",
        type: "mecanicos",
        title: "Toro Mecánico",
    },
    {
        image: "/productos/4.jpeg",
        type: "mecanicos",
        title: "Mini Samba"
    },
    {
        image: "/productos/5.jpeg",
        type: "mecanicos",
        title: "Carrusel",
        description:'Carrusel de 6 sitios'
    },
    {
        image: "/productos/6.jpeg",
        type: "camas",
        title: "Trampolin Boungie"
    },
    {
        image: "/productos/7.jpeg",
        type: "acuaticos",
        title: "Roller Ball",
        description:'Cilindro acuático inflable'
    },
    {
        image: "/productos/8.jpeg",
        type: "acuaticos",
        title: "Botecitos"
    },
    {
        image: "/productos/9.jpeg",
        type: "inflables",
        title: "Demoledor"
    },
    {
        image: "/productos/10.jpeg",
        type: "inflables",
        title: "Bubble House"
    },
    {
        image: "/productos/11.jpeg",
        type: "inflables",
        title: "Tobogancito Mickey"
    },
    {
        image: "/productos/12.jpeg",
        type: "inflables",
        title: "Mini Jungla"
    },
    {
        image: "/productos/13.jpeg",
        type: "inflables",
        title: "Casa de Mickey"
    },
    {
        image: "/productos/14.jpeg",
        type: "inflables",
        title: "Mario Bros"
    },
    {
        image: "/productos/15.jpeg",
        type: "inflables",
        title: "Pony"
    },
    {
        image: "/productos/16.jpeg",
        type: "inflables",
        title: "Safari"
    },
    {
        image: "/productos/52.jpeg",
        type: "inflables",
        title: "Candy Slide"
    },
    {
        image: "/productos/17.jpeg",
        type: "inflables",
        title: "Orejas"
    },
    {
        image: "/productos/18.jpeg",
        type: "inflables",
        title: "T-Rex"
    },
    {
        image: "/productos/19.jpeg",
        type: "inflables",
        title: "Bichitos"
    },
    {
        image: "/productos/20.jpeg",
        type: "inflables",
        title: "Calabozos y Dragones"
    },
    {
        image: "/productos/21.jpeg",
        type: "inflables",
        title: "Dragoncito"
    },
    {
        image: "/productos/22.jpeg",
        type: "inflables",
        title: "Mini Acuario"
    },
    {
        image: "/productos/23.jpeg",
        type: "inflables",
        title: "Pulpito"
    },
    {
        image: "/productos/24.jpeg",
        type: "inflables",
        title: "Rueda de la Fortuna"
    },
    {
        image: "/productos/25.jpeg",
        type: "inflables",
        title: "Laberinto Bb"
    },
    {
        image: "/productos/26.jpeg",
        type: "inflables",
        title: "Invasión Extraterrestre"
    },
    {
        image: "/productos/27.jpeg",
        type: "inflables",
        title: "Hot Wheels"
    },
    {
        image: "/productos/28.jpeg",
        type: "inflables",
        title: "Jungla 01"
    },
    {
        image: "/productos/29.jpeg",
        type: "inflables",
        title: "Jungla 02"
    },
    {
        image: "/productos/30.jpeg",
        type: "inflables",
        title: "Tobogán Mickey"
    },
    {
        image: "/productos/31.jpeg",
        type: "inflables",
        title: "Spiderman"
    },
    {
        image: "/productos/32.jpeg",
        type: "inflables",
        title: "Escalador"
    },
    {
        image: "/productos/33.jpeg",
        type: "inflables",
        title: "Carrera sobre Pelotas"
    },
    {
        image: "/productos/34.jpeg",
        type: "inflables",
        title: "Granjita"
    },
    {
        image: "/productos/35.jpeg",
        type: "inflables",
        title: "Fantasía"
    },
    {
        image: "/productos/36.jpeg",
        type: "inflables",
        title: "Circo"
    },
    {
        image: "/productos/37.jpeg",
        type: "inflables",
        title: "Avión"
    },
    {
        image: "/productos/38.jpeg",
        type: "inflables",
        title: "Jungla Elefante"
    },
    {
        image: "/productos/39.jpeg",
        type: "inflables",
        title: "Jardín"
    },
    {
        image: "/productos/40.jpeg",
        type: "inflables",
        title: "Castillo del Dragón"
    },
    {
        image: "/productos/41.jpeg",
        type: "inflables",
        title: "Cavernícolas"
    },
    {
        image: "/productos/42.jpeg",
        type: "inflables",
        title: "Chimuelo"
    },
    {
        image: "/productos/43.jpeg",
        type: "inflables",
        title: "Dragón Chino"
    },
    {
        image: "/productos/44.jpeg",
        type: "inflables",
        title: "Monster"
    },
    {
        image: "/productos/45.jpeg",
        type: "inflables",
        title: "Adrenalina"
    },
    {
        image: "/productos/46.jpeg",
        type: "inflables",
        title: "Mickey y Minnie"
    },
    {
        image: "/productos/47.jpeg",
        type: "Super Dragón",
        title: "Super Dragon"
    },
    {
        image: "/productos/48.jpeg",
        type: "inflables",
        title: "Fun Town"
    },
    {
        image: "/productos/49.jpeg",
        type: "inflables",
        title: "Feria"
    },
    {
        image: "/productos/50.jpeg",
        type: "inflables",
        title: "Aventura Marina"
    },
    {
        image: "/productos/51.jpeg",
        type: "inflables",
        title: "Bosque"
    },
]