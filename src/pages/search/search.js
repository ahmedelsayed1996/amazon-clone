import { collection, getDocs, query } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { db } from '../../firebase';
import changeCards, { changeCounter } from '../../store/action';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const Search = () => {
    const currentLanguageCode = Cookies.get('i18next') || 'en';
    const { t } = useTranslation();

    const [searchdata, setSearchData] = useState([]);
    const cards = useSelector((state) => state.card);
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const querySearch = new URLSearchParams(useLocation().search).get('name');
    console.log('Search term:', querySearch);

    const fetchProducts = async () => {
        const productsRef = collection(db, 'products');
        const q = query(productsRef);
        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map((doc) => doc.data());
        console.log('All products:', products);
        const filteredProducts = products.filter((product) =>
            // console.log(typeof(product.name))
            //   product.name.toLowerCase().includes(querySearch.toLowerCase())
            product.name.toLowerCase().includes(querySearch?.toLowerCase() || '')
        );
        console.log('Filtered products:', filteredProducts);
        setSearchData(filteredProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, [querySearch]);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {searchdata.map((product, index) => (
                    <div className="col-md-4 my-3" key={index}>
                        <div className="card">
                            <img
                                style={{
                                    width: '100%',
                                    height: '20rem',
                                    objectFit: 'contain',
                                }}
                                className="card-img-top"
                                src={product.image}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {currentLanguageCode === 'en' ? product.name : product.namear}
                                </h5>
                                <p className="card-text">
                                    <strong>{t('description')}</strong>{' '}
                                    {currentLanguageCode === 'en'
                                        ? `${product.description}`
                                        : `${product.descriptionar}`}
                                </p>
                                <p className="card-text">
                                    <strong>{t('price')}</strong> ${product.price}
                                </p>
                                {/* <Link to={`/product/${product.id}`} onClick={() => dispatch(changeCounter(counter + 1))}> */}
                                    {/* <button className="btn btn-primary">{t('viewProduct')}</button> */}
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
                                            dispatch(changeCards([...cards, product]));
                                            dispatch(changeCounter(counter +1));
                                        }}
                                    >
                                        {t("addcart")}
                                    </button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Search;