import React from "react";
import "./App.css";
import "./resetCss.css";
import HautPage from "./HautPage/HautPage";

function App() {
  const [countPrixUnit, setCountPrixUnit] = React.useState(
    Math.floor(Math.random() * 9999 + 1)
  );
  const [cart, setCart] = React.useState([]);
  const [prixTotalPanier, setPrixTotalPanier] = React.useState(0);
  return (
    <React.Fragment>
      <div className="App">
        <HautPage
          cart={cart}
          setCart={setCart}
          countPrixUnit={countPrixUnit}
          setCountPrixUnit={setCountPrixUnit}
          prixTotalPanier={prixTotalPanier}
          setPrixTotalPanier={setPrixTotalPanier}
        />
      </div>
    </React.Fragment>
  );
}

export default App;

/*
TO DO dans la version 4 : 
//

si panier vide : img panier-vide
 */
