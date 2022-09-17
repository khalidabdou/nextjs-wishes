import Link from "next/link";
import { Languages } from "../../greeting";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";



export default function Navbar() {
  let menutList = []
  const router = useRouter();
  const { t, lang } = useTranslation("common");
  menutList = t("common:menu", {}, { returnObjects: true }) || [];
  //if route is not return null


  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  const onClick = (e) => {
    const navbarResponsive = document.getElementById("navbarResponsive");
    if (navbarResponsive.classList.contains("show")) {
      navbarResponsive.classList.remove("show");
    } else {
      navbarResponsive.classList.add("show");
    }

  };



  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <Link href="/">
          <a className="navbar-brand fw-bold">{t("appName")}</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onClick}
        >
          Menu
          <i className="bi-list"></i>
        </button>
        <div className="navbar-collapse collapse " id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">

            {menutList.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link me-lg-3" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))
            }

            <li className="nav-item">
              <select
                id="language_site"
                className="form-select"
                aria-label="Default select example"
                onChange={onSelectChange}
                value={lang}
              >
                {Languages.map((language) => (
                  <option key={language.id} value={language.language_code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


//getstaticprops

