import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/GlobalProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './OrderDetalis.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { collection, getDocs, orderBy, query, where } from "@firebase/firestore";
import { db } from '../../firebase';

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
const OrderDetalis = () => {
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    const navigate = useNavigate();
    const { user } = useAuth();
    const getBasketTotal = (cards) =>
        cards.reduce((amount, item) => {
            return amount + item.price;
        }, 0);
    const dispatch = useDispatch();
    const [orderDetails, setorderDetails] = useState([]);

    const cards = useSelector((state) => state.card);
    const counter = useSelector((state) => state.count);

    const productsRef = collection(db, "order");
    const fetchPost = async () => {
        const q = query(productsRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        const products = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data().products);
            products.push(doc.data());
        });
        setorderDetails(products);
    }

    useEffect(() => {
        fetchPost();
        console.log(orderDetails);
    }, [])



    return (
        <section
            className="h-100 gradient-custom"
            style={{ backgroundColor: "#eee" }}
        >
            <h1>{"  "}.
            
            </h1>
            { orderDetails.map((order, index) => {
                return (
                    <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol lg="10" xl="8">
                                <MDBCard style={{ borderRadius: "10px" }}>
                                    <MDBCardHeader className="px-4 py-5">
                                        <MDBTypography tag="h5" className="text-muted mb-0">
                                            Thanks for your Order,{" "}
                                            <span style={{ color: "#a8729a" }}> {t("welcome_message")} {user ? `${user.email}` : "Guest"}</span> !
                                        </MDBTypography>
                                    </MDBCardHeader>
                                    <MDBCardBody className="p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <p
                                                className="lead fw-normal mb-0"
                                                style={{ color: "#a8729a" }}
                                            >
                                                Receipt
                                            </p>
                                            <p className="small text-muted mb-0">
                                                Receipt Voucher : {order.userId.slice(0,6)}
                                            </p>
                                        </div>
                                        <div>{order.products.map((prod) => {
                                            return (
                                                <MDBCard className="shadow-0 border mb-4">
                                                    <MDBCardBody>
                                                        <MDBRow>
                                                            <MDBCol md="2">
                                                                <MDBCardImage
                                                                    src={prod.image}
                                                                    fluid
                                                                    alt="Phone"
                                                                />
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0">{prod.name}</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small btn btn-primary">{order.status}</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small">
                                                                    {prod.category}
                                                                </p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small">Qty: 1</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small">${prod.price}</p>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <hr
                                                            className="mb-4"
                                                            style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                        />
                                                        <MDBRow className="align-items-center">
                                                            <MDBCol md="2">
                                                                <p className="text-muted mb-0 small">Track Order</p>
                                                            </MDBCol>
                                                            <MDBCol md="10">
                                                                <MDBProgress
                                                                    style={{ height: "6px", borderRadius: "16px" }}
                                                                >
                                                                    <MDBProgressBar
                                                                        style={{
                                                                            borderRadius: "16px",
                                                                            backgroundColor: "#a8729a",
                                                                        }}
                                                                        width={65}
                                                                        valuemin={0}
                                                                        valuemax={100}
                                                                    />
                                                                </MDBProgress>
                                                                <div className="d-flex justify-content-around mb-1">
                                                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                        Out for delivary
                                                                    </p>
                                                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                        Delivered
                                                                    </p>
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            )
                                        })}
                                        </div>
                                        <div className="d-flex justify-content-between pt-2">
                                            <p className="fw-bold mb-0">Order Details</p>
                                            <p className="text-muted mb-0">
                                                <span className="fw-bold me-4">Total</span> ${order.totalprice}
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between pt-2">
                                            <p className="text-muted mb-0">Invoice Number : 788152</p>
                                            <p className="text-muted mb-0">
                                                <span className="fw-bold me-4">Discount</span> $19.99
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">
                                                Invoice Date : 22 Dec,2019
                                            </p>
                                            <p className="text-muted mb-0">
                                                <span className="fw-bold me-4">GST 18%</span> $19.99
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-5">
                                            <p className="text-muted mb-0">
                                                Recepits Voucher : {order.userId.slice(0,6)}
                                            </p>
                                            <p className="text-muted mb-0">
                                                <span className="fw-bold me-4">Delivery Charges</span>{" "}
                                                Free
                                            </p>
                                        </div>
                                    </MDBCardBody>
                                    <MDBCardFooter
                                        className="border-0 px-4 py-5"
                                        style={{
                                            backgroundColor: "#a8729a",
                                            borderBottomLeftRadius: "10px",
                                            borderBottomRightRadius: "10px",
                                        }}
                                    >
                                        <MDBTypography
                                            tag="h5"
                                            className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                                        >
                                            Total paid: <span className="h2 mb-0 ms-2">${order.totalprice}</span>
                                        </MDBTypography>
                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    // <div>

                    //     {order.products.map((prod) => {
                    //         return (
                    //             <h1>{prod.name}</h1>
                    //         );

                    //     })}
                    // </div>
                )
            })}
        </section>
    );
}

export default OrderDetalis;
