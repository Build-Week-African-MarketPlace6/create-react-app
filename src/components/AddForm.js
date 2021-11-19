import React, { useState } from 'react';
import axios from 'axios';
import axiosWithAuth from './../utility/axiosWithAuth';
const AddForm = (props) => {

    const [newItem, setNewItem] = useState({
        item_name:"",
        item_price:1,
        item_description:"",
    });

    const [error, setError] = useState('')

    const handleChange = e => {
        setNewItem({
            ...newItem,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newItem.item_name === "" || newItem.item_price === "" || newItem.item_description === "") {
            setError('Must fill out all')
    }else{
        // props.setProducts([...props.products, newItem])
        axios.post(`https://marketplacelambda.herokuapp.com/api/owner/1/items`, newItem)
        .then(res => {
            props.setProducts(res.data);
        })
        .catch(err=> {
            console.log(err);
          })
    }
        

    }
        return(
            <div>
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="item_name">Name:</label><br/>
                <input onChange={handleChange} value={newItem.item_name} name="item_name" id="item_name" />
            </div>
            <div className="form-group">
                <label htmlFor="item_price">Price:</label><br/>
                <input onChange={handleChange} value={newItem.item_price} name="item_price" id="item_price" />
            </div>
            <div className="form-group">
                <label htmlFor="item_description">Description:</label><br/>
                <input onChange={handleChange} value={newItem.item_description} name="item_description" id="item_description" />
            </div>
            {
              error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error}</div>
            }
            <button>Submit Product</button>
        </form>
            </div>)

}

export default AddForm;
