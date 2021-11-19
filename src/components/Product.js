import React from "react";

const Product = props => {
    return (
        <div className='product'>
            {/* <img src={props.product.image} alt={`${props.product.item_name} `} /> */}

        <h1 className="name">{props.product.item_name}</h1>

        <p className="price">${props.product.item_price}</p>
        <button onClick={() => props.handleDelete(props.product.item_id)}> Delete Item </button>
        <button onClick={() => props.addItem(props.product)}>
            Add to cart
        </button>
        </div>
    )
}

export default Product