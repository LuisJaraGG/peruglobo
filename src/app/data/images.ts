import { title } from "process";
import { ImageDetail } from "../interfaces/imagesDetail";

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
    id: any;
    image: string;
    type: string;
    title: string;
    description?:string,
    detail: ImageDetail
}[] = [
    {
        id:1,
        image: "/productos/1.jpeg",
        type: "mecanicos",
        title: "Tren Infantil",
        description: "Tren estacionario",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:2,
        image: "/productos/2.jpeg",
        type: "mecanicos",
        title: "Tren Fiesta",
        description: "Tren sin rieles",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:3,
        image: "/productos/3.jpeg",
        type: "mecanicos",
        title: "Toro Mecánico",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:4,
        image: "/productos/4.jpeg",
        type: "mecanicos",
        title: "Mini Samba",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:5,
        image: "/productos/5.jpeg",
        type: "mecanicos",
        title: "Carrusel",
        description:'Carrusel de 6 sitios',
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:6,
        image: "/productos/6.jpeg",
        type: "camas",
        title: "Trampolin Boungie",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:7,
        image: "/productos/7.jpeg",
        type: "acuaticos",
        title: "Roller Ball",
        description:'Cilindro acuático inflable',
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:8,
        image: "/productos/8.jpeg",
        type: "acuaticos",
        title: "Botecitos",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:9,
        image: "/productos/9.jpeg",
        type: "inflables",
        title: "Demoledor",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:10,
        image: "/productos/10.jpeg",
        type: "inflables",
        title: "Bubble House",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:11,
        image: "/productos/11.jpeg",
        type: "inflables",
        title: "Tobogancito Mickey",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:12,
        image: "/productos/12.jpeg",
        type: "inflables",
        title: "Mini Jungla",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:13,
        image: "/productos/13.jpeg",
        type: "inflables",
        title: "Casa de Mickey",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:14,
        image: "/productos/14.jpeg",
        type: "inflables",
        title: "Mario Bros",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:15,
        image: "/productos/15.jpeg",
        type: "inflables",
        title: "Pony",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:16,
        image: "/productos/16.jpeg",
        type: "inflables",
        title: "Safari",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:17,
        image: "/productos/52.jpeg",
        type: "inflables",
        title: "Candy Slide",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:18,
        image: "/productos/17.jpeg",
        type: "inflables",
        title: "Orejas",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:19,
        image: "/productos/18.jpeg",
        type: "inflables",
        title: "T-Rex",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:20,
        image: "/productos/19.jpeg",
        type: "inflables",
        title: "Bichitos",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:21,
        image: "/productos/20.jpeg",
        type: "inflables",
        title: "Calabozos y Dragones",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:22,
        image: "/productos/21.jpeg",
        type: "inflables",
        title: "Dragoncito",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:23,
        image: "/productos/22.jpeg",
        type: "inflables",
        title: "Mini Acuario",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:24,
        image: "/productos/23.jpeg",
        type: "inflables",
        title: "Pulpito",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:25,
        image: "/productos/24.jpeg",
        type: "inflables",
        title: "Rueda de la Fortuna",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:26,
        image: "/productos/25.jpeg",
        type: "inflables",
        title: "Laberinto Bb",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:27,
        image: "/productos/26.jpeg",
        type: "inflables",
        title: "Invasión Extraterrestre",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:28,
        image: "/productos/27.jpeg",
        type: "inflables",
        title: "Hot Wheels",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:29,
        image: "/productos/28.jpeg",
        type: "inflables",
        title: "Jungla 01",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:30,
        image: "/productos/29.jpeg",
        type: "inflables",
        title: "Jungla 02",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:31,
        image: "/productos/30.jpeg",
        type: "inflables",
        title: "Tobogán Mickey",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:31,
        image: "/productos/31.jpeg",
        type: "inflables",
        title: "Spiderman",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:32,
        image: "/productos/32.jpeg",
        type: "inflables",
        title: "Escalador",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:33,
        image: "/productos/33.jpeg",
        type: "inflables",
        title: "Carrera sobre Pelotas",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:34,
        image: "/productos/34.jpeg",
        type: "inflables",
        title: "Granjita",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:34,
        image: "/productos/35.jpeg",
        type: "inflables",
        title: "Fantasía",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:35,
        image: "/productos/36.jpeg",
        type: "inflables",
        title: "Circo",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:36,
        image: "/productos/37.jpeg",
        type: "inflables",
        title: "Avión",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:37,
        image: "/productos/38.jpeg",
        type: "inflables",
        title: "Jungla Elefante",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:38,
        image: "/productos/39.jpeg",
        type: "inflables",
        title: "Jardín",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:39,
        image: "/productos/40.jpeg",
        type: "inflables",
        title: "Castillo del Dragón",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:40,
        image: "/productos/41.jpeg",
        type: "inflables",
        title: "Cavernícolas",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:41,
        image: "/productos/42.jpeg",
        type: "inflables",
        title: "Chimuelo",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:42,
        image: "/productos/43.jpeg",
        type: "inflables",
        title: "Dragón Chino",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:43,
        image: "/productos/44.jpeg",
        type: "inflables",
        title: "Monster",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:44,
        image: "/productos/45.jpeg",
        type: "inflables",
        title: "Adrenalina",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:45,
        image: "/productos/46.jpeg",
        type: "inflables",
        title: "Mickey y Minnie",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:45,
        image: "/productos/47.jpeg",
        type: "Super Dragón",
        title: "Super Dragon",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:46,
        image: "/productos/48.jpeg",
        type: "inflables",
        title: "Fun Town",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:47,
        image: "/productos/49.jpeg",
        type: "inflables",
        title: "Feria",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:48,
        image: "/productos/50.jpeg",
        type: "inflables",
        title: "Aventura Marina",
        detail:{
            image:"",
            text:""
        }
    },
    {
        id:49,
        image: "/productos/51.jpeg",
        type: "inflables",
        title: "Bosque",
        detail:{
            image:"",
            text:""
        }
    },
]


export const imagesSnacks = [
    {
        image: "/snacks/1.jpeg",
        title: "Manzanas Acarameladas",
        description: "Manzanas Acarameladas"
    },
    {
        image: "/snacks/2.jpeg",
        title: "Algodón dulce",
        description: "Carrito de algodón dulce"
    },
    {
        image: "/snacks/3.jpeg",
        title: "Pop Corn - Canchita",
        description: "Carrito de PopCorn"
    },
    {
        image: "/snacks/4.jpeg",
        title: "Queso Helado",
        description: "Carrito de Queso Helado"
    }

]