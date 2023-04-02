import React, { useEffect, useState } from "react";
import axioss from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase';




const Videos = () => {
  const [Videos, setVideos] = useState([]);
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();



  
//   const fetchPost = async () => {
//     await getDocs(collection(db, "Videos"))
//         .then((querySnapshot)=>{              
//             const newData = querySnapshot.docs
//                 .map((doc) => ({...doc.data(), id:doc.id }));
//                 setVideos(newData);                
//             console.log(Videos, newData);
//         }) 
// }
const productsRef = collection(db, "products");
  const fetchPost = async ()=>{
    const q = query(productsRef, where("idcat", "==", "videos"));
    const querySnapshot = await getDocs(q);
     const products = []; 
     querySnapshot.forEach((doc) => { products.push(doc.data()); });
     setVideos(products);
  }


useEffect(()=>{
  fetchPost();

}, [])




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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Videos.map((prd,index) => {
          return (
            <div className="col-md-4 my-3" key={index}>
              <div className="card">
                <img
                  className="card-img-top "
                  src={prd.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  
                  <h5 className="card-title">{prd.name}</h5>
                  <p className="card-text"><strong>Description :</strong>  {prd.description}</p>
                  <h3>Price : {prd.price}</h3>
                  {/* <h3>Rate : {prd.rating.rate}</h3> */}
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(changeCards([...cards, prd]));
                      dispatch(changeCounter(counter + 1));
                    }}
                  >
                    Add To Cards
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

export default Videos;
