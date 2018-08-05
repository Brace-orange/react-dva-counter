import React from "react";
import {connect} from "dva";
import "./styles/less.less";

class App extends React.Component{
  constructor({v}){
    super();
  }
  render(){
    return <div>
              <h1>{this.props.v}</h1>
              <button onClick={()=>{this.props.dispatch({"type":"counter/add"})}}>+</button>
              <button onClick={()=>{this.props.dispatch({"type":"counter/minus"})}}>-</button>
              <button onClick={()=>{this.props.dispatch({"type":"counter/add_async"})}}>加文件</button>
         </div>
  }
}

export default connect(
  ({counter:{v}})=>({
    v
  })
)(App);
