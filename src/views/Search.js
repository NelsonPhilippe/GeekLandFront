import * as React from "react";

import "./../css/Search.css";

import ProductSearch from "../components/ProductSearch";
import Navbar from "../components/Navbar";

import { useParams } from "react-router-dom";


function Search() {

  const { value } = useParams()

  console.log(value);


  return (
    <div className="Search">
      <Navbar />
      <div className="number-result">
        <h3>150 résultats de recherche :</h3>
      </div>
      <div className="container">
        <ProductSearch />
        <div className="sep"></div>
      </div>
    </div>

  );

}

export default Search;
