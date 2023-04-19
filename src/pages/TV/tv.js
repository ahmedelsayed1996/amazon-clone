import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";

import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from '../../firebase';


import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'



const Tv = () => {

  
    //language
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation();


  const [TV, setTV] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);




  
//   const fetchPost = async () => {
//     await getDocs(collection(db, "TV"))
//         .then((querySnapshot)=>{              
//             const newData = querySnapshot.docs
//                 .map((doc) => ({...doc.data(), id:doc.id }));
//                 setTV(newData);                
//             console.log(TV, newData);
//         }) 
// }
const productsRef = collection(db, "products");
  const fetchPost = async ()=>{
    const q = query(productsRef,where("category", "==", "tv"));
    const querySnapshot = await getDocs(q);
     const products = []; 
     querySnapshot.forEach((doc) => { products.push(doc.data()); });
     setTV(products);
  }
  const categoryRef = collection(db, "category");
  const fetchcat = async () => {
    const q = query(categoryRef, where("name", "==", "tv"));
    const querySnapshot = await getDocs(q);
    const category = [];
    querySnapshot.forEach((doc) => { category.push(doc.data()); });
    console.log(category);
    setCategory(category);
  }


useEffect(()=>{
  fetchPost();
  fetchcat();

}, [])



  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {categories.map((cat, index) => {
          return (
            <div key={index}>
              <h1>{currentLanguageCode==='en' ? `${cat.name}` : `${cat.namear}`}</h1>
            <img
              className="card-img-top "
              src={cat.image}
              alt="Card image cap"
            />
            </div>
          )
        })}
        {TV.map((prd,index) => {
          return (
            <div className="col-md-4 my-3" key={index}>
              <div className="card">
                <img
                  className="card-img-top "
                  src={prd.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                 
                  <h5 className="card-title">{currentLanguageCode==='en' ? `${prd.name}` : `${prd.namear}`}</h5>
                  <p className="card-text"><strong> {t("description")}</strong>  {currentLanguageCode==='en' ? `${prd.description}` : `${prd.descriptionar}`}</p>
                  <h3>{t("price")} {prd.price}</h3>
                  {/* <h3>Rate : {prd.rating.rate}</h3> */}
                  <button style={{ fontSize:"14px",borderWidth:"3px",borderRadius:"10px",borderStyle:"solid",padding:"0 20px 0 20px"}}
                    className="btn btn-warning"
                    onClick={() => {
                      dispatch(changeCards([...cards, prd]));
                      dispatch(changeCounter(counter + 1));
                    }}
                  >
                   {t("addcart")}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tv;
