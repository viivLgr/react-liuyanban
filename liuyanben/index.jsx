import React from "react";
import ReactDOM from "react-dom";

import {store} from './util.js';
import Mes from "./mes.jsx";
import List from "./list.jsx";

require("./css/base.css");
require("./css/index.css")
require('./js/pubsub.js');

var deleteItem="deleteItem";

class Main extends React.Component{
	constructor(props){   // 初始化state
        super(props);
        this.state = {
            dataArr: this.props.dataArr
        };
    }
	componentDidMount(){
		PubSub.subscribe(deleteItem,function(ev,data_id){
			var _this=this;
			this.state.dataArr.forEach((item,index)=>{
				if(item.id==data_id){
					_this.state.dataArr.splice(index,1);
				}
			});
			store("liuyanben",this.state.dataArr);	
			this.setState({dataArr:this.state.dataArr})
		}.bind(this))
	}
	
	addItem(data){
		this.state.dataArr.push(data);
		store("liuyanben",this.state.dataArr);	
		this.setState({dataArr:this.state.dataArr});
	}
	
	render(){
		return (
				<div>
					<Mes addItem={this.addItem.bind(this)}  />
					<List dataArr={this.state.dataArr} />
				</div>
			)
	}
	
}

var section=document.createElement("section");
section.className="secApp";
document.body.appendChild(section);

var dataArr = store("liuyanben") || [];
ReactDOM.render(<Main dataArr={dataArr} />,section);
