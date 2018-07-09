import React,{Component} from 'react'
import avatar from '/Users/zheng/Desktop/myproject/wechat/src/imags/me.jpg'
import './style.css'

export default class WechatMenu extends Component {
  
   render() {
       return (
           <div className="wechat-menu"> 
           <div>control bar</div>
           <div>
            <img srcSet={avatar} alt="avatar" className="wechat-menu-avatar"/>
            <div>menu switch</div>
            </div>
            <div>menu more</div>
           </div>
       );
   }
}