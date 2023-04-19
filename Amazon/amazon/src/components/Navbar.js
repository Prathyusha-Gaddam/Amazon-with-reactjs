import React, { Component} from 'react'
import './Navbar.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { CartContext } from './CartContext';

{/* since we need to display size on navbar,we need to import cartContext here,and this is diff from functional componnet */}
class Navbar extends Component {
  static contextType=CartContext;
  constructor(props){
    super(props);
    this.state={}
  }

  
  render() {
    let {item,size,increment}=this.context;
   

    return (
      
      <div>
        <div className='navbar_component'>
            <div className='navbar_logo'></div>
            <div className='navbar_locator'>
                <div className='navbar_locatorImage'></div>
                <div className='navbar_location'>Banglore</div>
                <div className='inputbox'>
                    <div>
                        <select className='dropbox'>
                            <option value="All">All</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="headphones">headphones</option>
                            <option value="earpods">earpods</option>
                            <option value="mouse">mouse</option>
                            <option value="keyboard">keyboard</option>
                        </select>
                    </div>
                    <div><input type="text" className='searchbox'/></div>
                    <div className='searchiconout'>
                    <div className='searchicon'></div>
                    </div>
                </div>
                <div className='navbar-signin'>
                    <div>Hello,signin</div>
                    <div style={{'fontWeight':'bold'}}>Accounts & Lists</div>
                </div>
                <div className='navbar-returns'>
                    <div>Returns</div>
                    <div style={{'fontWeight':'bold'}}>& Orders</div>
                </div>
                <div className='navbar-cart'>
                    <AiOutlineShoppingCart className='carticon'/>
                    <div className='cart-size'>size</div>
                    <div style={{'margin':'15px'}}>Cart</div>
                </div>
            </div>
        </div>
        <div className='navbar-footer'>
          <div className='footer-text'>All</div>
          <div className='footer-text'>Best Sellers</div>
          <div className='footer-text'>Amazon Pay</div>
          <div className='footer-text'>Fashion</div>
          <div className='footer-text'>Electronics</div>
          <div className='footer-text'>Prime</div>
          <div className='footer-text'>New Releases</div>
          <div className='footer-text'>Customer-Service</div>
          <div className='footer-text'>Computers</div>
          <div className='footer-text'>Home&kitchen</div>
        </div>
      </div>
    )
  }
}
export default Navbar;