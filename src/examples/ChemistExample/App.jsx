import { people } from './data.js';
import { getImageUrl } from './utils.js';

 let chemist = [];
  let everyoneElse = [];
  people.forEach(person => {
    if(person.profession === 'chemist'){
      chemist.push(person);
    }
    else{
      everyoneElse.push(person);
    }
  })

export function ListSection({title, profession}){

    return(
      <>
        <h2>{title}</h2>
        <ul>
          {
            profession.map(person =>
              <li key={person.id}>
              <img src={getImageUrl(person)}></img> 
                <p>
                    <b>{person.name} :</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
              </li>
            )
          }
        </ul>
      </>
    )
}

export default function List(){
    return(
        <>
          <h1>Scientist</h1>
          <ListSection 
              title = "Chemist"
              profession = {chemist}
          />
          <ListSection 
              title = "Everyone Else"
              profession = {everyoneElse}
          />
        </>
        
    );
}