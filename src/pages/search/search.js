import { collection, getDocs, where } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { db } from '../../firebase';
import changeCards, { changeCounter } from '../../store/action';
// import fireDb from 'firebase'


const Search = () => {
   
    const [searchdata, setsearchdata] = useState([]);
    const cards = useSelector((state) => state.card);
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let search = query.get('name');
    console.log(search);
    // useEffect(() => {
    //     searchdata();
    // }, []);
    // const searchdata = () => {
    //     // fireDb.child('')
    // }
    const fetchPost = async () => {
        await getDocs(collection(db, "" + "Mobile"), where("Name", "array-contains",search))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setsearchdata(newData);
            })
    }
    // const searchPost = async ()=>{


    //     await getDocs(collection(db, ""+search))
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({ ...doc.data(), id: doc.id }));
    //                 setsearchdata(newData);
    //         })
    // }
    useEffect(() => {
        fetchPost();
    }, [search])
    // useEffect(() => {
    //     searchPost();
    //     // console.log("Update data");
    // }, [])
    return (
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {searchdata.map((prd, index) => {
                    return (
                        <div class="col-md-4" key={index}>
                            <div class="card">
                                {search != prd.Name ? "no Found" : "data Come"}
                                <img
                                    className="card-img-top "
                                    src={prd.Image}
                                    alt="Card image cap"
                                />
                                <div class="card-body">
                                    <h5 className="card-title">{prd.Name}</h5>
                                    <p className="card-text">{prd.Description}</p>
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
        </div>
    );
}

export default Search;
