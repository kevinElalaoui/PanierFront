import React from "react";

const Cart = props => {
  const removeProduct = code => {
    // console.log(props.cart);
    const newProductsInCart = props.cart.filter(item => {
      return item.code !== code;
    });
    // console.log(newProductsInCart);
    props.setCart(newProductsInCart);
  };
  /////////////////////////////////////////////
  const addQuantite = code => {
    //console.log(code);
    //console.log(quantite);
    //le map va boucler dans le tableau props.cart et si le code mis en parametre à l'appel de fonction dans le button :
    //props.element.code== le code d'un item dans le tableau props.cart alors
    //on va incrémenter les quantité de ces items correspondant
    const newQuantiteInCartPlus = props.cart.map(item => {
      if (code == item.code) {
        //console.log(item);
        item.quantite++;
      }
      return item;
    });
    //console.log(newQuantiteInCartPlus);

    props.setCart(newQuantiteInCartPlus);
  };
  ///Fonction DECREMENTATION///
  const offQuantite = code => {
    //console.log(code);
    //console.log(quantite);

    //le map va boucler dans le tableau props.cart et si le code mis en parametre à l'appel de fonction dans le button :
    //props.element.code== le code d'un item dans le tableau props.cart alors
    //on va décrémenter les quantité de ces items correspondant
    const newQuantiteInCartMoins = props.cart.map(item => {
      if (code == item.code) {
        //console.log(item);
        item.quantite--;
      }
      return item;
    });

    //cart devient newQuantiteInCartMoins au retour de verification de la boucle + if
    props.setCart(newQuantiteInCartMoins);
  };
  console.log(props.element.prix_unitaire);

  //props.cart.map(item => {
  // if (props.element.quantite == 0) {
  // return <img src="img\panier-vide.gif" heignt="0" width="0" />;
  // }else{

  return (
    <table>
      <div className="Cart">
        <div>
          <p>
            <b>Code article :</b> {props.element.code}
          </p>
          <p>
            <b>Quantité :</b> {props.element.quantite}{" "}
            <ion-icon
              name="chevron-back-outline"
              onClick={() => {
                props.element.quantite > 1
                  ? offQuantite(props.element.code)
                  : (props.element.quantite = 1
                      ? removeProduct(props.element.code)
                      : null);
              }}
            ></ion-icon>
            <ion-icon
              name="chevron-forward-outline"
              onClick={() => {
                if (props.element.quantite < 100) {
                  addQuantite(props.element.code);
                } else if ((props.element.quantite = 100)) {
                  alert("Pascal a dit pas plus de 100 !!!!");
                }
              }}
            ></ion-icon>
          </p>
          <p>
            <b>Prix unitaire :</b> {props.element.prix_unitaire}
          </p>
          <p>
            <b>Prix Total pour l'article :</b>{" "}
            {props.element.prix_unitaire * props.element.quantite}
          </p>{" "}
          <ion-icon
            name="trash-outline"
            onClick={() => removeProduct(props.element.code)}
          ></ion-icon>
        </div>
      </div>
    </table>
  );
};
//});
//};

export default Cart;
