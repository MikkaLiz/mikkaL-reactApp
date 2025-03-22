const products = [
    {
        "id": "01",
        "name": "Te verde",
        "price": 10000,
        "description": "Un té suave y refrescante lleno de antioxidantes.",
        "stock": 10,
        "category": "vendidos",
        "img": "https://picsum.photos/201"
    },
    {
        "id": "02",
        "name": "Café arábico",
        "price": 12000,
        "description": "Café de grano arábico de alta calidad con un sabor suave y afrutado.",
        "stock": 15,
        "category": "ofertas",
        "img": "https://picsum.photos/202"
    },
    {
        "id": "03",
        "name": "Té negro",
        "price": 9000,
        "description": "Té fuerte y robusto, ideal para el desayuno.",
        "stock": 20,
        "category": "vendidos",
        "img": "https://picsum.photos/203"
    },
    {
        "id": "04",
        "name": "Café robusta",
        "price": 11000,
        "description": "Café intenso con un sabor más fuerte y más cafeína.",
        "stock": 8,
        "category": "ofertas",
        "img": "https://picsum.photos/204"
    },
    {
        "id": "05",
        "name": "Té de manzanilla",
        "price": 8000,
        "description": "Infusión relajante ideal para antes de dormir.",
        "stock": 25,
        "category": "vendidos",
        "img": "https://picsum.photos/205"
    },
    {
        "id": "06",
        "name": "Té chai",
        "price": 13000,
        "description": "Una mezcla especiada de té negro, canela, jengibre y cardamomo.",
        "stock": 12,
        "category": "vendidos",
        "img": "https://picsum.photos/206"
    },
    {
        "id": "07",
        "name": "Café descafeinado",
        "price": 9500,
        "description": "Café con todo el sabor, pero sin cafeína.",
        "stock": 18,
        "category": "ofertas",
        "img": "https://picsum.photos/207"
    },
    {
        "id": "08",
        "name": "Té oolong",
        "price": 14000,
        "description": "Un té semifermentado con un sabor único entre el té verde y el té negro.",
        "stock": 14,
        "category": "vendidos",
        "img": "https://picsum.photos/208"
    },
    {
        "id": "09",
        "name": "Infusión de menta",
        "price": 7000,
        "description": "Una refrescante infusión ideal para mejorar la digestión.",
        "stock": 30,
        "category": "nuevos",
        "img": "https://picsum.photos/209"
    },
    {
        "id": "10",
        "name": "Café expreso",
        "price": 15000,
        "description": "Café fuerte y concentrado para los amantes del buen café.",
        "stock": 5,
        "category": "ofertas",
        "img": "https://picsum.photos/210"
    }
]


export default function getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 4000);
    });
}