import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';'../components/ItemListContainer'

function App() {

  return(
    <main>
      <Navbar />
      <ItemListContainer greeting={'¡Bienvenidos a Australis Tejidos! 💕'}/>
    </main>
  );

}

export default App;


