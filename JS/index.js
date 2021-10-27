fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then((items) => {
for (let i = 0; i < items.length; i++) {
    displayElement(items[i]);
}
})

function displayElement(item) {
    let txt = document.getElementById("container_products");
    txt.innerHTML += `
    <div id="products">
    <a href="products.html?id=${item._id}" id="href_products">
                <img src="${item.imageUrl}" id="img_products">
                <p><strong>${item.name}</strong></p>
                <p>${item.description}</p>
                <p id="price"> <strong>${item.price / 100} € </strong></p>
            </div>
    </a>
    `;
}



// requete http 
// local storage 
// sync async 
// porter des variables let var const