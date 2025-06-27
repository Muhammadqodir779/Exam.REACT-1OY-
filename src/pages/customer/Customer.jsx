import React from 'react'
import "./Customer.css"
import Customers_new from "../../assets/Customer_new.jpg"
import { IoIosArrowDown } from "react-icons/io";


const Customer = () => {
  return (
    <div>


      <div className="main3_main4">

        <div className="main3">

          <div className="items">

            <div className="item">
              <h3>
                Overview
              </h3>
              <p>
                Monthly Earning
              </p>
            </div>

            <div className="item1">
              <span>
                Quarterly</span>
              <h4>
                <IoIosArrowDown />
              </h4>
            </div>

          </div>

          <div className="many_boxes">

            <div className="best1"></div>

            <div className="best2"></div>

            <div className="best3"></div>

            <div className="best4"></div>

            <div className="best5"></div>

            <div className="best6"></div>

            <div className="best7"></div>

            <div className="best8"></div>

            <div className="best9"></div>

            <div className="best10"></div>

            <div className="best11"></div>

            <div className="best12"></div>

          </div>

          <div className="many_txt">

            <div className="text1">
              <p>
                Jan
              </p>
            </div>

            <div className="text2">
              <p>
                Feb
              </p>
            </div>

            <div className="text3">
              <p>
                Mar
              </p>
            </div>

            <div className="text4">
              <p>
                Apr
              </p>
            </div>

            <div className="text5">
              <p>
                May
              </p>
            </div>

            <div className="text6">
              <p>
                Jun
              </p>
            </div>

            <div className="text7">
              <p>
                Jul
              </p>
            </div>

            <div className="text8">
              <p>
                Aug
              </p>
            </div>

            <div className="text9">
              <p>
                Sep
              </p>
            </div>

            <div className="text10">
              <p>
                Oct
              </p>
            </div>

            <div className="text11">
              <p>
                Nov
              </p>
            </div>

            <div className="text12">
              <p>
                Dec
              </p>
            </div>

          </div>

        </div>

        <div className="main4">

          <h2>
            Customers
          </h2>

          <h3>
            Customers that buy products
          </h3>

          <img src={Customers_new} alt="img" />

        </div>

      </div>

    </div>
  )
}

export default Customer
