import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import AddForm from './AddForm';
import axiosWithAuth from './../utility/axiosWithAuth';
const ProductList = (props) => {
	const { addItem } = props;

	const [products, setProducts] = useState([]);
	const [add, setAdd] = useState(false);

	useEffect(() => {
		axios
			.get(`https://marketplacelambda.herokuapp.com/api/shelf`)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleAdd = () => {
		setAdd(true);
	};

	const handleDelete = (id) => {
        axios.delete(`https://marketplacelambda.herokuapp.com/api/owner/deleteitem/${id}`)
          .then(resp=>{
            setProducts(resp.data);
          })
          .catch(err => {
            console.log(err);
          })
      }

	return (
		<div className='product-container'>
			<h1>Market Place Foods</h1>
			{products.map((product) => (
				<Product key={product.id} product={product} addItem={addItem} handleDelete={handleDelete} />
			))}
			<button onClick={handleAdd}> Add New Product</button>
			{add && <AddForm setProducts={setProducts} products={products} />}
		</div>
	);
};

export default ProductList;
