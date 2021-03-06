import React from "react";


export default class TestProxy extends React.Component {
	constructor(props){
		super(props);
		this.state = {text:""};
		this.onSearch = this.onSearch.bind(this)
	}
	
	onSearch(){
		const self = this;
		let url = "/sugr@mock"
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.send();

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) { 

				self.setState({text:xhr.responseText})
			}
		}
	}
	onClickHandler(e){
		console.log(e.clientX)
	}
	render(){
		
		return (
			<div>
				<input type="text" />
				<button onClick={ e=>this.onSearch(e) }>百度</button>
				<p>result:{this.state.text}</p>
			</div>
		)
	}
}