// const myNumber = [2355, 7235, 8135, 1762, 2361, 8351]
// const MIN = 1000
// const MAX = 9999


// let num = []
// for (let item of myNumber) {
//     let newnumber = Math.floor(Math.random() * (MAX - MIN) + MIN)
//     if (myNumber.includes(newnumber) != true){
//        num.push(newnumber)
//     }
// }
// console.log(num);



let hotel = [
    [
        {
            room: 1,
            price: 300,
            brand: "Luxe",
            children: false,
        },
        {
            room: 2,
            price: 4000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 3,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 4,
            price: 900,
            brand: "Luxe",
            children: true,
        },
    ],
    [
        {
            room: 5,
            price: 700,
            brand: "Luxe",
            children: true,
        },
        {
            room: 6,
            price: 79000,
            brand: "President",
            children: true,
        },
        {
            room: 7,
            price: 600,
            brand: "Luxe",
            children: false,
        },
        {
            room: 8,
            price: 950,
            brand: "Luxe",
            children: true,
        },
    ],
    [
        {
            room: 9,
            price: 1900,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 10,
            price: 5000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 11,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 12,
            price: 250,
            brand: "Luxe",
            children: false,
        },
    ],
    [
        {
            room: 13,
            price: 10000,
            brand: "President",
            children: true,
        },
        {
            room: 11,
            price: 8000,
            brand: "President",
            children: false,
        },
    ],
];


hotel = hotel.flat(Infinity)

console.log(hotel);

let brands = {
    president: [],
    deluxe: [],
    luxe: [],
};
brands.president = hotel.filter(item => item.brand == "President")
brands.deluxe = hotel.filter(item => item.brand == "Deluxe")
brands.luxe = hotel.filter(item => item.brand == "Luxe")
console.log(brands);
//zadacha 1

//zadacha2
hotel.forEach(item => {
    item.eting = false
});
console.log(hotel);

let rooms = {
    all_roms: [],
    rooms: 0,
};
//zadacha2

//zadacha3
rooms.all_roms = hotel.sort((a, b) => a.price - b.price)
console.log(rooms);
//zadacha3

//zadacha4
let most_expensive = {}
most_expensive = hotel.find(item => item.price > 10000)
console.log(most_expensive);
//zadacha4

//zadacha4
let each_floor = hotel.map(item => item.price + 0)
console.log(each_floor);
//zadacha4


let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
};





console.log(hotel);