export function Recipe({drinker}){
    return(
        <ul>
            <li>Boils {drinker} cups of water</li>
            <li>Add {drinker} spoons of tea and {0.5 * drinker} spoons of spice.</li>
            <li>Add {0.5 * drinker} cups of milk to boil and sugar to taste.</li>
        </ul>
    );
}