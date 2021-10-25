// je réalise un FETCH (GET) pour recuperer les info au niveau de L'API
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then((items)=>{
for (let index = 0; index < items.length; index++) {
    displayElement(items[i]);
}
})

function displayElement(items){
    let container = document.querySelector("#container_products");
    console.log(container);
}
displayElement();