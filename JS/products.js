// j'utilise l'objet window location search pour recuperer l'url entier
let url_id = window.location.search;

// je supprime les caractere (?=id)  avec la methode slice
let id = url_id.slice(4);
console.log(id);

fetch(`http://localhost:3000/api/teddies/${id}`)
.then(response => response.json())
.then((items) => {
for (let i = 0; i < items.length; i++) {
   teddies(items[i])
}

// je cible la zone ou injecter mon code html 
let products = document.getElementById('container_products');


// j'injecte mon code html contenant les donnée de l'api
    products.innerHTML = `
    <div id="products_page" class="col-lg-6">
        <img src="${items.imageUrl}"  alt="image d'une peluche" id="img-products">
        <p id="name_products"><strong>${items.name}</strong></p>
        <p>${items.description}</p>
        <p>${items.price / 100} €</p>
        <label for="optionProducts"></label>
                  <select name="optionsProducts" id="optionQuantity"> 
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
                  </select>
                  <label for="optionProducts"></label>
                  <select name="optionsProducts" id="optionProducts">
                  </select>
                </form>
                <button id="btn-envoyer" type="submit" name="btn-envoyer">Commander l'article</button>
    </div>
    <div class="col-lg-4" id="logo_livraison">
            <img src="img/colissimo.png" alt="logo colissimo" class="logo_livraison">
            <img src="img/chronopost-removebg-preview.png" alt="logo chronopost" class="logo_livraison">
        </div>
    `;
    // boucle for pour parcourir ma liste de couleur pour pouvoir l'afficher dans les options 
    for (let index = 0; index < items.colors.length; index++) {
        document.getElementById('optionProducts').innerHTML += `<option value="${items.colors[index]}">${items.colors[index]}</option>`;
        
    }
   
})

// ecouter le click sur le boutton <<<<ajouter au panier>>>>

// au click envoyer les valeur dans le localStorage 
