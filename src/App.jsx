import { useState } from 'react'
import './App.css'
import RenderingLists from './examples/RenderingLists'
import RespondingEvents from './examples/RespondingEvents'
import List from './examples/ChemistExample/App';
import { Recipe } from './examples/Recipe';
// import Counter from './examples/Counter'
import { Counter } from './examples/Counter/Counter'
import { ShapeEditor } from './examples/CircleDown';
import { AddNames } from './examples/AddName';
import { DeleteEntries } from './examples/DeleteEntries';

function App() {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
      <h1>React Practice</h1>
      <RenderingLists/>
      <RespondingEvents/>
      {/* <Counter/> */}
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <List/>
      <h2>For two</h2>
      <Recipe drinker={2}/>
      <h2>For group</h2>
      <Recipe drinker={4}/>
      <Counter/>
      <ShapeEditor/>
      <AddNames/>
      <DeleteEntries/>
    </>
  )

  function MyButton({count , onClick}){
    return(
      <button onClick={onClick}>Clicked {count} Times</button>
    )
  }
}

export default App
