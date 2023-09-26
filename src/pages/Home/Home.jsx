import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";

const Home = () => {
    return (
        <Layout>
        <ItemList>
          {
              isLoading 
              ? <p>Estamos tejiendo . . .</p>
              : productos.map(prod => (
                  <Item  
                  id={prod.id}
                  nombre={prod.nombre}
                  descripcion={prod.descripcion}
                  />
              ))
          }
        </ItemList>
      </Layout>
    )
}

export default Home;