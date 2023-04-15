import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";
import { collection, getDocs, orderBy, query, where } from "@firebase/firestore";
import { db } from '../../firebase';



const Mobile = () => {
  const [Mobile, setMobile] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);

  // const [fillter, setFillter] = useState("");
  // const [sort, setSort] = useState(false);

  const productsRef = collection(db, "products");
  const fetchPost = async ()=>{
    const q = query(productsRef, where("category", "==", "mobile"));
    const querySnapshot = await getDocs(q);
     const products = []; 
     querySnapshot.forEach((doc) => { products.push(doc.data()); });
     setMobile(products);
  }
  const categoryRef = collection(db, "category");
  const fetchcat = async () => {
    const q = query(categoryRef, where("name", "==", "mobile"));
    const querySnapshot = await getDocs(q);
    const category = [];
    querySnapshot.forEach((doc) => { category.push(doc.data()); });
    console.log(category);
    setCategory(category);
  }

  useEffect(() => {
    fetchPost();
    fetchcat();
  }, [])

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
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {categories.map((cat, index) => {
          return (
            <div key={index}>
              <h1>{cat.name}</h1>
            <img
              className="card-img-top "
              src={cat.image}
              alt="Card image cap"
            />
            </div>
          )
        })}
        {Mobile.map((prd, index) => {
  return (
    <div className="col-md-4 my-3" key={index}>
      <div className="card">
        <img
          className="card-img-top"
          src={prd.image}
          alt={prd.name}
          style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{prd.name}</h5>
          <p className="card-text mb-2"><strong>Description:</strong> {prd.description}</p>
          <h3 className="mb-4">Price: {prd.price}</h3>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => {
              dispatch(changeCards([...cards, prd]));
              dispatch(changeCounter(counter + 1));
            }}
            style={{
              fontSize: "14px",
              borderWidth: "3px",
              borderRadius: "10px",
              borderStyle: "solid",
              padding: "0 20px",
              textTransform: "uppercase"
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
})}
      </div>
      {/* <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col-md-4 my-3">
              <div class="card ">
                <img
                  className="card-img-top h-50"
                  src={Mobile.image}
                  alt="Card image cap"
                />
                <div class="card-body">
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
