import React from 'react'
import Grid from '@material-ui/core/Grid'
import CheckoutItems from './CheckoutItems';
import './Placeorder.css';

function Checkout() {
  return (
    <div>
      <Grid conatiner>
        <Grid item xs={10}>
            <div style={{'fontSize':'25px','fontWeight':'bold','padding':'20px'}}>Shopping Cart</div>
            <div>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
            </div>
        </Grid>
        <Grid item xs={2}>
            <button className='proccedbtn'>Proceed To Buy</button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout
