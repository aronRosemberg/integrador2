const categories = [{
    name: 'carrerasCortas',
    img: './img/persona running1.webp'
},
{
    name: 'carrerasMedias',
    img: "./img/persona running2.jpg"
},
{
    name: 'carrerasLargas',
    img: './img/pernosa running 3.jpg'
},

];



//cortas , medias ,largas - sportwear , futbol , running y training
const products = [
    {
        
        id: 1,
        name: 'NikeTiempo Legend 9TF',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/1.png',
        cat: 'futbol',
        popular: false,
        nuevoColeccion:false
    },
    {
        id:2,
        name: 'NikeTiempo Legend 9TF',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/6.png',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 3,
        name: 'adidas X Speedflow+ TF',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/7.png',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 4,
        name: 'adidas X Speedflow+ TF',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/8.png',
        cat: 'futbol',
        nuevoColeccion:false

    },
    
    {
        id: 5,
        name: 'NikeTiempo Legend 9TF',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/9.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },

    {
        id: 6,
        name: 'NikeTiempo Legend 9TF',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/10.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 7,
        name: 'NikeTiempo Legend 9 pro',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/11.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 8,
        name: 'NikeTiempo Legend 9 pro',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/13.webp',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 9,
        name: 'NikeTiempo Legend 9 pro I/C',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/14.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 10,
        name: 'NikeTiempo Legend 9 pro IC',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/15.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 11,
        name: 'NikeTiempo Legend 9 pro vp',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/16.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },
    {
        id: 12,
        name: 'NikeTiempo Legend 8 pro',
        precio: 299,
        data: 'solo para expertos',
        img: './img/products/17.jpg',
        cat: 'futbol',
        nuevoColeccion:false

    },
///////////////////////////////////////////
    {
        id: 13,
        name: 'ZAPATILLAS BEAT',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/1.webp',
        cat: 'hombre',
        nuevoColeccion:false

    }
    ,
    {
        id: 14,
        name: 'ZAPATILLAS DOTTIR',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/2.webp',
        cat: 'hombre',
        nuevoColeccion:false

    }
    ,
    {
        id: 15,
        name: 'ZAPATILLAS DRIVE',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/3.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 16,
        name: 'ZAPATILLAS FAST',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/4.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 17,
        name: 'ZAPATILLAS GONDOR II',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/5.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 18,
        name: 'ZAPATILLAS HYDE DENIM',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/6.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 19,
        name: 'ZAPATILLAS KANG LOW',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/7.webp',
        cat: 'hombre',
        nuevoColeccion:true

    },
    {
        id: 20,
        name: 'ZAPATILLAS MORRIS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/8.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 21,
        name: 'ZAPATILLAS ROD II',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/9.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 22,
        name: 'ZAPATILLAS T.700',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/10.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id: 23,
        name: 'ZAPATILLAS T-700',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/11.webp',
        cat: 'hombre',
        nuevoColeccion:false

    },
    {
        id:24,
        name: 'ZAPATILLAS VR SPEED',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-hombre/12.webp',
        cat: 'hombre',
        nuevoColeccion:true

    },
///////////////////////////////////////////////////    
    {
        id: 25,
        name: 'ZAPATILLAS CAPITAN CANVAS LITE',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/1.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 26,
        name: 'ZAPATILLAS COSTA',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/2.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 27,
        name: 'ZAPATILLAS FAST (W)',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/3.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 28,
        name: 'ZAPATILLAS FAST',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/4.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id:29,
        name: 'ZAPATILLAS POINT IV',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/5.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 30,
        name: 'ZAPATILLAS STRONG PACE III',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/6.webp',
        cat: 'mujer',
        nuevoColeccion:true

    },
    {
        id: 31,
        name: 'ZAPATILLAS T.700',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/7.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id:32,
        name: 'ZAPATILLAS ULTRALIGHT II MESH -W-',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/8.webp',
        cat: 'mujer',
        nuevoColeccion:true

    },
    {
        id: 33,
        name: 'ZAPATILLAS VR SPEED',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/9.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 34,
        name: 'ZAPATILLAS WARP',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/10.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 35,
        name: 'ZAPATILLAS WIND III',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/11.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    {
        id: 36,
        name: 'ZAPATILLAS YUCCA',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-mujer/12.webp',
        cat: 'mujer',
        nuevoColeccion:false

    },
    ///////////////////////////////////////////////////////    
    {
        id: 37,
        name: 'ZAPATILLAS ARROW KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/1.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 38,
        name: 'ZAPATILLAS CIRCUS KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/2.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 39,
        name: 'ZAPATILLAS FAST KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/3.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 40,
        name: 'ZAPATILLAS JIRO KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/4.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id:41,
        name: 'ZAPATILLAS MAMBA KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/5.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 42,
        name: 'ZAPATILLAS NIKITA KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/6.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 43,
        name: 'ZAPATILLAS PROFESIONAL NIÑOS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/7.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 44,
        name: 'ZAPATILLAS RAIL JUNGLA KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/8.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 45,
        name: 'ZAPATILLAS SQUAT KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/9.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 46,
        name: 'ZAPATILLAS T700 CS KIDS blanco',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/10.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 47,
        name: 'ZAPATILLAS T700 CS KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/11.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
    {
        id: 48,
        name: 'ZAPATILLAS T-700 KIDS',
        precio: 299,
        data: 'solo para expertos',
        img: './img/topper-ninio/12.webp',
        cat: 'ninio',
        nuevoColeccion:false

    },
//////////////////////////////////////////////////////////////////////////////
    {
        id: 49,
        name: 'Spikes evoSPEED Electric 11 SP Track & Field',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/1.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id:50,
        name: 'Zapatilla de running para hombre Velocity Nitro SP',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/2.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 51,
        name: 'Zapatillas de running DEVIATE NITRO para hombre',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/3.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 52,
        name: 'Zapatillas de running para hombre Magnify Nitro',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/4.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 53,
        name: 'Zapatillas de running PUMA x FIRST MILE Electrify Nitro',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/5.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 54,
        name: 'Zapatillas Electrify Nitro Turn',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/6.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id:55,
        name: 'Zapatillas Velocity Nitro 2 de running 2',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/7.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 56,
        name: 'Zapatillas Velocity Nitro 2 de running 3',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/8.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 57,
        name: 'Zapatillas Velocity Nitro 2 de running 4',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/9.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 58,
        name: 'Zapatillas Velocity Nitro 2 de running 5',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/10.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 59,
        name: 'Zapatillas Velocity Nitro 2 de running',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/11.webp',
        cat: 'running',
        nuevoColeccion:false

    },
    {
        id: 60,
        name: 'Zapatillas Voyage Nitro de running',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/12.webp',
        cat: 'running',
        nuevoColeccion:false

    },
/////////////////////////////////////////////
    {
        id: 61,
        name: 'Spikes evoSPEED Electric 11 SP Track & Field.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/1.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 62,
        name: 'Zapatillas Cell Fraction Knit 2.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/2.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 63,
        name: 'Zapatillas Cell Fraction Knit.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/3.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 64,
        name: 'Zapatillas de running para hombre Magnify Nitro.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-runing/4.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 65,
        name: 'Zapatillas Electrify Nitro Turn.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/5.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 66,
        name: 'Zapatillas Pure XT Fade Pack de entrenamiento.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/6.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 67,
        name: 'Zapatillas Pure XT Outdoor Camo de training.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/7.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 68,
        name: 'Zapatillas PWRFRAME de training 3',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/8.jpg',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 69,
        name: 'Zapatillas PWRFRAME de training.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/9.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 70,
        name: 'Zapatillas PWRFRAME Outdoor Camo de training 2.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/10.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 71,
        name: 'Zapatillas PWRFRAME Outdoor Camo de training.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/11.webp',
        cat: 'training',
        nuevoColeccion:false

    },
    {
        id: 72,
        name: 'Zapatillas PWRFRAME para training.',
        precio: 299,
        data: 'solo para expertos',
        img: './img/zapas-training/12.webp',
        cat: 'training',
        nuevoColeccion:false

    },
///////////////////////////////////////////////////////

];