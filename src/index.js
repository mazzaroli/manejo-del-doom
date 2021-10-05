/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// const { doc } = require("prettier");

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app')

// in
const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: "USD",
    }).format(price)

    return newPrice
}

// web api
// Conectarnos al server
window.fetch(`${baseUrl}/api/avo`)
// Procesar la respuest, y convertirla en JSON
.then(respuesta => respuesta.json())
// JSON -> Data -> Renderizar info browser
.then(datos => {
    const allItems = []
    datos.data.forEach(item => {
        // Crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"


        // Crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-lg"

        // Crear Precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = "text-gray-600"
        

        // Creamos un contenedor el título y el precio
        const priceAndTitle = document.createElement("div")
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        // Metemos todo dentro de una tarjeta contenedora
        const card = document.createElement("div");
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
        card.append(imagen, priceAndTitle);

        const container = document.createElement('div')
        container.append(card);

        allItems.push(container)
    });
    appNode.append(...allItems)
});




// MODO ASYNC AWAIT
// const url = "https://platzi-avo.vercel.app/api/avo";

// web api
// async function fetchData() {
//     const response = await fetch(url),
//     data = await response.json(),
//     allItems = [];
  
//     data.data.forEach((item) => {
//       // create image
//       const image = document.createElement("img");
//       // create title
//       const title = document.createElement("h2");
//       // create price
//       const price = document.createElement("div");
  
//       const container = document.createElement("div");
//       container.append(image, title, price);
  
//       allItems.push(container);
//     });
  
//     document.body.append(...allItems)
//   }
  
//   fetchData();