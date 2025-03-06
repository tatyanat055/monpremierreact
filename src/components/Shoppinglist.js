//Ce composant va regrouper ma liste de courses

import { planteListe } from "../data/planteListe";  
import CarScale from "./CareScale";
import '../styles/shoppingList.css';
function Shoppinglist () {

//Créer une liste sous forme de tableau
let listCourse = ["monstera", "rosier", "acacier", "palmier"];
//Création d'un tableau regroupant toutes les catégories des plantes.
const categories = planteListe.reduce( (cat,plante) =>
    cat.includes(plante.category) ? cat : cat.concat(plante.category),
[]
);

console.log("catégories plantes :", categories);


    return (
        <div>
            <h3>Liste des courses</h3>

            <ul>
               { listCourse.map((plantes, index) => (
                <li key={`${index}`}>{plantes}</li>
            )
            )}
        </ul>

        <h3> Les catégories : </h3>
        <ul>
            {
            categories.map((maCategorie) => (
            <li key={maCategorie}>{maCategorie}</li>
            )
        )}
        </ul>
        <h6>Les plantes : </h6>
            <ul className="lmj-plant-list">
                 {
              planteListe.map((plantes) => (
             <li key={plantes.id} className="lmj-plant-item">
                {plantes.name} 
                <CarScale lumiere = {plantes.light} typePlante = 'lumiere'/>
                <CarScale lumiere = {plantes.water} typePlante = 'eau'/>
                
                
                </li>
                ))
                 }
            </ul>
        </div>
    );
}

export default Shoppinglist;