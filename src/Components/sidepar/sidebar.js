import React,{useEffect} from "react";
import "./sidebar.css";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';


const languages = [

  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]


const Sidebar = () => {

  //language
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])



  return (
    // <div id="navcolo" className="navbar p-1  d-none  d-md-block d-lg-blok  ">
    //   <div className="d-flex">
    //     <a className="mt-3">
    //       <img id="imglogo" src="./Images/amazon-logo.png" alt="" />
    //     </a>
    //     <div className="d-flex ">
    //       <div>
    //         <i className="fa-solid fa-location-dot hoba mt-4 mx-2"></i>
    //       </div>

    //       <div className="d-flex flex-column hovee">
    //         <span className="fw-light nv1">Deleiver to</span>
    //         <span className="fs-6 fw-bold ">location</span>
    //       </div>

    //       <form className="container-fluid">
    //         <div className="input-group p-1 mx-2 ">
    //           <span className="btn-group">
    //             <button
    //               type="button"
    //               className="btn buto1  dropdown-toggle"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //               id="bo"
    //             >
    //               All
    //             </button>
    //             <select className="dropdown-menu" size="10">
    //               <option className="ss">
    //                 <a className="dropdown-item ">All Categories</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Amazon Devices</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Amazon Fashino</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Amazon Baby</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Amazon Warehouse</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">
    //                   Automotive Parts & Accessories
    //                 </a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Grocery & Gourmet Food</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Industrial & Scientific</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Musical Instruments</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Home Related</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Grocery & Gourmet Food</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Beauty & Personal Care</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Arts, Crafts & Sewing</a>
    //               </option>
    //               <option>
    //                 <a className="dropdown-item">Sports</a>
    //               </option>
    //             </select>
    //           </span>
    //           <input
    //             id="Search-input"
    //             type="text"
    //             className="form-control "
    //             size="100"
    //             placeholder="Search Amazon.eg"
    //             aria-label="Search Amazon.eg"
    //             aria-describedby="basic-addon1"
    //           />
    //           <span>
    //             <button className="d-flex btn btn-warning bouto2 mx--5">
    //               <a id="ancorsearch" href="#Search-input">
    //                 <i
    //                   style={{ color: "black;" }}
    //                   className="fa-solid fa-magnifying-glass"
    //                 ></i>
    //               </a>
    //             </button>
    //           </span>
    //           <div className="dropdown mx-4 mt-3  ">
    //             <span>
    //               <img src="./Images/Eg.png" className="img-ico" />
    //             </span>
    //             <span className="dropdown-toggle fw-bold ">EN</span>
    //             <span className="caret"></span>
    //             <ul className="dropdown-menu ">
    //               <li className="px-2 ">
    //                 <input
    //                   type="radio"
    //                   id="html"
    //                   name="fav_language"
    //                   value="HTML"
    //                 />
    //                 <label for="html">العربية-AR</label>
    //                 <br />
    //               </li>
    //               <hr />
    //               <li className="px-2 ">
    //                 <input
    //                   type="radio"
    //                   id="html"
    //                   name="fav_language"
    //                   value="HTML"
    //                 />
    //                 <label for="html">English-EN</label>
    //                 <br />
    //               </li>
    //               <hr />
    //               <li className="px-2 ">
    //                 <span>
    //                   <img src="./Images/Eg.png" className="img-ico" />
    //                   <span>
    //                     <p style="font-size:  11px;">
    //                       you are shopping on Amazon.eg
    //                     </p>
    //                   </span>
    //                 </span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </form>
    //       <div className=" d-flex flex-column hovee ">
    //         <div className="fw-light nv1">Hello, to</div>
    //         <div className=" fw-bold  " style={{ fontSize: "12px;" }}>
    //           Account & Lists
    //         </div>
    //       </div>

    //       <div className="mx-4 mt-4 ">
    //         <a className="fw-bold text-decoration-none">Orders</a>
    //       </div>

    //       <div className=" mt-3 ">
    //         <i
    //           style={{ fontSize: " 25px;" }}
    //           className="fa-solid fa-cart-shopping"
    //         ></i>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="navcolo" className=" p-1 d-md-none d-lg-none ">
    //     <div className="d-flex justify-content-between">
    //       <div>
    //         <a className="hovee m">
    //           <img
    //             id=""
    //             src="./Images/LOGO2.png"
    //             className="img-fluid "
    //             alt=""
    //           />
    //         </a>
    //       </div>

    //       {/* <div  className="d-flex flex-column hovee" style="margin-left: -13vw;" >
    //               <span  className="fw-light nv1">Deleiver to</span>
    //               <span  className="fs-6 fw-bold ">location</span>
    //               </div> */}
    //       <div className="d-flex  ">
    //         <div className=" mt-3 ">
    //           <i
    //             style={{ fontSize: "25px;" }}
    //             className="fa-solid fa-cart-shopping"
    //           ></i>
    //         </div>
    //         <div className="mx-2 mt-3 ">
    //           <a className="">
    //             <a
    //               className="text-decoration-none fw-bold"
    //               data-bs-toggle="offcanvas"
    //               data-bs-target="#offcanvasScrolling"
    //               aria-controls="offcanvasScrolling"
    //             >
    //               <i className="fa-solid fa-bars px-1  "></i>All
    //             </a>
    //             <div
    //               className="offcanvas offcanvas-start"
    //               data-bs-scroll="true"
    //               data-bs-backdrop="false"
    //               tabindex="-1"
    //               id="offcanvasScrolling"
    //               aria-labelledby="offcanvasScrollingLabel"
    //             >
    //               <div
    //                 className="offcanvas-header"
    //                 style={{ backgroundColor: "#304053;" }}
    //               >
    //                 <h5
    //                   className="offcanvas-title"
    //                   id="offcanvasScrollingLabel"
    //                 >
    //                   Amazon
    //                 </h5>
    //                 <button
    //                   type="button"
    //                   className="btn-close"
    //                   data-bs-dismiss="offcanvas"
    //                   aria-label="Close"
    //                 ></button>
    //               </div>
    //               <div className="offcanvas-body">
    //                 <ul className="d-flex flex-column">
    //                   <li className="">
    //                     <a className="text-decoration-none text-dark">Home</a>
    //                   </li>

    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Amazon.eg
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Perfumes
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">Help</a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Toys & Games
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Mobile Phones
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Fashion
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Grocery
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Appliances
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Mobile Phones
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <form className="container-fluid ">
    //       <div className="input-group p-1 mx-2 ">
    //         <input
    //           id="Search-input"
    //           type="text"
    //           className="form-control "
    //           size="100"
    //           placeholder="Search Amazon.eg"
    //           aria-label="Search Amazon.eg"
    //           aria-describedby="basic-addon1"
    //         />
    //         <span>
    //           <button className="d-flex btn btn-warning bouto2 mx--5">
    //             <a id="ancorsearch" href="#Search-input">
    //               <i
    //                 style={{ color: "black;" }}
    //                 className="fa-solid fa-magnifying-glass"
    //               ></i>
    //             </a>
    //           </button>
    //         </span>
    //       </div>
    //     </form>
    //   </div>
    //   <div className="navigator  d-none  d-md-none  d-lg-block d-xl-block d-xxl-block  ">
    //     <div>
    //       <ul className="d-flex align-items-center justify-content-evenly ">
    //         <li className="mx-">
    //           <a
    //             className="text-decoration-none"
    //             data-bs-toggle="offcanvas"
    //             data-bs-target="#staticBackdrop"
    //             aria-controls="staticBackdrop"
    //           >
    //             <i className="fa-solid fa-bars px-1  "></i>All
    //           </a>

    //           <div
    //             className="offcanvas offcanvas-start"
    //             data-bs-backdrop="static"
    //             tabindex="-1"
    //             id="staticBackdrop"
    //             aria-labelledby="staticBackdropLabel"
    //           >
    //             <div
    //               className="offcanvas-header"
    //               style={{ backgroundColor: "#232F3E;" }}
    //             >
    //               <h5
    //                 className="offcanvas-title"
    //                 id="staticBackdropLabel"
    //                 style={{ color: "aliceblue;" }}
    //               >
    //                 Amazon
    //               </h5>
    //               <button
    //                 type="button"
    //                 className="btn-close"
    //                 data-bs-dismiss="offcanvas"
    //                 aria-label="Close"
    //               ></button>
    //             </div>
    //             <div className="offcanvas-body">
    //               <div>
    //                 <ul className="d-flex flex-column">
    //                   <li className="">
    //                     <a className="text-decoration-none text-dark">Home</a>
    //                   </li>

    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Amazon.eg
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Perfumes
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">Help</a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Toys & Games
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Mobile Phones
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Fashion
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Grocery
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Appliances
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Mobile Phones
    //                     </a>
    //                   </li>
    //                 </ul>
    //                 .
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Ramadan Deals</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none"></a>
    //           <div className="dropdown  ">
    //             <span className="dropdown-toggle fw-bold ">Prime</span>
    //             <ul className="dropdown-menu ">
    //               <li className="px-2 ">
    //                 <img src="./Images/pimepic.png" alt="" />
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Home</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Amazon.eg</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Perfumes</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Help</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Toys & Games</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Mobile Phones</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Fashion</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Grocery</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Appliances</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Mobile Phones</a>
    //         </li>
    //         <li className="">
    //           <img
    //             id=""
    //             className="img-fluid"
    //             src="./Images/nav-img.jpg"
    //             alt=""
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navigator   d-md-none d-lg-none  ">
    //     <div>
    //       <ul className="d-flex align-items-center justify-content-evenly ">
    //         <li className="mx-">
    //           <a
    //             className="text-decoration-none"
    //             data-bs-toggle="offcanvas"
    //             data-bs-target="#offcanvasScrolling"
    //             aria-controls="offcanvasScrolling"
    //           >
    //             <i className="fa-solid fa-bars px-1  "></i>All
    //           </a>
    //           <div
    //             className="offcanvas offcanvas-start"
    //             data-bs-scroll="true"
    //             data-bs-backdrop="false"
    //             tabindex="-1"
    //             id="offcanvasScrolling"
    //             aria-labelledby="offcanvasScrollingLabel"
    //           >
    //             <div
    //               className="offcanvas-header"
    //               style={{ backgroundColor: "#304053;" }}
    //             >
    //               <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
    //                 Amazon
    //               </h5>
    //               <button
    //                 type="button"
    //                 className="btn-close"
    //                 data-bs-dismiss="offcanvas"
    //                 aria-label="Close"
    //               ></button>
    //             </div>
    //             <div className="offcanvas-body">
    //               <ul className="d-flex flex-column">
    //                 <li className="">
    //                   <a className="text-decoration-none text-dark">Home</a>
    //                 </li>

    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">
    //                     Amazon.eg
    //                   </a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">Perfumes</a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">Help</a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">
    //                     Toys & Games
    //                   </a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">
    //                     Mobile Phones
    //                   </a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">Fashion</a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">Grocery</a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">
    //                     Appliances
    //                   </a>
    //                 </li>
    //                 <li className="mx-">
    //                   <a className="text-decoration-none text-dark">
    //                     Mobile Phones
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Ramadan Deals</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none"></a>
    //           <div className="dropdown  ">
    //             <span className="dropdown-toggle fw-bold ">Prime</span>
    //             <ul className="dropdown-menu ">
    //               <li className="px-2 ">
    //                 <img src="./Images/pimepic.png" alt="" />
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Home</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Amazon.eg</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Help</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navigator  d-none  d-md-block d-lg-none  ">
    //     <div>
    //       <ul className="d-flex align-items-center justify-content-evenly ">
    //         <li className="mx-">
    //           <a
    //             className="text-decoration-none"
    //             data-bs-toggle="offcanvas"
    //             data-bs-target="#staticBackdrop"
    //             aria-controls="staticBackdrop"
    //           >
    //             <i className="fa-solid fa-bars px-1  "></i>All
    //           </a>

    //           <div
    //             className="offcanvas offcanvas-start"
    //             data-bs-backdrop="static"
    //             tabindex="-1"
    //             id="staticBackdrop"
    //             aria-labelledby="staticBackdropLabel"
    //           >
    //             <div
    //               className="offcanvas-header"
    //               style={{ backgroundColor: "#232F3E;" }}
    //             >
    //               <h5
    //                 className="offcanvas-title"
    //                 id="staticBackdropLabel"
    //                 style={{ color: "aliceblue;" }}
    //               >
    //                 Amazon
    //               </h5>
    //               <button
    //                 type="button"
    //                 className="btn-close"
    //                 data-bs-dismiss="offcanvas"
    //                 aria-label="Close"
    //               ></button>
    //             </div>
    //             <div className="offcanvas-body">
    //               <div>
    //                 <ul className="d-flex flex-column">
    //                   <li className="">
    //                     <a className="text-decoration-none text-dark">Home</a>
    //                   </li>

    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Amazon.eg
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Perfumes
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">Help</a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Toys & Games
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Mobile Phones
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Fashion
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Grocery
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Appliances
    //                     </a>
    //                   </li>
    //                   <li className="mx-">
    //                     <a className="text-decoration-none text-dark">
    //                       Mobile Phones
    //                     </a>
    //                   </li>
    //                 </ul>
    //                 .
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Ramadan Deals</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none"></a>
    //           <div className="dropdown  ">
    //             <span className="dropdown-toggle fw-bold ">Prime</span>
    //             <ul className="dropdown-menu ">
    //               <li className="px-2 ">
    //                 <img src="./Images/pimepic.png" alt="" />
    //               </li>
    //             </ul>
    //           </div>
    //         </li>

    //         <li className="mx-">
    //           <a className="text-decoration-none">Home</a>
    //         </li>

    //         <li className="mx-">
    //           <a className="text-decoration-none">Amazon.eg</a>
    //         </li>

    //         <li className="mx-">
    //           <a className="text-decoration-none">Help</a>
    //         </li>

    //         <li className="mx-">
    //           <a className="text-decoration-none">Fashion</a>
    //         </li>

    //         <li className="mx-">
    //           <a className="text-decoration-none">Appliances</a>
    //         </li>
    //         <li className="mx-">
    //           <a className="text-decoration-none">Mobile Phones</a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="d-flex align-items-center ">
    //       <a>
    //         <i className="fa-solid fa-bars mx-1 "></i>All
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <>
      <div id="navcolo" className="navbar p-1  d-none  d-md-block d-lg-blok  ">
        <div className="d-flex">
          <a className="mt-3">
            <img id="imglogo" src="./Images/amazon-logo.png" alt="" />
          </a>
          <div className="d-flex ">
            <div>
              <i className="fa-solid fa-location-dot hoba mt-4 mx-2"></i>
            </div>

            <div className="d-flex flex-column hovee">
              <span className="fw-light nv1">{t("app_location")}</span>
              <span className="fs-6 fw-bold ">{t("location")}</span>
            </div>
            <form className="container-fluid">
              <div className="input-group p-1 mx-2 ">
                <span className="btn-group">
                  <button
                    type="button"
                    className="btn buto1  dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="bo"
                  >
                   {t("all_pages")}
                  </button>
                  <select className="dropdown-menu" size="10">
                    <option className="ss">
                      <a className="dropdown-item ">{t("all_cat")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_dev")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_fash")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_baby")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_ware")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">
                      {t("auto_acces")}
                      </a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("agrocery_food")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("indu_scientific")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_music")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("home_relat")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("agrocery_food")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_care")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_art")}</a>
                    </option>
                    <option>
                      <a className="dropdown-item">{t("amazon_sport")}</a>
                    </option>
                  </select>
                </span>
                <input
                  id="Search-input"
                  type="text"
                  className="form-control "
                  size="100"
                  placeholder="Search Amazon.eg"
                  aria-label="Search Amazon.eg"
                  aria-describedby="basic-addon1"
                />
                <span>
                  <button className="d-flex btn btn-warning bouto2 mx--5">
                    <a id="ancorsearch" href="#Search-input">
                      <i
                        style="color: black;"
                        className="fa-solid fa-magnifying-glass"
                      ></i>
                    </a>
                  </button>
                </span>

                <div className="dropdown mx-4 mt-3  ">
                  <span>
                    <img src="./Images/Eg.png" className="img-ico" />
                  </span>
                  <span className="dropdown-toggle fw-bold ">{t("lang_en")}</span>
                  <span className="caret"></span>
                  <ul className="dropdown-menu ">
                    <li className="px-2 ">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html">{t("lang_ar")}</label>
                      <br />
                    </li>
                    <hr />
                    <li className="px-2 ">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html">{t("lang_eng")}</label>
                      <br />
                    </li>
                    <hr />
                    <li className="px-2 ">
                      <span>
                        <img src="./Images/Eg.png" className="img-ico" />
                        <span>
                          <p style="font-size:  11px;">
                          {t("amazom_shop")}
                          </p>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
            <div className=" d-flex flex-column hovee ">
              <div className="fw-light nv1">{t("welcom_mess")}</div>
              <div className=" fw-bold  " style="font-size: 12px;">
              {t("acount")}
              </div>
            </div>

            <div className="mx-4 mt-4 ">
              <a className="fw-bold text-decoration-none">{t("order")}</a>
            </div>

            <div className=" mt-3 ">
              <i
                style="font-size: 25px;"
                className="fa-solid fa-cart-shopping"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div id="navcolo" className=" p-1 d-md-none d-lg-none ">
        <div className="d-flex justify-content-between">
          <div>
            <a className="hovee m">
              <img
                id=""
                src="./Images/LOGO2.png"
                className="img-fluid "
                alt=""
              />
            </a>
          </div>
          <div className="d-flex  ">
            <div className=" mt-3 ">
              <i
                style="font-size: 25px;"
                className="fa-solid fa-cart-shopping"
              ></i>
            </div>
            <div className="mx-2 mt-3 ">
              <a className="">
                <a
                  className="text-decoration-none fw-bold"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  <i className="fa-solid fa-bars px-1  "></i>{t("all_pages")}
                </a>
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabindex="-1"
                  id="offcanvasScrolling"
                  aria-labelledby="offcanvasScrollingLabel"
                >
                  <div
                    className="offcanvas-header"
                    style="background-color: #304053;"
                  >
                    <h5
                      className="offcanvas-title"
                      id="offcanvasScrollingLabel"
                    >
                      {t("amazon_name")}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="d-flex flex-column">
                      <li className="">
                        <a className="text-decoration-none text-dark">{t("home_page")}</a>
                      </li>

                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                          Amazon.eg
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazom_perf")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">{t("help_page")}</a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                          {t("amazon_toy")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                          {t("amazon_phon")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("fashion_Page")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                          {t("grocery_Page")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                         {t("amazon_app")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_phon")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <form className="container-fluid ">
          <div className="input-group p-1 mx-2 ">
            <input
              id="Search-input"
              type="text"
              className="form-control "
              size="100"
              placeholder="Search Amazon.eg"
              aria-label="Search Amazon.eg"
              aria-describedby="basic-addon1"
            />
            <span>
              <button className="d-flex btn btn-warning bouto2 mx--5">
                <a id="ancorsearch" href="#Search-input">
                  <i
                    style="color: black;"
                    className="fa-solid fa-magnifying-glass"
                  ></i>
                </a>
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="navigator  d-none  d-md-none  d-lg-block d-xl-block d-xxl-block  ">
        <div>
          <ul className="d-flex align-items-center justify-content-evenly ">
            <li className="mx-">
              <a
                className="text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                <i className="fa-solid fa-bars px-1  "></i>{t("all_pages")}
              </a>

              <div
                className="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
              >
                <div
                  className="offcanvas-header"
                  style="background-color: #232F3E;"
                >
                  <h5
                    className="offcanvas-title"
                    id="staticBackdropLabel"
                    style="color: aliceblue;"
                  >
                    {t("amazon_name")}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    <ul className="d-flex flex-column">
                      <li className="">
                        <a className="text-decoration-none text-dark">{t("home_page")}</a>
                      </li>

                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                          Amazon.eg
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazom_perf")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">{t("help_page")}</a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_toy")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_phon")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("fashion_Page")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("grocery_Page")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_app")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_phon")}
                        </a>
                      </li>
                    </ul>
                    .
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("ramadan_offer")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none"></a>
              <div className="dropdown  ">
                <span className="dropdown-toggle fw-bold ">{t("prim")}</span>
                <ul className="dropdown-menu ">
                  <li className="px-2 ">
                    <img src="./Images/pimepic.png" alt="" />
                  </li>
                </ul>
              </div>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("home_page")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">Amazon.eg</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("amazom_perf")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("help_page")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none"> {t("amazon_toy")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("amazon_phon")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none"> {t("fashion_Page")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("grocery_Page")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("amazon_app")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("amazon_phon")}</a>
            </li>
            <li className="">
              <img
                id=""
                className="img-fluid"
                src="./Images/nav-img.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="navigator   d-md-none d-lg-none  ">
        <div>
          <ul className="d-flex align-items-center justify-content-evenly ">
            <li className="mx-">
              <a
                className="text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                <i className="fa-solid fa-bars px-1  "></i>{t("all_pages")}
              </a>
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabindex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div
                  className="offcanvas-header"
                  style="background-color: #304053;"
                >
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  {t("amazon_name")}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="d-flex flex-column">
                    <li className="">
                      <a className="text-decoration-none text-dark">{t("home_page")}</a>
                    </li>

                    <li className="mx-">
                      <a className="text-decoration-none text-dark">
                        Amazon.eg
                      </a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">{t("amazom_perf")}</a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">{t("help_page")}</a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">
                      {t("amazon_toy")}
                      </a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">
                      {t("amazon_phon")}
                      </a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark"> {t("fashion_Page")}</a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">{t("grocery_Page")}</a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">
                      {t("amazon_app")}
                      </a>
                    </li>
                    <li className="mx-">
                      <a className="text-decoration-none text-dark">
                      {t("amazon_phon")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("ramadan_offer")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none"></a>
              <div className="dropdown  ">
                <span className="dropdown-toggle fw-bold ">{t("prim")}</span>
                <ul className="dropdown-menu ">
                  <li className="px-2 ">
                    <img src="./Images/pimepic.png" alt="" />
                  </li>
                </ul>
              </div>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("home_page")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">Amazon.eg</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("help_page")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigator  d-none  d-md-block d-lg-none  ">
        <div>
          <ul className="d-flex align-items-center justify-content-evenly ">
            <li className="mx-">
              <a
                className="text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                <i className="fa-solid fa-bars px-1  "></i>{t("all_pages")}
              </a>

              <div
                className="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
              >
                <div
                  className="offcanvas-header"
                  style="background-color: #232F3E;"
                >
                  <h5
                    className="offcanvas-title"
                    id="staticBackdropLabel"
                    style="color: aliceblue;"
                  >
                    {t("amazon_name")}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    <ul className="d-flex flex-column">
                      <li className="">
                        <a className="text-decoration-none text-dark">{t("home_page")}</a>
                      </li>

                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                          Amazon.eg
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazom_perf")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">{t("help_page")}</a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_toy")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_phon")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("fashion_Page")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("grocery_Page")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_app")}
                        </a>
                      </li>
                      <li className="mx-">
                        <a className="text-decoration-none text-dark">
                        {t("amazon_phon")}
                        </a>
                      </li>
                    </ul>
                    .
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("ramadan_offer")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none"></a>
              <div className="dropdown  ">
                <span className="dropdown-toggle fw-bold ">{t("prim")}</span>
                <ul className="dropdown-menu ">
                  <li className="px-2 ">
                    <img src="./Images/pimepic.png" alt="" />
                  </li>
                </ul>
              </div>
            </li>

            <li className="mx-">
              <a className="text-decoration-none">{t("home_page")}</a>
            </li>

            <li className="mx-">
              <a className="text-decoration-none">Amazon.eg</a>
            </li>

            <li className="mx-">
              <a className="text-decoration-none">{t("help_page")}</a>
            </li>

            <li className="mx-">
              <a className="text-decoration-none"> {t("fashion_Page")}</a>
            </li>

            <li className="mx-">
              <a className="text-decoration-none">{t("amazon_app")}</a>
            </li>
            <li className="mx-">
              <a className="text-decoration-none">{t("amazon_phon")}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
