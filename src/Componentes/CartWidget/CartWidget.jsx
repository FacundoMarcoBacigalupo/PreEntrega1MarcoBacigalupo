import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./estiloswidget.css"



const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<div id="containerCart">
			<i className="bi bi-cart3"></i>
			<span className="numeroCarrito">{ totalProducts() || "" }</span>
		</div>
	);
};


export default CartWidget;