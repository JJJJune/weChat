import React,{Component} from 'react'
import "./style.css"
import Menu from '../wechat-menu'

export default class App extends Component {
  
   render() {
       return (
           <div className="wechat-app"> 
                <Menu />
           </div>
       );
   }
}