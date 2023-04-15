import React,{useEffect} from "react";
import "./bootstrap.css";
import "./style.css";




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


const Home = () => {
  
//language
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  
  return (
    <>
      <section className="container-fluid p-0 ">
        <div
          id="carouselExampleInterval"
          className="carousel slide  "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src="Images/home-img1.jpg"
                className="d-block img-slide  "
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="Images/h-img2.jpg"
                className="d-block img-slide"
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="Images/h-img3.jpg"
                className="d-block img-slide "
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img
                src="Images/h-img4.jpg"
                className="d-block img-slide "
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid cardss ">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    {t("prime_free")}
                  </h2>
                </div>
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/car-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">
                      {t("prime_exclusive")}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        {t("extra_disc")}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card1-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold">
                        {t("free_shipping")}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card1-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                       {t("aword_tv")}
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none">
                    {t("try_prime")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    {t("ramdan_box")}
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a  href="#" className="card-a text-decoration-none">
                   {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    {t("ramdan_sale")}
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">{t("men_under")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card3-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_under")}</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">{t("men_pyj")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card3-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_pyj")}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                   {t("discover_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                  {t("prime_free")}
                  </h2>
                </div>
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406827_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">
                      {t("prime_exclusive")}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406840_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                      {t("extra_disc")}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406832_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold">
                      {t("free_shipping")}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406833_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                      {t("aword_tv")}
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none">
                  {t("try_prime")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/RMD23/XCM_Manual_1550658_5423940_379x304_1X._SY304_CB595350662_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                  {t("ramdan_sale")}
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408384_186x116_1X._SY116_CB594872581_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">{t("men_under")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408924_186x116_1X._SY116_CB594884775_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_under")}</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408375_186x116_1X._SY116_CB594872581_.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">{t("men_pyj")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408388_186x116_1X._SY116_CB594872581_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_pyj")}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539814_5409481_379x304_1X._SY304_CB595223404_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("discover_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539809_5403570_379x304_1X._SY304_CB595037513_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539809_5389816_379x304_1X._SY304_CB613184199_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539814_5414882_379x304_1X._SY304_CB595309813_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                  {t("ramdan_sale")}
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408380_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">{t("men_under")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408361_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_under")}</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408385_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">{t("men_pyj")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408372_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_pyj")}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                  {t("prime_free")}
                  </h2>
                </div>
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/car-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">
                      {t("prime_exclusive")}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                      {t("extra_disc")}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card1-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold">
                      {t("free_shipping")}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card1-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                      {t("aword_tv")}
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none">
                  {t("try_prime")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                  {t("ramdan_sale")}
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">{t("men_under")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card3-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_under")}</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">{t("men_pyj")}</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card3-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">{t("women_pyj")}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                  {t("see_more")}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                  {t("ramdan_box")}
                  </h2>
                </div>

                <div className="">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                  {t("discover_more")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
