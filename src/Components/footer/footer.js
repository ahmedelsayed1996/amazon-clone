import React,{useEffect} from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';

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



const Footer = () => {


    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
  
    useEffect(() => {
      console.log('Setting page stuff')
      document.body.dir = currentLanguage.dir || 'ltr'
      document.title = t('app_title')
    }, [currentLanguage, t])


    return (
        <div className="container-fluid p-0">
            <div className="bg-ligh p-0">
                <a href="#top" className="Topc">
                    <h5 className="text-center m-0 py-3 text-light" id="goUp">{t("backTo_top")}</h5>
                </a>
            </div>

            <div className="bg-darker pt-2">
                <div className="container">
                    <div className="row py-3 mt-3">
                        <div className="col-md-2 col-sm-6">
                            <a href="#"><img className="footerlogo w-75" src="images/amazon_PNG11.png" alt=""/></a>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <h6><b>{t("newto_amazon")}</b></h6>
                            <p><small>{t("subscribe")}</small></p>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Enter Email Address" aria-label="Search"/>
                                    <button type="button" className="btn btn-outline-light mr-2">{t("male")}</button>
                                    <button type="button" className="btn btn-outline-light">{t("female")}</button>
                            </form>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <h6><b>{t("downloadamazonfree_app")}</b></h6>
                            <p><small>{t("get_access")}</small></p>

                            <button type="button" className="btn btn-outline-light mr-2"><i className="fab fa-app-store"></i> {t("app_store")}</button>
                            <button type="button" className="btn btn-outline-light"><i className="fab fa-google-play"> </i> {t("google_play")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-darke text-white pt-2">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-3 col-sm-6">
                            <h6><b>{t("let_help")}</b></h6>
                            <ul className="p-0">
                                <a href="#">
                                    <li className="f-li"></li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("help_center")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("cotact_us")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("howbuy_amazon")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("pay_amazon")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("delivery")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("return_policy")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"></li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("corprate_services")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("report_product")}</li>
                                </a>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6><b>{t("about_amazon")}</b></h6>
                            <ul className="p-0">
                                <li className="f-li"> </li>
                                <a href="#">
                                    <li className="f-li">{t("pay_amazon")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("delivery")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("return_policy")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("help_center")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("cotac_uts")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("howbuy_amazon")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("corprate_services")}</li>
                                </a>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6><b>{t("make_money")}</b></h6>
                            <ul className="p-0">
                                <a href="#">
                                    <li className="f-li">{t("sell_amazon")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("become_logistics")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">{t("become_sales")}</li>
                                </a>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6><b>{t("international_amazon")}</b></h6>
                            <ul className="p-0">
                                <li className="f-li"> </li>
                                <a href="#"></a>
                                <li className="f-li"> {t("country_alg")}</li>
                                <a href="#">
                                    <li className="f-li"> {t("country_gha")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> {t("country_ken")}</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> {t("country_mor")}</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h6><b>{t("join_us")}</b></h6>
                            <p>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-facebook"></i></a>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-twitter"></i></a>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-youtube"></i></a>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-instagram"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
