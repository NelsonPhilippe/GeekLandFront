import "../css/search.css";

function Search() {
  return (
    <div>
      <div className="number-result">
        <h3>150 résultat de recherche :</h3>
      </div>

      <div className="container">
        <div className="result">
          <img
            src="/img/Tanjiro Hinokami.jpg"
            alt="Tanjiro Hinokami"
            title="Tanjiro Hinokami"
          />

          <div className="text">
            <h1>Titre de l'objet</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ut rhoncus, porttitor at id odio id
            </p>
            </div>
            <div className="price">
              <h1>250 €</h1>
          </div>
        </div>
          <div className="sep"></div>
      </div>
    </div>
  );
}

export default Search;
