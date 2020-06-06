import React from 'react';

/*Rotas*/
import { Link, withRouter, Redirect } from "react-router-dom";

/*Componentes*/
import { ListBudget } from '../../components/ListBudget/index'
import { HelloUser } from '../../components/HelloUser/index'

/*Dados*/
import data from "../../services/json"; 

import "./style.css"

let client = data.CLIENTS;

class Profile extends React.Component {

	constructor(props){
    	super(props)

    	this.state = {
    		myClient: "",
    		idClient: 0,
    		cpfClient: "",

    		/*Data*/
	        client: data.CLIENTS,

	        backToLogin: false,

	        showEdit: false
    	}
    }


	myShopping(){

		return(<button className="button-back-to-shooping"><Link to="/list-products">Voltar as Compras</Link></button>);
	}

	findClient() {

		client.map((itemClient, i) => {
			if(itemClient.token === true) {
				this.setState({
     				myClient: itemClient.name, idClient: itemClient.id - 1, cpfClient: itemClient.cpf
    			});
			}

		})

    }


 	/*Update - CRUD - Products*/
 	onEditHandleName() {

 		

	 		return(
	 			<div className="form-edit-name">
	 				<form onSubmit={this.onUpdateHandle.bind(this)}>
	 					<h1 className="title-6">Edit my name</h1>

	 					<h3>New Name:</h3>
	 					<input type="text" name="updateItemNameUser" defaultValue={this.state.myClient}/>
	 					
	 					<h3>New CPF:</h3>
	 					<input type="text" name="updateItemCPFUser" defaultValue={this.state.cpfClient}/>
	 					<button className="update-add-item" >It is great for me!</button>
	 				</form>
	 			</div>
	 		);	
 		
 	}

 	onUpdateHandle(event) {
 		event.preventDefault();

 		this.setState({
 			client: this.state.client.map(itemUser => {
 				if (itemUser.id === this.state.idClient) {
 					itemUser['name'] = event.target.updateItemNameUser.value;
 					itemUser['cpf'] = event.target.updateItemCPFUser.value;

 					return itemUser;
 				}
 				return itemUser;
 			}) 
 		})

 		this.setState({
    		showEdit: false
    	})

 	}

 	onEditHandle(event) {

 		this.setState({
 			idClient: arguments[0],
 			myClient: arguments[1], 
 			cpfClient: arguments[2],
 			showEdit: true
 		});

 		
 	}

 	/*Delete - CRUD - Products*/
 	onDeleteHandle() {

 		let name = arguments[0]

 		this.setState({
 			client: this.state.client.filter(itemUser => {
 				if (itemUser.name === name) {
 					
 					this.setState({
 						backToLogin: true
 					})

 				} else {
 					return itemUser;
 				}

 				
 			})
 		})

 		
 	}

 	afterDeleteHandle() {

 		if(this.state.backToLogin === true) {

 			alert(`Your cont was deleted. The section will be return.`)
 			return(
 				<Redirect to="/"></Redirect>);
 		}
 	}



	render(){
		return(
			<>

				{ this.myShopping() }
				<h1 class="title-7">Profile</h1>

				
				<HelloUser />

				{

					this.state.client.map((item, i) => {

						if(item.token === true) {
							return (
								<>

								<tr key={item.id} className="info-profile">
									
									<td>CPF: {item.cpf}</td>
									
									<td><button className="delete-button-profile" onClick={this.onDeleteHandle.bind(this, item.name)}>Delete my profile</button></td>
									<td><button className="edit-button-profile" onClick={this.onEditHandle.bind(this, item.id, item.name, item.cpf)}>Edit my profile</button></td>
									
								</tr>

								
								</>
							);
						}
					})
				}

				
				{ this.onEditHandleName() }

				{ this.afterDeleteHandle() }

				<ListBudget nameUser={this.state.myClient} id={this.state.idClient}/>

			</>
		);
	}
}

export default withRouter(Profile);
