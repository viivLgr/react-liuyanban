import React from "react";
import ReactDOM from "react-dom";


export default class Mes extends React.Component{
	render(){
		
		return (
				<div className="mainblock">
					<form className="form-horizontal">
					<div className="field">
						<label>
							<span>用户名</span>
							<input type="text" ref="text_username" placeholder="用户名" className="input_tx" />
						</label>
					</div>
					<div className="field">
						<label>
							<span>留言内容</span>
							<textarea rows="6" ref="text_content" placeholder="留言内容" className="input_tx"></textarea>
						</label>
					</div>
					<div className="field">
						<input type="button" value="提交" className="btn_tijiao" onClick={this.addItemHand.bind(this)} />
					</div>
					</form>
				</div>
			)
		};
		
	addItemHand(){
		var username=this.refs.text_username.value;
		var content=this.refs.text_content.value;
		this.props.addItem({
			username:username,
			content:content,
			id:Date.now()
		})
		this.refs.text_username.value="";
		this.refs.text_content.value="";
	}
}





