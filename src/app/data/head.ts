
export const headContets = [
    {
        icon: "Users",
        title: "Nosotros",
        url: "/nosotros"
    },
    {
        icon: "Store",
        title: "Alquiler",
        url: "/alquiler",
        suburls:[
            {
                title: "Juegos inflables",
                url: "/alquiler?sort=inflables#productos"
            },
            {
                title: "Juegos acuáticos",
                url: "/alquiler?sort=acuaticos#productos"
            },
            {
                title: "Juegos mecanicos",
                url: "/alquiler?sort=mecanicos#productos"
            },
            {
                title: "Cama saltarina",
                url: "/alquiler?sort=camas#productos"
            },
            {
                title: "Otros",
                url: "/alquiler?sort=otros#productos"
            }
        ]
    },
    {
        icon: "Cookie",
        title: "Snacks",
        url: "/snacks"
    },
    {
        icon: "PiggyBank",
        title: "Promociones",
        url: "/promociones"
    },
    {
        icon: "ShoppingCart",
        title: "Ventas",
        url: "/ventas",
        suburls:[
            {
                title: "Juegos inflables",
                url: "/ventas?sort=inflables"
            },
            {
                title: "Otros",
                url: "/ventas?sort=otros"
            }
        ]
    },
    {
        icon: "Headset",
        title: "Contactos",
        url: "/contactos"
    }

]