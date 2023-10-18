import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartCtx } from "../../contexts/CartContext";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {

    return (
      <Layout>
        <ItemListContainer/>
      </Layout>
    )
}

export default Home;