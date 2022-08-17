export type Product = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
        "rate": number,
        "count": number
    }
}

export type User = {
    "address": {
        "geolocation": {
            "lat": string,
            "long": string
        },
        "city": string,
        "street": string,
        "number": number,
        "zipcode": string
    },
    "id": 1,
    "email": string,
    "username": string,
    "password": string,
    "name": {
        "firstname": string,
        "lastname": string
    },
    "phone": string,
    "__v": number
}

export type Cart = {

}