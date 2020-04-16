import React from 'react'

class SelectField extends React.Component{

  constructor(props){
    
    super(props)
    this.state = {
      val : props.values[0],
      options : props.values,
      hover_index : null,
      open : false
    }

    this.oKU = this.oKU.bind(this)
    this.toggle_select_button = this.toggle_select_button.bind(this)
    this.select_option = this.select_option.bind(this)
  } 

  toggle_select_button(){

    let open = this.state.open;
    this.setState({open : !open})
  }

  select_option(index){
    
    this.setState({val : this.props.values[index], open : false, hover_index : index})
  }

  oKU(event){
    // console.log(event.key)
    switch (event.key){

      case "ArrowDown":

        let idx = this.state.hover_index === null 
                  ? 0 
                  : (this.state.hover_index + 1) % this.state.options.length

        this.setState({
          open : true,
          hover_index : idx,
          // val : this.state.options[idx]
          
        })

      break

      case "ArrowUp" :
        if(this.state.open)
        {
          let idx = this.state.hover_index === 0 
          ? (this.state.options.length - 1)
          : Math.abs(this.state.hover_index - 1) % this.state.options.length

          this.setState({
            hover_index : idx,
            // val : this.state.options[idx] 
            
          })  
        }
      break

      case "Enter" :
        if(this.state.open && this.state.hover_index != null)
          this.select_option(this.state.hover_index)
        else if(!this.state.open)
          this.setState({open : true})
      break

      case "Escape" :
        console.log("Escape")
        if(this.state.open)
          this.setState({open : false})
      break

      case "Tab" :
        if(!this.state.open)
          this.setState({open : true})

    }
  }

  render(){

    const list_items_render = [];    
    const overflow_y = this.props.maxHeight==undefined ? "default" : "scroll";
    const max_height = this.props.maxHeight==undefined ? "default" : this.props.maxHeight

    let me = this

    this.props.values.forEach((element,index) => {
      list_items_render.push(
        <div key={index} 
            className={ me.state.hover_index == index ? "bg-primary list-group-item pl-2-5" : "list-group-item pl-2-5 "} 
            onMouseOver={()=> me.setState({hover_index: index}) } 
            onClick={()=> me.select_option(index)}
            > 

          {element}
        
        </div>
      )
    });

    return(
      <div className="w-100" style={{maxHeight : "2rem"}}>
        <div className="input-group select-field" onClick={(e) =>{e.stopPropagation(); this.toggle_select_button()}}>
          <input className="form-control" type="text" 
            value={this.state.val}
            onKeyUp={(e) =>{e.preventDefault(); me.oKU(e)}}
            onBlur={()=>me.setState({open : false})}
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <i className="fas fa-angle-down"></i>
            </div>
          </div>

        </div>
        <div className={this.state.open? "list-group select-field-list" : "d-none select-field-list"} 
             style={{overflowY :   overflow_y, maxHeight : max_height}}
        >
          {list_items_render}
        </div>
        <div className={this.state.open ? "select-field-background" : "d-none"} onClick={(e)=>{this.setState({open : false})}}></div>
      
      </div>   
    )

  }


}

export default SelectField




