import React from 'react';
import ReactDOM from 'react-dom';
//import Car from './App.js'; 
//import Container from '../src/webSite_1/Container';
import App from './App';

ReactDOM.render(<App/>, document.getElementById("root"));
/*const myfirstelement = (
	<table>
		<tr>
			<th>Name</th>
		</tr>
		<tr>
			<th>Kanaiya</th>
		</tr>
		<tr>
			<th>Patel</th>
		</tr>
	</table>
);

ReactDOM.render(myfirstelement, document.getElementById('root'));
*/
//JSX - javascript xml used to make easy to create elements

//const myElement = React.createElement('h1',{},'I donot use jsx');
//ReactDOM.render(myElement, document.getElementById('root'));

//const myElementNew = <h1>I {5+5}use jsx</h1>;
//ReactDOM.render(myElementNew, document.getElementById('root'));

//Components : class and function.. 
/*class Car extends React.Component{
	render(){
		return <h2>Hii, I am a Car</h2>;
	}
}
ReactDOM.render(<Car/>,document.getElementById('root'));
*/
//function components
// function Carfun(){
// 	return <h2>hii, I am calling from function</h2>;
// }
// ReactDOM.render(<Carfun/>,document.getElementById('root'));

//constructor example
/*class Car extends React.Component{
	constructor(){
		super();
		this.state = {color:"red"};
	}
	render(){
		return <h2>{this.state.color}I am a Car !!</h2>
	}
}
ReactDOM.render(<Car />,document.getElementById('root')); */


//using propes

/* class Car extends React.Component{
	render(){
		return <h2>{this.props.color}I am a Car !!</h2>
	}
} */
// ReactDOM.render(<Car color="Red"/>,document.getElementById('root'));

// //PRops  : are used to pass arguments to components in html form like attributes

// class Garbage extends React.Component{
// 	render(){
// 		return (
// 			<div> 
// 				<h1>Who lives in my garbage ?</h1>
// 				{/* <Car color="Red"/> */}
// 			</div>
// 		)
// 	}
// }
// ReactDOM.render(<Garbage/>,document.getElementById('root'));

// //you can also pass object inside property
// class Garbage1 extends React.Component{
	
// 	render(){
// 		//const carinfo = {name:"Ford", model:"Mustange"}
// 		return (
// 			<div> 
// 				<h1>Who lives in my garbage </h1>
// 				<Car/>
				
// 			</div>
// 		)
// 	}
// }
// ReactDOM.render(<Garbage1/>,document.getElementById('root'));

//Geeky Shows Examples
//const exa = (name)=>{return name;}
/*let user = {
	firstname: "Patel"
};
const exa = <h1 className="bg">Hello {user.firstname}</h1>
ReactDOM.render(exa, document.getElementById("root"));*/
//ReactDOM.render(<App name="Kanaiya" roll={1001}/>,document.getElementById("root"));
//ReactDOM.render(<App consumer={false}/>,document.getElementById("root"));
//const arrValues = [10,20,30,40];
// const female= [
// 		{id:201, name:"Priya", Pass:"121ffd"},
//         {id:202, name:"Vaidehi", Pass:"22ssdd"},
//         {id:203, name:"Shital", Pass:"111sdd"}
//     ];
// ReactDOM.render(<App female={female}/>,document.getElementById("root"));
//ReactDOM.render(<Container />,document.getElementById("root"));
// ReactDOM.render(<Marks/>,document.getElementById("stu"));
// ReactDOM.unmountComponentAtNode(document.getElementById("stu")); cmponent is unmounting