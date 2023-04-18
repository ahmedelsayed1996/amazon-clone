import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";

import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase";


import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie'; 


const Clothing = () => {

     //language
     const currentLanguageCode = cookies.get('i18next') || 'en'
     const { t } = useTranslation();  


  const [Fashion, setFashion] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const [categories, setCategory] = useState([]);
  const dispatch = useDispatch();

  //   const fetchPost = async () => {
  //     await getDocs(collection(db, "Fashion"))
  //         .then((querySnapshot)=>{
  //             const newData = querySnapshot.docs
  //                 .map((doc) => ({...doc.data(), id:doc.id }));
  //                 setFashion(newData);
  //             console.log(Fashion, newData);
  //         })
  // }
  const productsRef = collection(db, "products");
  const fetchPost = async () => {
    const q = query(productsRef, where("category", "==", "fashion"));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setFashion(products);
  };
  const categoryRef = collection(db, "category");
  const fetchcat = async () => {
    const q = query(categoryRef, where("name", "==", "fashion"));
    const querySnapshot = await getDocs(q);
    const category = [];
    querySnapshot.forEach((doc) => {
      category.push(doc.data());
    });
    console.log(category);
    setCategory(category);
  };

  useEffect(() => {
    fetchPost();
    fetchcat();
  }, []);

  // useEffect(() => {
  //   axioss
  //     .get("products")
  //     .then((res) => {
  //       console.log(res.data);
  //       setProduct(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 d-flex align-items-stretch position-relative">
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
          );
        })}
        {Fashion.map((prd, index) => {
          return (
            <div class="col-md-4 my-3" key={index}>
              <div class="card">
                <img
                  style={{
                    width: "100%",
                    height: "20rem",
                    objectFit: "contain",
                  }}
                  className="card-img-top"
                  src={prd.image}
                  alt="Card image cap"
                />

                <div class="card-body">

                  <h5 className="card-title">{currentLanguageCode==='en' ? `${prd.name}` : `${prd.namear}`}</h5>
                  <p className="card-text"><strong> {t("description")}</strong> {currentLanguageCode==='en' ? `${prd.description}` : `${prd.descriptionar}`}</p>
                  <h3>{t("price")} {prd.price}</h3>

                  {/* <h3>Rate : {prd.rating.rate}</h3> */}
                  <button
                    style={{
                      fontSize: "14px",
                      borderWidth: "3px",
                      borderRadius: "10px",
                      borderStyle: "solid",
                      padding: "0 20px 0 20px",
                      marginTop: "1.2rem",
                      marginLeft: "4rem",
                      // position: "absolute",
                      // left: "30%",
                      // bottom: "0",
                      // marginBottom: "1rem",
                    }}
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

export default Clothing;
