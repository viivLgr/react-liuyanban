import React from "react";
import ReactDOM from "react-dom";

var deleteItem="deleteItem";

export default class Item extends React.Component{
	render(){
		return (
				<li>
					<h5><span>{this.props.username}</span>说：</h5>
					<p>{this.props.content}</p>
					<a href="javascript:;" className="btn_del" onClick={this.deleteItemHandle.bind(this)}>删除</a>
				</li>
			)
			
	}
	deleteItemHandle(){
		PubSub.publish(deleteItem,this.props.id);
	}
}





