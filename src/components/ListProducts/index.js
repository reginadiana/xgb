import React, { Component } from 'react';
import data from "../../services/json"; 

export class ListProductsData extends Component {
	render() {
		return (
            <div>
                {
					data.PRODUCTS.map((product, i) => {
						return (
							<div key={i}>
								<input type="checkbox"/>
								<span>{product.name}</span>
								<span>{product.price}</span>
								
							</div>
						);
					})
				}
            </div>
        );
    }
} 
