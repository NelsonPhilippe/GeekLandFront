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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="price">
              <h1>50 €</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
