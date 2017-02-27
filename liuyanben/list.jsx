import React from "react";
import ReactDOM from "react-dom";

import Item from "./item.jsx";


export default class List extends React.Component{
	
	render(){
		var dataArr=this.props.dataArr;
		var newArr=dataArr.map((item,index)=>{
			return <Item key={index} {...item}  />
		})
		console.log(newArr)
		return (
				<div className="list-area">
					<h3>内容发布：</h3>
					<ul>
						{
							newArr
						}
					</ul>
				</div>
			)
	}
	
}





