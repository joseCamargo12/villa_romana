import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App= () => {

  return (
      <div style={{width: '100vw', height: '100vh'}}>
        <NavBar />
        <ItemListContainer greeting= "Bienvenidos a su eco hotel VILLA ROAMANA"/>
      </div>
  )
}

export default App
