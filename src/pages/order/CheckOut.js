
import React, { useEffect, useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
// import Accordion from 'react-bootstrap/Accordion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './checkout.css'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { useAuth } from '../../context/GlobalProvider';
import { doc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';


const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        country_code: 'sa',
    },
]


const CheckOut = () => {


    //language
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])



    let checker = false;
    const navigate = useNavigate();
    const { user } = useAuth();
    const getBasketTotal = (cards) =>
        cards.reduce((amount, item) => {
            return amount + item.price;
        }, 0);
    const cards = useSelector((state) => state.card);
    // const [value, setValue] = useState(null)

    const handelOrder = () => {
        const userRef = doc(db, 'order', user.uid);
        setDoc(userRef, {
            userId: user.uid,
            email: user.email,
            totalprice: getBasketTotal(cards),
            products: [...cards],
            status:"pending"
        })
        console.log("success");
    }

    const handelForm = (event) => {
        event.preventDefault();
        checker = true;
        handleToggle();
        console.log("success");
        // test();
    }
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
        console.log("hello world");
        checker = true;

    };
    const handelTogal = () => {
        toast.success('Transaction is completed', {
            position: toast.POSITION.TOP_CENTER
        });
        alert("Transaction is completed")
    }

    //   useEffect(() => {
    //     if (visible) {
    //     alert('hello world 3');
    //     }
    //   }, [visible]);

    return (
        <div className='container-fluid my-3'>
            {/* <button type='submit' className='btn btn-success' onClick={handelOrder}>test</button> */}
            {/* <button type='submit' className='btn btn-success' onClick={handelTogal}>
                </button> */}
                 {/* {user ?  : navigate("/login")} */}
                 <div className='row'>
                <div className="accordion col-lg-8 col-md-6" id="accordionExample">
                    <div className="accordion-item">

                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {t("addaddress")}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body w-50 mx-3">

                                <form className='form-group' autoComplete="off" onSubmit={handelForm} >
                                    <label>{t("username")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>{t("mobile_page")}</label>
                                    <input type="number" className='form-control' required />
                                    <br></br>
                                    <label>{t("street")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>{t("buildname")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>{t("cityarea")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>{t("district")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>{t("governorate")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>{t("nearest")}</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <div className='btn-box'>
                                        <button type="submit" className='btn btn-warning btn-md'>{t("addaddress2")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            {/* {...(checker===true ? { hidden: false }:test())} */}
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                {t("paymentmethod")}
                            </button>

                        </h2>

                        {visible &&
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body w-50">
                                    {/* {checker ? (            {...(checker ? {bsStyle: 'success'} : {})}   */}

                                    <PayPalScriptProvider options={{ "client-id": "Ad2_pXcY1MLRKJPse7snylSl0592iEOcuRPyI1VSakX2RkqkYHop9867O7wNqOKwW2F3lu2n90vye1Ho" }}>
                                        <PayPalButtons createOrder={(data, action) => {
                                            return action.order.create({
                                                purchase_units: [{
                                                    amount: {
                                                        value: (getBasketTotal(cards))
                                                    },
                                                },
                                                ],
                                            },
                                            );
                                        }}
                                            onApprove={async (data, action) => {
                                                const details = await action.order.capture();
                                                alert("Transaction is completed");
                                                handelOrder();
                                                
                                            }} />
                                    </PayPalScriptProvider>

                                    {/* ) : (
                                    <h2> {t("compliteform")}</h2>
                                )} */}
                                </div>
                            </div>}

                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                {t("itemshipping")}
                            </button>
                        </h2>
                        {visible &&
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>{t("accordionbody")}</strong>{t("hiddenitem")} <code>{t("accordionbody2")}</code>{t("transitionitem")}
                                </div>
                            </div>}
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="subtotal">
                        <strong>{t("ordersummary")}</strong>
                        <p>
                            {" "}
                            {t("items")}: $ {getBasketTotal(cards)}
                        </p>
                        <p>{t("shippinghandling")} {"--"}</p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> {t("giftorder")}
                        </small>
                        <hr />
                        <h2 className='danger'>{t("ordertotal")} {getBasketTotal(cards)}</h2>
                    </div>
                </div>



            </div>
            

        </div>
    );
}

export default CheckOut;
