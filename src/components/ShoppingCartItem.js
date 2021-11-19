import React from 'react';

const Item = props => {
    
	return (
		<div className="shopping-cart_item">
			{/* <img src={props.item_image} alt={`${props.item_name}`} /> */}
			<div>
				<h1>{props.item_name}</h1>
				<p>$ {props.item_price}</p>
				<button onClick={() => props.removeFromCart(props.item_id)} >Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;