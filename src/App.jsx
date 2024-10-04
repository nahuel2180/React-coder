import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './App.css'


function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Hola, Bienvenido a mi tienda!"}/>
    </div>
  )
}

export default App
