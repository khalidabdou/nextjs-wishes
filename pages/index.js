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

  const video=t("video");
  const screen1=t("screen1");
  const screen2=t("screen2");
  const screen3=t("screen3");
  const screen4=t("screen4");

  return (
    <div>
      <SEO />
      <main>
        <Header video={video} />
        <Section
          id={"images"}
          title={imageTitle}
          description={imageDescription}
          button={show}
          backgound={"bg-white"}
          image={"/"+screen1}
          dir={""}
        />
        <Section
          id={"stickers"}
          title={stickerTitle}
          description={stickerDescription}
          button={show}
          image={"/"+screen2}
          dir={"rtl"}
        />
        <Section
          id={"quotes"}
          title={quoteTitle}
          description={quoteDescription}
          button={show}
          backgound={"bg-white"}
          image={"/"+screen3}
          dir={""}
        />
        <Section
          id={"wallpapers"}
          title={wallpaperTitle}
          description={wallpaperDescription}
          button={show}
          image={"/"+screen4}
          dir={"rtl"}
        />
        <Reviews />
      </main>
    </div>
  );
}
