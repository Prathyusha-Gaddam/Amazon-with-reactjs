import React from 'react'
import './Placeorder.css';

function CheckoutItems() {
  return (
    <div>
      <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src="https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583" />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="textgap">iphone 12</div>
                    <div style={{ fontWeight: "bold"}} className="textgap">50,999</div>
                    <div className="textgap">buy</div>
                    
                </div>
            </div>
    </div>
  )
}

export default CheckoutItems
