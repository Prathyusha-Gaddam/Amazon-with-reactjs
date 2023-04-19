import React, { Component, createContext } from 'react'

export const CartContext=createContext()
class CartContextProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            item:[],
            size:0 ,
            increment:(value)=>{
                let itemlist=this.state.item;
                itemlist.push(value)
                this.setState({item:itemlist})
                this.setState({size:this.item.length})
            }     
        }
    }
  render() {
    return (
      <CartContextProvider value={{...this.state,...this.increment}}>
        {this.props.children}
      </CartContextProvider>
    )
  }
}
{/* Components are encapsulated within this contextApi tag in App.js so that data will be transfered within
 this encapsulated components. Here Redux is used inorder to do this. Redux is used transfer data b/w components.
*/}
export default CartContextProvider 