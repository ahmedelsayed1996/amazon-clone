import { collection, getDocs, where, query } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { db } from '../../firebase';
import changeCards, { changeCounter } from '../../store/action';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const Search = () => {
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const { t } = useTranslation();

    const [searchdata, setsearchdata] = useState([]);
    const cards = useSelector((state) => state.card);
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let querysearch = useQuery();
    let search = querysearch.get('name');
    console.log(search);
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
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            products.push(doc.data());
        });
        setsearchdata(products);
        const resData = products.filter((element) => {
            // console.log(typeof(element.name));
            return element.name.toLowerCase().includes(search.toLowerCase());
        })
        console.log(resData);
        setsearchdata(resData);
    }
    useEffect(() => {
        fetchPost();
    }, [search])
    return (
        <div className="container">

            <div class="row row-cols-1 row-cols-md-3 g-4">

                {searchdata.map((prd, index) => {
                    <div className="col-md-4 my-3" key={index}>
                        <h1>{prd.name}</h1>
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

                                <h5 className="card-title">{currentLanguageCode === 'en' ? `${prd.name}` : `${prd.namear}`}</h5>
                                <p className="card-text"><strong> {t("description")}</strong> {currentLanguageCode === 'en' ? `${prd.description}` : `${prd.descriptionar}`}</p>
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
                })}
            </div>
        </div>
    );
}

export default Search;
