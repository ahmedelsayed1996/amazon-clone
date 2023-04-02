import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from '../../firebase';



const Mobile = () => {
  const [Mobile, setMobile] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [fillter, setFillter] = useState("");
  const [sort, setSort] = useState(false);

  const productsRef = collection(db, "products");
  const fetchPost = async ()=>{
    const q = query(productsRef, where("idcat", "==", "mobile"));
    const querySnapshot = await getDocs(q);
     const products = []; 
     querySnapshot.forEach((doc) => { products.push(doc.data()); });
     setMobile(products);
  }

  useEffect(() => {
    fetchPost();
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
      {/* <div className="dropdown show my-3 btn-lg btn-block">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          Fillter By
        </button>

        <label>Fillter By : </label>
        <select name="colValue" onChange={handelChange} className="mx-2">
          <option>Chosea Select</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="description">Description</option>
        </select>
        <button className="btn btn-success mx-3" onClick={handelReset}>Reset</button><br />
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><a className="dropdown-item " >Action</a></li>
          <li><a className="dropdown-item" >Another action</a></li>
          <li><a className="dropdown-item" >Something else here</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" >Separated link</a></li>
        </ul>
      </div> */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {Mobile.map((prd,index) => {
          return (
            <div class="col-md-4 my-3" key={index}>
              <div class="card ">
                <img
                  className="card-img-top h-50"
                  src={prd.image}
                  alt="Card image cap"
                />
                <div class="card-body ">
                  <h5 className="card-title">{prd.name}</h5>
                  <p className="card-text"><strong>Description :</strong> {prd.description}</p>
                  <h3>Price : {prd.price}</h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(changeCards([...cards, prd]));
                      dispatch(changeCounter(counter + 1));
                    }}
                  >Add To Cards
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
