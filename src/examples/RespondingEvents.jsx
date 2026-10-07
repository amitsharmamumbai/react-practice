function MyButton(){

    function handleClick(){
        alert('You Clicked Me!')
    }

    return (
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}

export default MyButton;