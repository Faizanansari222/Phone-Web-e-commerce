// let object = axios
//   .get("https://fakestoreapi.com/products")


let data = localStorage.getItem('items')
let items = JSON.parse(data)
console.log(items);