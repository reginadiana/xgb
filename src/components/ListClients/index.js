import React, { Component } from 'react';
import data from "../../services/json"; 

import './style.css'

export class ListClients extends Component {
	render() {
		return (

			<div className="listClients-class">
				<h2 className="title-2">Our clients! </h2>
	            <>
	                {
						data.CLIENTS.map((client, i) => {
							return (
								<div key={i} style={{ padding: "3%" }}>
									<span style={{ padding: "3%", textAlign: "center", backgroundColor: "violet", borderRadius: "5px", color: "white" }}>{client.name}</span>
								</div>
							);
						})
					}
	            </>
	        </div>
        );
    }
} 
