import React from 'react'
import "./Product.css"
import row1_img from "../../assets/row1_img.png"
import row2_img from "../../assets/row2_img.png"
import row3_img from "../../assets/row3_img.png"
import row4_img from "../../assets/row4_img.png"
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";




const Product = () => {
  return (
    <div className='pro'>
      <div className="products">

        <div className="line1">

          <h2>
            Product Sell
          </h2>

          <button type='submit' className='btn1'>
            <CiSearch />  Search
          </button>

          <button type='submit'>
            Last 30 days <IoIosArrowDown />
          </button>

        </div>

        <div className="line2">

          <h3>
            Product Name
          </h3>

          <div className="usb">

            <p >
              Stock
            </p>

            <p>
              Price
            </p>

            <p>
              Total Sales
            </p>

          </div>

        </div>

        <div className="line3">

          <div className="row">

            <div className="uz">

              <img src={row1_img} alt="" />

            </div>

            <div className="uz1">

              <h2>
                Abstract 3D
              </h2>

              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>

            </div>

          </div>

          <div className="row2">

            <h3>
              32 in stock
            </h3>

            <p>
              $45.99
            </p>

            <h3>
              20
            </h3>

          </div>

        </div>

        <div className="line3">

          <div className="row">

            <div className="uz">

              <img src={row2_img} alt="" />

            </div>

            <div className="uz1">

              <h2>
                Sarphens Illustration
              </h2>

              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>

            </div>

          </div>

          <div className="row2">

            <h3>
              32 in stock
            </h3>

            <p>
              $45.99
            </p>

            <h3>
              20
            </h3>

          </div>

        </div>

        <div className="line3">

          <div className="row">

            <div className="uz">

              <img src={row3_img} alt="" />

            </div>

            <div className="uz1">

              <h2>
                Landing Page 3D max
              </h2>

              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>

            </div>

          </div>

          <div className="row2">

            <h3>
              32 in stock
            </h3>

            <p>
              $45.99
            </p>

            <h3>
              20
            </h3>

          </div>

        </div>

        <div className="line3">

          <div className="row">

            <div className="uz">

              <img src={row4_img} alt="" />

            </div>

            <div className="uz1">

              <h2>
                Collab Illustration
              </h2>

              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>

            </div>

          </div>

          <div className="row2">

            <h3>
              32 in stock
            </h3>

            <p>
              $45.99
            </p>

            <h3>
              20
            </h3>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Product
