// const { rejects } = require("assert");
// const { log } = require("console");

// const phones = [
//   {
//     brand: "Samsung",
//     model: "S20",
//     ram: 8,
//     rom: 256,
//     camera: "20 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Xiomi",
//     model: "note10",
//     ram: 4,
//     rom: 64,
//     camera: "10 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Infinix",
//     model: "z10",
//     ram: 2,
//     rom: 16,
//     camera: "5 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Tecno",
//     model: "spark10",
//     ram: 12,
//     rom: 512,
//     camera: "25 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Iphone",
//     model: "14",
//     ram: 4,
//     rom: 1024,
//     camera: "30 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Oppo",
//     model: "F11",
//     ram: 8,
//     rom: 256,
//     camera: "20 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Vivo",
//     model: "y20",
//     ram: 4,
//     rom: 64,
//     camera: "8 megapixel",
//     price: 15000,
//   },
//   {
//     brand: "Abdullah",
//     model: "s50",
//     ram: 50,
//     rom: 1024,
//     camera: "60 megapixel",
//     price: 300000,
//   },
// ];

// let bankBalance = 200000;
// let rishta = function greetUser(bankBalance)
// return new Promise((resolve, rejects) =>{

// }) {
//   if (bankBalance > 100000) {
//     resolve("shadi Mubarak");
//   } else {
//     rejects("Bhot Bura hua");
//   }
//
let data;
let cartBtn = document.querySelector(".cartBtn");
let productDisplay = document.querySelector(".main");
axios
  .get("https://fakestoreapi.com/products")
  .then((Response) => {
    data = Response.data;
    for (let i = 0; i <= Response.data.length; i++) {
      // console.log(Response.data[i]);
      productDisplay.innerHTML += `<div class="m-5 pro-div card shadow-md p-5 pointer-events-auto bg-white rounded-md">
      
      <div class="m-3 pro-img">
    <img
      class="border-buttom-2"
      src="${Response.data[i].image}" 
      class="card-img-top"
      alt="Images"
    /></div>
    <div class="card-body">
      <h5 class="card-title text-gray-800 text-lg mt-14 my-5 font-medium">
        ${Response.data[i].title}
      </h5>
      <p class="card-text">
      model: S20 <br />
      ram: 8<br />
      rom: 256<br />
        camera: 20 megapixel
        </p>
        <h5 class="card-title my-5 text-gray-800 text-xl font-bold">
      ${Response.data[i].price} $
      </h5>
      <button  onclick="shop(${i})"
        href="#"
        class="my-14 px-5 flex items-center bg-sky-400 rounded-lg p-2  font-bold text-white"
        >
        Shop
        </button>
        </div>
        <br/>
        `;
    }
  })
  .catch((err) => {
    console.log(err);
  });

// btn.addEventListener('click', ([i])=>{
//   for (let i = 0; i<= Response.data.length; i++){
//     arr.push(Response.data[i])
//   console.log(arr)

//   }

//   })

let arr = [];

function shop(i) {
  // let product = { Response };
  arr.push(data[i]);

  console.log(arr);

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}

cartBtn.addEventListener("click", function () {
  localStorage.setItem("Items", JSON.stringify(arr));
  window.location = "checkout.html";
});
