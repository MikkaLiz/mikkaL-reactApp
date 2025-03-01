import './App.css'
import './components/NavbarComponent'
import NavbarComponent from './components/NavbarComponent'
import NavBarStrapComponent from './components/NavBarStrapComponent'
import ContadorComponent from './components/ContadorComponent'
import ItemListContainer from './components/ItemListContainerComponent'
function App() {
  return (
    <>
      <NavBarStrapComponent/>
      <ItemListContainer greeting="Hola"/>
    </>
  )
}

export default App
