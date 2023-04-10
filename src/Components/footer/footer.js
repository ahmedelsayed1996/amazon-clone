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

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

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
