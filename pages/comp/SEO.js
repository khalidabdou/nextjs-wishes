import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function SEO({seoTitle,seoKeyword,seodesc}) {
  
  const { t, lang } = useTranslation("common");

  

  const keywords =seoKeyword ? seoKeyword :t("common:keywords", {}, { returnObjects: true });
  const description =seodesc ? seodesc : t("common:description", {}, { returnObjects: true });
  const title =seoTitle ? seoTitle : t("common:appName", {}, { returnObjects: true });


  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="tags" content="quotes"></meta>
    </Head>
  );
}
