import "../styleHome.css";
import React from "react";
import Layout from       "./../components/Layout/Layout";
import kidney from       "./../images/organs/kidney.png";
import blood from        './../images/organs/blood.png';
import bones from        './../images/organs/bones.png';
import digestive from    './../images/organs/digestive.png';
import heart from        './../images/organs/heart.png';
import hormone from      './../images/organs/hormone.png';
import joints from       './../images/organs/joints.png';
import liver from        './../images/organs/liver.png';
import lungs from        './../images/organs/lungs.png';
import reproductive from './../images/organs/reproductive.png';
import thyroid from      './../images/organs/thyroid.png';
import wholebody from    './../images/organs/wholebody.png';

function Diagnostics() {
    return(
        <>   
         <Layout>     
    <div className="container-organs">
    {/* <h1 className="categoryTitle pt-md-3"> <center>Choose Test Based On Category</center> </h1> */}
        <div className="content ">
            <img src={kidney} alt="" />
            <h1 className="organsName">Kidney</h1>
            <button class="categoryMore">KNOW MORE</button>
        </div>
        <div className="content ">
            <img src={liver} alt="" />
            <h1 className="organsName">Liver</h1>
            <button className="categoryMore ">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={thyroid} alt="" />
                <h1 className="organsName">Thyroid</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={lungs} alt="" />
                <h1 className="organsName">Lungs</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div class="content">
                <img src={bones} alt="" />
                <h1 className="organsName">Bones</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={heart} alt="" />
                <h1 className="organsName">Heart</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={reproductive} alt="" />
                <h1 className="organsName">Reproductive System</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content ">
                <img src={digestive} alt="" />
                <h1 className="organsName">Digestive System</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content ">
                <img src={hormone} alt="" />
                <h1 className="organsName">Hormones</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={joints} alt="" />
                <h1 className="organsName">Joints</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={wholebody} alt="" />
                <h1 className="organsName">Whole Body</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
        <div className="content">
                <img src={blood} alt="" />
                <h1 className="organsName"> Blood</h1>
                <button className="categoryMore">KNOW MORE</button>
        </div>
    </div>
    </Layout>
        </>
    )
};
export default Diagnostics;

<div class="container-fluid organs-category position-relative text-center category-banner mt-3 mb-3">
    <h1 class="categoryTitle pt-md-3">Choose Test Based On Category</h1>

    <div class="row   p-0 p-md-3">
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Kidney">
                <img src="./assets/images/organs/kidney.png" alt="">
                <h1 class="organsName">Kidney</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Liver">
                <img src="./assets/images/organs/liver.png" alt="">
                <h1 class="organsName">Liver</h1>
                <button class="categoryMore ">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2">
            <a href="https://www.medall.in/shop/category?category=Thyroid">
                <img src="./assets/images/organs/thyroid.png" alt="">
                <h1 class="organsName">Thyroid</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Lungs">
                <img src="./assets/images/organs/lungs.png" alt="">
                <h1 class="organsName">Lungs</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Bone">
                <img src="./assets/images/organs/bones.png" alt="">
                <h1 class="organsName">Bones</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Heart">
                <img src="./assets/images/organs/heart.png" alt="">
                <h1 class="organsName">Heart</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
    </div>
    <div class="row   p-0 p-md-3">
        <div class="col-6 mt-4 col-md-2  ">
            <a href="https://www.medall.in/shop/category?category=Reproductive System">
                <img src="./assets/images/organs/reproductive.png" alt="">
                <h1 class="organsName">Reproductive System</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Digestive System">
                <img src="./assets/images/organs/digestive.png" alt="">
                <h1 class="organsName">Digestive System</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
            
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Hormones">
                <img src="./assets/images/organs/hormone.png" alt="">
                <h1 class="organsName">Hormones</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Joints">
                <img src="./assets/images/organs/bones.png" alt="">
                <h1 class="organsName">Joints</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Whole Body">
                <img src="./assets/images/organs/wholebody.png" alt="">
                <h1 class="organsName">Whole Body</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
        <div class="col-6 mt-4 col-md-2 ">
            <a href="https://www.medall.in/shop/category?category=Blood">
                <img src="./assets/images/organs/blood.png" alt="">
                <h1 class="organsName"> Blood</h1>
                <button class="categoryMore">KNOW MORE</button>
            </a>
        </div>
    </div>
</div>