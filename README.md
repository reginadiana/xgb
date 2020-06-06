## What is the App? 

The goal is develop a frontend application able to do a CRUD for to client, products, budget and to build a interface thinking in UI/UX and responsivity. 

### Desktop Version

![layoutDesktop](https://user-images.githubusercontent.com/46378210/75924013-f508c080-5e44-11ea-9d8d-42d6c82e8cee.png)

### Mobile Version

![layoutMobile](https://user-images.githubusercontent.com/46378210/75924082-15d11600-5e45-11ea-9c06-536fdaf2fe85.png)

## Json/MockData

```
{
 	"PRODUCTS": [ 
	    {
	      "id": 1,
	      "price": 199.99,
	      "name": "Nexus 7"
	    } 
	],

	"CLIENTS" : [
	    {
	      "id": 1,
	      "cpf": "50721843915",
	      "name": "Diana Regina",
	      "token": false
	    }
	],

	"BUDGET" : [
	    {
	      "id": 1, 
	      "client": "Diana Regina", 
	      "productsClient": [], 
	      "value": [],
	      "date": " " 
	    }
	]
}
```

## To run App

Clone this project:

```
git clone "https://github.com/Diana-ops/selectiveProcesses-lisf-of-projects/tree/master/xgb"
```

Install dependeces and run with:

```
$ yarn install
$ cd src
$ yarn start
```

Is possible to see the response of local request acessing http://localhost:3000/signup

## Pages

- [SingUp](http://localhost:3000/signup): In this page the user can register a new client, acesses your accont and to see a list with other clients already registers

- [ListProducts](http://localhost:3000/list-products): In this page the user can create new products, edit some product existent, see the list of products and to delete and to buy it.

- [Profile](http://localhost:3000/profile): In this page the user can to see each budget, delete your account and edit your name and CPF. 

## Resources

- React
- React Router

## CRUD 

### Clients

:heavy_check_mark: I got it **create** new clients in SingUp page (register)

:heavy_check_mark: I got it **read** the informations about the client as name and CPF in SingUp and Profile page

:heavy_check_mark: I got it **update** the informations about client as name and CPF in Profile page

:heavy_check_mark: I partially succeeded **delete** the client of JSON, _but_ when the user return to SingUp page, your profile is still active 

### Products

:heavy_check_mark: I got it **create** new products in List Products page 

:heavy_check_mark: I got it **read** the informations about the products as name and price in List Products page 

:heavy_check_mark: I got it **update** the informations about the products as name and price in List Products page 

:heavy_check_mark: I partially succeeded **delete** the product of JSON, but when the user go to some page and return to List Products page, the product he deleted return to list again.

### Budget

:heavy_check_mark: I got it **create** a new budget with informations in List Products page

:heavy_check_mark: I got it **read** the budget of client and Profile page

:memo: I can't **update** the budget

:memo: I can't **delete** the budget

If you can and wanted give me some **feedback** about my project or README.md, send me a **Pull Requests**. Advices are many welcome and constructive for me :smile:

Give me a **Star** if this project help or inspired you somehow :star:
