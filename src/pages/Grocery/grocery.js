import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";


import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase";


import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';





const Grocery = () => {

  
   const currentLanguageCode = cookies.get('i18next') || 'en'
   const { t } = useTranslation();
 

   
  const [grocery, setgrocery] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const [categories, setCategory] = useState([]);

  const dispatch = useDispatch();

  //   const fetchPost = async () => {
  //     await getDocs(collection(db, "grocery"))
  //         .then((querySnapshot)=>{
  //             const newData = querySnapshot.docs
  //                 .map((doc) => ({...doc.data(), id:doc.id }));
  //                 setgrocery(newData);
  //             console.log(grocery, newData);
  //         })
  // }

  const productsRef = collection(db, "products");
  const fetchPost = async () => {
    const q = query(productsRef, where("category", "==", "grocery"));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setgrocery(products);
  };
  const categoryRef = collection(db, "category");
  const fetchcat = async () => {
    const q = query(categoryRef, where("name", "==", "grocery"));
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

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map((cat, index) => {
          return (
            <div key={index} className="d-flex">
              {/* <h1 className="d-block">{currentLanguageCode==='en' ? `${cat.name}` : `${cat.namear}`}</h1> */}

              
            <img
              className="card-img-top w-50"
              src={cat.image[1]}
              alt="Card image cap"
            />
            <img
              className="card-img-top w-50"
              src={cat.image[index]}
              alt="Card image cap"
            />

            </div>
          );
        })}
        {grocery.map((prd, index) => {
          return (
            <div className="col-md-4 my-3" key={index}>
              <div className="card">
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

                <div className="card-body">

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
                  <h1>helllo world</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grocery;
