import React from 'react'
import overview from "../../assets/Overview.png"
import customer from "../../assets/Customers.png"

const Customer = () => {
  return (
    <div>
      <img src={overview} alt="" className='images_img1' style={{
        marginTop: "200px",
        marginLeft: "-1150px"
      }} />
      <img src={customer} alt="" className='images_img2' style={{
        marginLeft: "-70px"
      }} />
    </div>
  )
}

export default Customer
