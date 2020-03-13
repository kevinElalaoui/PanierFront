import React from "react";
import Cart from "../Cart/Cart";

const BasPage = props => {
  var totalPanier = 0;

  return (
    <div className="BasPage">
      <div className="mon_panier">
        <h2>Mon Panier</h2>
      </div>
      <div>
        <div className="prix_total">
          <b>Prix total du panier :</b>
        </div>
        <div className="value_prix_total">
          {" "}
          {props.cart.map(element => {
            {
              console.log(totalPanier);
              totalPanier =
                totalPanier + element.quantite * element.prix_unitaire;
              console.log(totalPanier);

              console.log(
                typeof element.prix_unitaire,
                typeof element.quantite,
                typeof totalPanier
              );
            }
          })}
          {props.setPrixTotalPanier(totalPanier)}
          {props.prixTotalPanier}
        </div>
        <table>
          {props.cart.map(element => {
            return (
              <Cart
                element={element}
                setCart={props.setCart}
                cart={props.cart}
                countPrixUnit={props.countPrixUnit}
                setCountPrixUnit={props.setCountPrixUnit}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default BasPage;
