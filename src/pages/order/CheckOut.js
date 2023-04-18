
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

const CheckOut = () => {
    let checker = true;
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

        })
        console.log("success");
    }

    const handelForm = (event) => {
        event.preventDefault();
        checker = true;
        console.log("success");
    }

    // useEffect(() => {
    //     checker = true;
    // }, [checker]);
    return (
        <div className='container-fluid my-3'>
            <button type='submit' className='btn btn-success' onClick={handelOrder}>test</button>
            <div className='row'>
                <div className="accordion col-lg-8 col-md-6" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1- Add Address
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body w-50 mx-3">

                                <form className='form-group' autoComplete="off" onSubmit={handelForm} >
                                    <label>User Name</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>Mobile</label>
                                    <input type="number" className='form-control' required />
                                    <br></br>
                                    <label>Street Name</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>Build name/no</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>City/Area</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>District</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>Governorate</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <label>Nearest landmark</label>
                                    <input type="text" className='form-control' required />
                                    <br></br>
                                    <div className='btn-box'>
                                        <button type="submit" className='btn btn-warning btn-md'>Add Address</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2- payment Method
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body w-50">
                                {checker ? (
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
                                            onApprove={(data, action) => {
                                                return action.order.capture().then((details) => {
                                                    handelOrder();
                                                    toast.success('Transaction is completed', {
                                                        position: toast.POSITION.TOP_CENTER
                                                    });
                                                })
                                            }} />
                                    </PayPalScriptProvider>
                                ) : (
                                    <h2>you must enter Address Form</h2>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3- Items and shipping
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="subtotal">
                        <strong>Order Summary</strong>
                        <p>
                            {" "}
                            Items: $ {getBasketTotal(cards)}
                        </p>
                        <p>Shipping & handling: {"--"}</p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <hr />
                        <h2 className='danger'>Order Total : {getBasketTotal(cards)}</h2>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default CheckOut;
