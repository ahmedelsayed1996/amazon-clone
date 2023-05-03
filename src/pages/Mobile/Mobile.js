import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { db } from "../../firebase";
import "./moblie.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Mobile = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    alert(`the rating is ${newRating}`);
  };
  //language
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t } = useTranslation();


  const [Mobile, setMobile] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);

  // const [fillter, setFillter] = useState("");
  // const [sort, setSort] = useState(false);

  const productsRef = collection(db, "products");
  const fetchPost = async () => {
    const q = query(productsRef, where("category", "==", "mobile"));
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setMobile(products);
  };
  const categoryRef = collection(db, "category");
  const fetchcat = async () => {
    const q = query(categoryRef, where("name", "==", "mobile"));
    const querySnapshot = await getDocs(q);
    const category = [];
    querySnapshot.forEach((doc) => {
      category.push(doc.data());
    });
    console.log(category);
    setCategory(category);
  }
  const handelFilter = async (event) => {
    const q = query(productsRef, where("category", "==", "mobile"), where("price", "<=", parseInt(event.target.value)));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setMobile(products);
  }


  useEffect(() => {
    fetchPost();
    fetchcat();
  }, []);

  // const handelChange = async (e) => {
  //   setSort(true)
  //   await getDocs(collection(db, "Mobile"))
  //     .then((querySnapshot) => {
  //       const newData = querySnapshot.docs
  //         .map((doc) => ({ ...doc.data(), id: doc.id }));
  //       setMobile(newData);
  //       setFillter(e.target.value);
  //       console.log(e.target.value);
  //     })
  // };

  // const handelReset = () => { };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map((cat, index) => {
          return (
            <div key={index} className="w-100">
              <h1>{currentLanguageCode === 'en' ? `${cat.name}` : `${cat.namear}`}</h1>
              <div >
                <img
                  className="card-img-top"
                  src={cat.image}
                  alt="Card image cap"
                />
              </div>

            </div>
          );
        })}
        <div className="d-block w-100  mt-2">
          <select className="bg-success btn" name="isAvailable" onChange={handelFilter}>
            <option className="bg-light "  >Filter by Price</option>
            <option className="bg-light " value="50">less than 50</option>
            <option className="bg-light " value="100">up to 50</option>
            <option className="bg-light " value="9999999">up to 100</option>
          </select>
        </div>


        {Mobile.map((prd, index) => {
          return (
            <div className="col-md-4 my-3" key={index}>

                <div className="card-body">

                  <h5 className="card-title">{currentLanguageCode === 'en' ? `${prd.name}` : `${prd.namear}`}</h5>
                  <p className="card-text"><strong> {t("description")}</strong> {currentLanguageCode === 'en' ? `${prd.description}` : `${prd.descriptionar}`}</p>
                  <h3>{t("price")} {prd.price}</h3>
                  
              <Link to={`/details/${prd.name}`}>
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
                    <h5 className="card-title">
                      {currentLanguageCode === "en"
                        ? `${prd.name}`
                        : `${prd.namear}`}
                    </h5>
                    <p className="card-text">
                      <strong> {t("description")}</strong>{" "}
                      {currentLanguageCode === "en"
                        ? `${prd.description}`
                        : `${prd.descriptionar}`}
                    </p>
                    <h3>
                      {t("price")} {prd.price}
                    </h3>

                    {/* <h3>Rate : {prd.rating.rate}</h3> */}
                    <p>
                      <ReactStars
                        index={index}
                        count={5}
                        onChange={ratingChanged}
                        value={prd.rate}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-md-4 my-3">
              <div className="card ">
                <img
                  className="card-img-top h-50"
                  src={Mobile.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{Mobile.name}</h5>
                  <p className="card-text"><strong>Description :</strong> {Mobile.description}</p>
                  <h3>Price : {Mobile.price}</h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(changeCards([...cards, Mobile]));
                      dispatch(changeCounter(counter + 1));
                    }}
                  >
                    Add To Cards
                  </button>
                </div>
              </div>
            </div>
      </div> */}
    </div>
  );
};

export default Mobile;
