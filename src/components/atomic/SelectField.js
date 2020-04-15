import React from 'react'

class SelectField extends React.Component{

  constructor(props){
    
    super(props)
    this.state = {
      selected : props.values[0],
      hover_index : null,
      open : false
    }
  } 

  toggle_select_button(){

    let open = this.state.open;
    this.setState({open : !open})
  }

  select_option(index){
    
    this.setState({selected : this.props.values[index], open : false})
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
            value={this.state.selected}>
          </input>
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




