import React, { useEffect, useState } from "react";
import changeCards, { changeCounter } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase";
import "./electronics.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Electronics = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    alert(`the rating is ${newRating}`);
  };

  //language
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  const [Electronics, setElectronics] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const [categories, setCategory] = useState([]);

  const dispatch = useDispatch();

  // const fetchPost = async () => {
  //   await getDocs(collection(db, "Electronics"))
  //     .then((querySnapshot) => {
  //       const newData = querySnapshot.docs
  //         .map((doc) => ({ ...doc.data(), id: doc.id }));
  //       setElectronics(newData);
  //       console.log(Electronics, newData);
  //     })
  // }
  const productsRef = collection(db, "products");
  const fetchPost = async () => {
    const q = query(productsRef, where("category", "==", "mobile"));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setElectronics(products);
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
  };

  useEffect(() => {
    fetchPost();
    fetchcat();
  }, []);

  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 d-flex align-items-stretch position-relative">
        {categories.map((cat, index) => {
          return (
            <div key={index}>
              <h1>
                {currentLanguageCode === "en" ? `${cat.name}` : `${cat.namear}`}
              </h1>
              <img
                className="card-img-top "
                src={cat.image}
                alt="Card image cap"
              />
            </div>
          );
        })}
        {Electronics.map((prd, index) => {
          return (
            <div class="col-md-4 my-3" key={index}>
              <Link to={`/details/${prd.name}`}>
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
                        value={index + 1}
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
    </div>
  );
};

export default Electronics;
