import Header from "./comp/Header";
import SEO from "./comp/SEO";
import Section from "./comp/Section";
import useTranslation from "next-translate/useTranslation";
import Reviews from "./comp/reviews";

export default function Home() {
  const { t, lang } = useTranslation("common");

  const imageTitle = t("imageTitle");
  const imageDescription = t("imageDescription");
  const show = t("show");

  const stickerTitle = t("stickerTitle");
  const stickerDescription = t("stickerDescription");

  const wallpaperTitle = t("wallpaperTitle");
  const wallpaperDescription = t("wallpaperDescription");

  const quoteTitle = t("quoteTitle");
  const quoteDescription = t("quoteDescription");

  return (
    <div>
      <SEO />
      <main>
        <Header />
        <Section
          id={"images"}
          title={imageTitle}
          description={imageDescription}
          button={show}
          backgound={"bg-white"}
          image={"/img.jpg"}
          dir={""}
        />
        <Section
          id={"stickers"}
          title={stickerTitle}
          description={stickerDescription}
          button={show}
          image={"/stickers.jpg"}
          dir={"rtl"}
        />
        <Section
          id={"quotes"}
          title={quoteTitle}
          description={quoteDescription}
          button={show}
          backgound={"bg-white"}
          image={"/quotes.jpg"}
          dir={""}
        />
        <Section
          id={"wallpapers"}
          title={wallpaperTitle}
          description={wallpaperDescription}
          button={show}
          image={"/wallpapers.jpg"}
          dir={"rtl"}
        />
        <Reviews />
      </main>
    </div>
  );
}
