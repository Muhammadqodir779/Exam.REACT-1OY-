import React, { useState } from 'react'
import "./App.css"
import Sidebar from './components/sidebar/Sidebar';
import group_10 from "./assets/Group_10.png"
import group_11 from "./assets/Group_11.png"
import group_12 from "./assets/Group_12.png"
import { Route, Routes } from 'react-router-dom';
import overview from "./assets/Overview (1).png"
import customer from "./assets/Customers.png"
import product from "./assets/Product.png"


const App = () => {

  return (
    <div className='app' style={{
      display: "flex"
    }}>
      <Sidebar />

      <main>

        <div className="main_text" style={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          justifyContent: "space-between"
        }}>

          <h2 className='main_text_heading'>Hello Evano 👋🏼,</h2>

          <input type="text" className='main_text_inp' placeholder='🍳Search...' style={{
            borderRadius: "8px",
            border: "1px solid gray",
            padding: "5px",
            marginLeft: "700px"
          }} />

        </div>

        <div className="main_analiz" style={{
          display: "flex",
          justifyContent: "space-around",
          width: "968px",
          paddingTop: "5px",
          marginTop: "24px",
          marginLeft: "20px",
          height: "151px",
          borderRadius: "30px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 5px #000"
        }}>

          <div className="main_analiz_card" style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}>

            <img src={group_10} alt="" />

            <p>Earning</p>

            <b>$198k</b>

            <p>37.8% this month</p>

          </div>

          <div className="main_analiz_card" style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}>

            <img src={group_11} alt="" />

            <p>Balance</p>

            <b>$$2.4k</b>

            <p>2% this month</p>

          </div>

          <div className="main_analiz_card" style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}>

            <img src={group_12} alt="" />

            <p>Total Sales</p>

            <b>$89k</b>

            <p>11% this week</p>

          </div>

        </div>

        <div className="images" style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}>

          <img src={overview} alt="" className='images_img1' style={{
            marginLeft: "-400px"
          }} />

          <img src={customer} alt="" className='images_img2' style={{
            marginLeft: "600px",
            marginTop: "-500px"
          }} />

          <img src={product} alt="" className='images_img3' style={{
            marginTop: "-70px",
            marginLeft: "-50px"
          }} />

        </div>

      </main>

    </div>
  )
}

export default App
