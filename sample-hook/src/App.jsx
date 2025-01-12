import './App.css'

let upperCase = false;
const toggleCase = () => {
  const h1 = document.getElementById('h1');
  if (upperCase) {
    h1.innerText = h1.innerText.toLowerCase();
    console.log('lower case');
  } else {
    h1.innerText = h1.innerText.toUpperCase();
    console.log('upper case');
  }
  upperCase = !upperCase;
}

function App() {

  return (
    <>
      <h1 id="h1" onClick={toggleCase}>Hello World!</h1>
    </>
  )
}

export default App
