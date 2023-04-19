import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import './Placeorder.css';
import {Link,useParams} from 'react-router-dom';
import { CartContext } from './CartContext';

function Placeorder() {
    const{item,size,increment}=useContext(CartContext);

      {/*Since we want data of items added to the cart and size of cart,we
     need to import it.Also item and size variable names should be same as names in CartContext.*/}
    const[ProductDetails,setProductDetails]=useState([])
    let {id}=useParams()

    useEffect(()=>{
        let list = [
            {
                id: 123456543,
                name: "New Apple iPhone 10",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 54342265,
                name: "New Apple iPhone 11",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
                about: [
                    "Desription for iphone 11 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 123453456543,
                name: "Iphone12",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 12344545456543,
                name: "Iphone13",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "637357",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
                about: [
                    "Desription for iphone 13 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 123465656543,
                name: "Iphone12",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 pro pmax -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 2356346363,
                name: "Iphone13",
                rating: "637357",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "Desription for iphone 13 -bla mini bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
        ];
        let item=list.filter(item=>{
            if(item.id==id) return item;
        })
        console.log(item);
        setProductDetails(item[0]);
    },[]);
  const addtocart=()=>{
        increment(ProductDetails)
    } 
  return (
    <div>
      <div className='placeorder'>
        <Grid container>
            <Grid item xs={5} className="firstbox">
                <img className='phoneImage' src={ProductDetails.image}/>
            </Grid>
            <Grid item xs={3} className="secondbox">
                <div>{ProductDetails.name}</div>
                <div className="secondbox1">
                    <Rating name='read-only' value="3" readOnly style={{'fontSize':'20px'}}/>
                    {ProductDetails.rating} ratings<br/>
                    {ProductDetails.review}+ answered questions
                </div>
                <hr></hr>
                <div>
                    <div className='textgap'>Price: Rs.{ProductDetails.price}</div>
                    <div className='textgap'>FREE DELIVERY: {ProductDetails.delivery}</div>
                    <div className='textgap'>EMI starts at Rs.{ProductDetails.emi} .No cost Emi available</div>
                </div>
                <div>
                    <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                    <div>
                        <ul>
                            {
                            ProductDetails.about!=undefined?
                            ProductDetails.about.map((item)=>{
                                return (
                                    <li>{item}</li>
                                )
                            }):<span></span>
                            }
                        </ul>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3} className='buttons'>
                <button className='placeorder-button' onClick={addtocart}>Add To Cart</button>
                <Link to="/checkout"><button className='placeorder-button'>Buy Now</button></Link>
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Placeorder
