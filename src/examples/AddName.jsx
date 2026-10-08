import {useState} from "react"

let nextId = 0;

export function AddNames(){

    const[name, setNames] = useState('');
    const[artists, setArtists] = useState([]);

   return(
        <>
            <h1>Add Names</h1>
            <input type="text" value={name} onChange={(e)=>
                setNames(e.target.value)
            }></input>
            <button onClick={()=>{
                setArtists([
                    ...artists,
                    {
                        id: nextId++,
                        name : name
                    }
                ]);

                setNames("");

            }}>Add</button>

            <ul>
                {artists.map(artist =>
                    <li key={artist.id}>{artist.name}</li>
                )}
                
            </ul>
        </>
   )
}