import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function SEO() {
  
  const { t, lang } = useTranslation("common");

  const keywords = t("common:keywords", {}, { returnObjects: true });
  const description = t("common:description", {}, { returnObjects: true });
  const title = t("common:appName", {}, { returnObjects: true });

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <>
      </>
    </Head>
  );
}
