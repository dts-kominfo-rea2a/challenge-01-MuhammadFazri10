// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//Data Monica
const colorsMonica = ["Yellow", "Pink", "White", "Purple"];

const educationsMonica = [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" },
];
const favoriteRestoMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

let MonicaColors = new Set(colorsMonica);
let MonicaFavoriteResto = new Set(favoriteRestoMonica);

// Data Wendy
const colorsWendy = ["Blue", "Black", "Grey"];
const educationsWendy = [
    { name: "SD 02", city: "Jakarta", graduate: "2010" },
    { name: "SMP 03", city: "Bogor", graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" },
];
const favoriteRestoWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

let WendyColors = new Set(colorsWendy);
let WendyFavoriteResto = new Set(favoriteRestoWendy);


//Monica
const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: [...MonicaColors],
    isHavePet: 'Yes',
    education: educationsMonica,
    favoriteRestaurant: [...MonicaFavoriteResto]
};

//Wendy
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: new Set('Blue', 'Black', 'Grey'),
    isHavePet: 'No',
    favoriteColor: [...WendyColors],
    isHavePet: 'Yes',
    education: educationsWendy,
    favoriteRestaurant: [...WendyFavoriteResto]
};

// TestKode
// console.log(firstUser);
// console.log(secondUser);


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};