import "../styles/cart.css"

function Cart () {


let monsteraPrix = 9;
let lierrePrix = 10;
let bouquetFleurPrix = 15; 

const mapFleur = new Map()
mapFleur.set("age", 14);

console.log("Map Fleur", typeof mapFleur);
console.log(mapFleur.get("age"));

console.log(mapFleur);

const tableauFleurs = ["Rose", "Jasmin", "Tulipe"];

tableauFleurs.map((fleur)=> fleur.toUpperCase());
console.log(tableauFleurs[0]);

return (
    <div className= "lmj-cart">
        <h1>Mon panier</h1>
    <ul>
        <li>Monstera: {monsteraPrix} $</li>
        <li>Lierre: {lierrePrix} $ </li>
        <li>Bouquet de fleurs: {bouquetFleurPrix} $ </li>
    </ul>
    
    <p>Total : {monsteraPrix +  lierrePrix + bouquetFleurPrix} $ </p>
    
    </div>

    );

};

export default Cart ;