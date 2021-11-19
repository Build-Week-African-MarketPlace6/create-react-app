import React from 'react';
import ProductList from '../ProductList';

class Content extends React.Component {
	render() {
		return (
			<div class='container'>
				<div class='row'>
					<div id='content' class='col-8 col-12-medium'>
						<ProductList />
					</div>
				</div>
			</div>
		);
	}
}
export default Content;
