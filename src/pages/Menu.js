import React from "react";
import Layout from "./../components/Layout/Layout";
import './../styleHome.css';
import cbc from './../images/cbc.jpg';
import hbac from './../images/hbac.jpg';
import lipid from './../images/lipid.jpg';
import liver from './../images/liver.jpg';
import thyroid from './../images/thyroid.jpg';

const Menu = () => {
  return (
    <Layout>
      {/* <h1 className="categoryTitle">Our Most Searched Tests</h1> */}
      <div className="TestList">
        <div className=" col-6 col-md-2  mt-sm-3 mb-sm-3  mx-auto  ">
          <div className="popTestCard rounded-2">
            <img className="card-img-top rounded-4 p-1" src={cbc} alt="..."/>
            <div className="card-body p-0 ">
              <h5 className="card-title testTitle1">CBC TEST</h5>
              <p className="testAmount" id="card-text">₹  250/-</p>
              <input type="hidden" className="testAmount" name="p_price" value="250" />
              <div className="details_contain">
                <button type="button" id="1211" onclick="alertAdd(1211,1,250);" className="border-0 testCart_contain">Add to Cart</button>

                {/* <button type="submit" name="add_to_cart" className="btn btn-success">Add</button> */}
                <a className=" border-0 testView_contain " href="product?name=CBC_TEST&amp;cid=1211&amp;id=1"><span>Know More</span></a></div></div></div></div>
        <div className=" col-6 col-md-2  mt-sm-3 mb-sm-3  mx-auto  ">
          <div className="popTestCard rounded-2 ">
            <img class="card-img-top rounded-4 p-1" src={hbac} alt="..." />
            <div className="card-body p-0 ">
              <h5 className="card-title testTitle1 mb-2">HBA1C TEST</h5>
              <p className=" testAmount  " id="card-text">₹  400/-</p>
              <input type="hidden" class="testAmount" name="p_price" value="400" />
              <div className="details_contain">
                <button type="button" id="1343" onclick="alertAdd(1343,2,400);" className=" border-0 testCart_contain">Add to Cart</button>

                {/* <button type="submit" name="add_to_cart" class="btn btn-success">Add</button> */}
                <a className=" border-0 testView_contain " href="product?name=HBA1C_TEST&amp;cid=1343&amp;id=2"><span>Know More</span></a></div></div></div></div><div className
                  =" col-6 col-md-2  mt-sm-3 mb-sm-3  mx-auto  ">
          <div className="popTestCard rounded-2 ">

            <img class="card-img-top rounded-4 p-1" src={liver} alt="..."/>
            <div className="card-body p-0 ">
              <h5 className="card-title testTitle1 mb-2">LIVER FUNCTION TEST</h5>
              <p className=" testAmount  " id="card-text">₹  600/-</p>
              <input type="hidden" className="testAmount" name="p_price" value="600" />
              <div className="details_contain">
                <button type="button" id="1449" onclick="alertAdd(1449,3,600);" className=" border-0 testCart_contain">Add to Cart</button>

                {/* <button type="submit" name="add_to_cart" className="btn btn-success">Add</button> */}
                <a className=" border-0 testView_contain " href="product?name=LIVER_FUNCTION_TEST&amp;cid=1449&amp;id=3"><span>Know More</span></a></div></div></div></div><div className=" col-6 col-md-2  mt-sm-3 mb-sm-3  mx-auto  ">
          <div className="popTestCard rounded-2 ">

            <img loading="lazy" className="card-img-top rounded-4 p-1" src={lipid} alt="..." />
            <div className="card-body p-0 ">
              <h5 className="card-title testTitle1 mb-2">LIPID PROFILE TEST</h5><p class=" testAmount  " id="card-text">₹  450/-</p> <input type="hidden" className="testAmount" name="p_price" value="450" />        <div className="details_contain">
                <button type="button" id="1445" onclick="alertAdd(1445,4,450);" className=" border-0 testCart_contain">Add to Cart</button>

                {/* <button type="submit" name="add_to_cart" className="btn btn-success">Add</button> */}
                <a className="border-0 testView_contain " href="product?name=LIPID_PROFILE_TEST&amp;cid=1445&amp;id=4"><span>Know More</span></a></div></div></div></div><div className=" col-6 col-md-2  mt-sm-3 mb-sm-3  mx-auto  ">
          <div className="popTestCard rounded-2 ">

            <img loading="lazy" className="card-img-top rounded-4 p-1" src={thyroid} alt="..." />
            <div className="card-body p-0 ">
              <h5 class="card-title testTitle1 mb-2">THYROID PROFILE TEST</h5><p class=" testAmount  " id="card-text">₹  500/-</p> <input type="hidden" class="testAmount" name="p_price" value="500" />        <div class="details_contain">
                <button type="button" id="1637" onclick="alertAdd(1637,5,500);" class=" border-0 testCart_contain">Add to
                  Cart</button>

                {/* <button type="submit" name="add_to_cart" className="btn btn-success">Add</button> */}
                <a className=" border-0 testView_contain " href="product?name=THYROID_PROFILE_TEST&amp;cid=1637&amp;id=5"><span>Know More</span></a></div></div></div></div>
      </div>
    </Layout>
  );
};

export default Menu;