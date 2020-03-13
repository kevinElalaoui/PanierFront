import React from "react";
import BasPage from "../BasPage/BasPage";

const HautPage = props => {
  let tableau = [];
  tableau = props.cart;
  //console.log(props.cart)
  return (
    <React.Fragment>
      <div className="HautPage">
        <h1>Gestion du Panier</h1>
        <form
          onSubmit={e => {
            props.setCountPrixUnit(Math.floor(Math.random() * 9999 + 1));
            e.preventDefault();
            {
              // console.log(props.cart);
              ///////////////////////////
              const codeQuerySelectore = parseInt(
                document.querySelector("#code").value
              );
              ////////////////////////
              if (tableau.length == 0) {
                // console.log("cc 0");

                tableau.push({
                  //Il faut donner une key: code, quantite et prix_unitaire
                  code: parseInt(document.querySelector("#code").value),
                  quantite: parseInt(document.querySelector("#quantite").value),
                  prix_unitaire: parseInt(
                    document.querySelector("#prix_unit").value
                  )
                });
                props.setCart(tableau);
              } else {
                //console.log(codeQuerySelectore);

                let var1 = tableau.find(
                  item => item.code === codeQuerySelectore
                );

                // console.log(var1);

                if (!var1) {
                  //console.log("test");
                  tableau.push({
                    //Il faut donner une key: code, quantite et prix_unitaire
                    code: parseInt(document.querySelector("#code").value),
                    quantite: parseInt(
                      document.querySelector("#quantite").value
                    ),
                    prix_unitaire: parseInt(
                      document.querySelector("#prix_unit").value
                    )
                  });
                  props.setCart(tableau);
                } else {
                  tableau.map(element => {
                    if (var1 == element) {
                      // element.quantite++;
                      element.quantite += parseInt(
                        document.querySelector("#quantite").value
                      );
                    }
                    return element;
                  });
                }
              }
            }
            //console.log(props.cart);
          }}
        >
          <div className="bonjour">
            {" "}
            <h3>{`
        
  Bonjour Pascal, bienvenue sur mon Petit Panier, que desirez vous acheter, tout est pas cher, enfin le prix est au hasard, bonne chance!!
  `}</h3>
          </div>
          <p>
            <label>
              Code
              <input
                id="code"
                type="number"
                required
                min="1"
                max="10000"
                step="1"
                minLength="1"
                maxLength="5"
                size="10"
                placeholder="1 to 10000"
              />
            </label>
          </p>
          <p>
            <label>
              Quantité
              <input
                id="quantite"
                type="number"
                required
                min="1"
                max="100"
                step="1"
                minLength="1"
                maxLength="3"
                size="10"
                placeholder="1 to 100"
              />
            </label>
          </p>
          <p>
            <label>
              Prix Unitaire
              <input
                disabled
                id="prix_unit"
                type="text"
                value={props.countPrixUnit}
                minLength="1"
                maxLength="10"
                size="10"
              />
              €
            </label>
          </p>
          <div className="submit">
            <input type="submit" alt="Submit" required value="" />
          </div>
        </form>
      </div>

      <BasPage
        countPrixUnit={props.countPrixUnit}
        setCountPrixUnit={props.setCountPrixUnit}
        cart={props.cart}
        setCart={props.setCart}
        prixTotalPanier={props.prixTotalPanier}
        setPrixTotalPanier={props.setPrixTotalPanier}
      />
    </React.Fragment>
  );
};

export default HautPage;
