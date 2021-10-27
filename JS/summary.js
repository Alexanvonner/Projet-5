let produitDansLocalStorage = JSON.stringify(localStorage.getItem("orderId"));
console.log(produitDansLocalStorage);

let orderId = document.getElementById("orderId");

orderId.innerHTML = `${produitDansLocalStorage}`;

localStorage.clear();


setTimeout(function () {
    window.location.href="index.html"; 
   //will redirect to your blog page (an ex: blog.html)
}, 4000); //will call the function after 2 secs.