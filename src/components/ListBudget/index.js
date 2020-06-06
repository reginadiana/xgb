import React from 'react';
import './style.css'
/*Dados*/
import data from "../../services/json"; 
let budget = data.BUDGET

export const ListBudget = (props) => {

    let { id } = props
    let totalPrice = 0

    return (

			<div className="all-budget">	
					<h2 className="title-8">List of Budgets</h2>

					{ 
						budget[id].productsClient.map((produto, i) => {
							return(
								<div style={{padding: "3%", margin: "3%",backgroundColor: "rgb(240,240,240)"}} className="all-products"> 
									<td >{produto}</td>
								</div>
							); 
						}) 
					}

					{ 
					budget[id].value.map((produto, i) => {
							totalPrice = totalPrice + Number(produto)
						}) 
					}

					<div className="info-date-price">
							<td>Devery Day: {budget[id].date}</td>
							<br/>
							<td>Total payable: $ {totalPrice.toFixed(2)}</td>
					</div>
				
			</div>
    );
}
