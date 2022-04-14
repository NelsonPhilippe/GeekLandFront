
import "./../css/Search.css";

import ProductSearch from "../components/ProductSearch";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Search() {

  const { value } = useParams()
  const [product, setProduct] = useState([])
  const [ isLoad, setLoad] = useState(false)


  useEffect(() => {

    function handleStatusChange() {
      axios.post('http://localhost:8000/api/search', {
        name: value
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
          'Access-Control-Allow-Origin': '*'
        }
      }).then((res) => {

        let lastProducts = []

        let datas = res.data

        datas.articles.forEach(element => {
          lastProducts.push(<ProductSearch 
            key={element.id} 
            title={element.name} 
            description={element.description} 
            price={element.price}/>)
        });

        setProduct(lastProducts)
        console.log(product);
      })

    }

    if(!isLoad){
      handleStatusChange()
      setLoad(true)
    }

  }, [product, isLoad, value])


  return (

    <div className="Search">

      <Navbar />
      <div className="number-result">
        <h3>150 résultats de recherche :</h3>
      </div>
      <div className="container-search">
        {product}
        <div className="sep"></div>
      </div>
    </div>

  );

}

export default Search;
