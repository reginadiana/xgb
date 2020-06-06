import React from 'react';
import data from '../../services/json.json'

let clients = data.CLIENTS

export class HelloUser extends React.Component {

	render(){
		return(
			<>
			     {
					clients.map((itemJson, i) => {
						if(itemJson.token === true) {

							return(<h1 className="hello-user">Hello, {itemJson.name}</h1>);
											
						}
					})
				}
			</>
   
		);
	}    
}
