import React from 'react'
import ContainerSource from './ContainerSource'

class Container extends React.Component{

    constructor(){
        super()
        this.state = {
          firstName: '',
          lastName: '',
          age: '',
          gender: '',
          Ischecked: false,
          dieteryRestriction :  []
        }
        this.ChangeHandler = this.ChangeHandler.bind(this)
      }
      ChangeHandler(event){
    
        const {name, value, type, checked} = event.target
    
        type === 'checkbox' ?
        this.setState({
          [name]: checked
        })
    
        :
        this.setState ({
          [name]: value,
          Ischecked: !value
        })
    
      }
    
      render(){
          return(
            <ContainerSource
            changeHandler = {this.ChangeHandler}
            data = {this.state}            
            />
          )
        
      }
    
      
}
export default Container