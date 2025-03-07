//Le composant <PlanteItem /> va nous permettre de gérer chaque plante de manière individuel

import CarScale from "./CareScale";
function PlanteItem({name, id, water, light}) {
    return(
        <li className="lmj-plant-item">
            <img className="lmj-plant-item-cover" 
                src="" alt={`${name}`}/>
            {name}

            <div>
                <CarScale typeDeCulture={water} typePlante="eau"/>
                <CarScale typeDeCulture={light} typePlante="lumiere"/>
                
            </div>

        </li>

    )

}






export default PlanteItem;