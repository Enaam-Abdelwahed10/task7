const data = {
    products: [
        {name:"airpodis",price: 500, rating: 2.5},
        {name:"charger",price: 100, rating: 5},
        {name:"smartwatch",price: 800, rating: 4},
        {name:"cover",price: 20, rating: 3},
    ]
};
function getStars(rating) {
    const count = Math.round(rating);
    return "*".repeat(count) + "*".repeat(5-count);
  
}
console.log("التقييم ====اعلى من 3: ")
data.products.forEach(product => {
    if (product.rating>3) {
        console.log (`prodactName: ${product.name}`);
         console.log (`price : $${product.price}`);
          console.log (`rating : $${product.rating} {getStars(product.rating)}`);
          console.log ("-----------------------------------");
          
         

    }
});