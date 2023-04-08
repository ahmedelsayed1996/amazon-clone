import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { db } from '../../firebase';
import changeCards, { changeCounter } from '../../store/action';

const Search = () => {

    const [searchdata, setsearchdata] = useState([]);
    const cards = useSelector((state) => state.card);
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let querysearch = useQuery();
    let search = querysearch.get('name');
    // console.log(search);
    // useEffect(() => {
    //     searchdata();
    // }, []);
    // const searchdata = () => {
    //     // fireDb.child('')
    // }
    // const fetchPost = async () => {
    //     await getDocs(collection(db, "" + "products"), where("name", "in",search))
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({ ...doc.data(), id: doc.id }));
    //             setsearchdata(newData);
    //         })
    // }
    const productsRef = collection(db, "products");
    const fetchPost = async () => {
        const q = query(productsRef);
        const querySnapshot = await getDocs(q);
        const products = [];
        querySnapshot.forEach((doc) => { products.push(doc.data()); });
        setsearchdata(products);
        const resData = products.filter((ele) => {
           return ele.name.toLowerCase().includes(search.toLowerCase());
        })
        setsearchdata(resData)
    }
    useEffect(() => { 
        fetchPost();
    }, [search])
    return (
        <div className="container">

            {(searchdata == "") ? <h1>We dont have Product {search}</h1> : <div class="row row-cols-1 row-cols-md-3 g-4">

                {searchdata.map((prd, index) => {
                    return (
                        <div class="col-md-4" key={index}>
                            <div class="card">

                                <img
                                    className="card-img-top "
                                    src={prd.image}
                                    alt="Card image cap"
                                />
                                <div class="card-body">
                                    <h5 className="card-title">{prd.name}</h5>
                                    <p className="card-text">{prd.description}</p>
                                    <h3>Price : {prd.price}</h3>

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
            }
        </div>
    );
}

export default Search;
