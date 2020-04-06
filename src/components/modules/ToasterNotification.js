import React, {Component} from 'react';
import { toast } from 'react-toastify';


class ToasterNotification extends Component{


  static notify(args){

    if (typeof args == "string")
      toast(args, this.defaultSettings()); 
  }

  static info(args){

    if (typeof args == "string")
      toast(args, Object.assign(this.defaultSettings(), {type : 'info'})); 
  }

  static error(args){

    if (typeof args == "string")
      toast(args, Object.assign(this.defaultSettings(), {type : 'error'})); 
  }

  static warning(args){

    if (typeof args == "string")
      toast(args, Object.assign(this.defaultSettings(), {type : 'warning'})); 
  }

  static success(args){

    if (typeof args == "string")
      toast(args, Object.assign(this.defaultSettings(), {type : 'success'})); 
  }



  static defaultSettings(){

    return {
      closeButton : this.defaultCloseButton(),
      hideProgressBar : true,
      type : 'default'
    }
  }

  static defaultCloseButton(){
    return (
      <i className="icon icon-times-square-filled"></i>
    )
  }
}

export default ToasterNotification;