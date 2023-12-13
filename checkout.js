let items1 = JSON.parse(localStorage.getItem('Items'));
let main = document.querySelector('.main')
main.innerHTML +=`<div class="m-5 pro-div card shadow-md p-5 pointer-events-auto bg-white rounded-md">
    
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
      `
console.log(items1);
