import React from "react";
import Layout from "./../components/Layout/Layout";
import "./../styleHome.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-form">
      <h1 className="text-center form_title fw-bold">Book a Home Visit Now!</h1>
        <form action="homevisit" method="post" id="homeCollection">
          <div className="col-25"><label for="fname">Name:</label></div> 
           <input className="form-label1" type="text" id="name" name="name" required="" /><br />

           <div className="col-25"><label for="fname">Email:</label> </div>
           <input className="form-label1" type="email" id="email" name="email" required="" /><br />

           <div className="col-25" ><label for="fname">D.O.B: </label></div>
           <input className="form-label1" type="date" placeholder="" id="date" name="dob" required="" /><br />

           <div className="" ><label for="fname">Pincode:</label></div>
           <input className="form-label1" type="pincode" id="pin" name="pin" required="" />
           
          <div className="col-25" ><label for="fname">Mobile Number: </label></div>
        <div className="mb-3">
          <input type="tel" className="form-control1 form-label1 mb-3" id="mob" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="10" name="mob" title="only 10 digits" required="" />
          <button type="button" className="btn-outline-secondary " onclick="phoneAuthHC();">Send OTP</button>
        </div>
        {/* send otp btn */}
        <div className="input-group mb-3 d-none" id="verifyHC">
         <input type="text" className="form-control" id="verificationCodeHC" name="vcode"placeholder="Enter OTP" maxlength="6" required="" />
         <button type="button" className="btn-outline-secondary " onclick="codeverifyHC();">Verify code</button>
        </div>
         <input disabled="" className="btn-secondary"
         type="submit" id="submitbtn" value="Submit" />
    </form>
  </div>
 
  {/* <div className="carousel-inner">
    <div className="carousel-item"> 
      <img className="d-block w-100 H-100" src="./../images/img1.jpg"  alt="1 slide"/>
    </div>
    <div className="carousel-item active"> 
      <img className="d-block w-100 H-100" src="./../images/img2.jpg" alt="2 slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./../images/img3.jpg" alt="3 slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./../images/img4.jpg"alt="4 slide"/>
    </div>
    <button className="carousel-control-prev" type="button"></button>
    <button className="carousel-control-next" type="button"></button>
  </div> */}
    </Layout>
  );
 }

export default Home;
