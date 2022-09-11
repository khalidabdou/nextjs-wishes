

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import { playStoreLink, appStoreLink } from "../../greeting";

export default function Footer() {

    const { t, lang } = useTranslation('common')
    const get = t('get')

     //if playstore link is not empty then show playstore button
  const playStoreButton = playStoreLink ? (
    <a className="me-lg-3 mb-4 mb-lg-0" href={playStoreLink}>
      <Image
        className="app-badge"
        src="/google-play-badge.svg"
        alt="..."
        width={200}
        height={200}
      />
    </a>
  ) : null;
  //if appstore link is not empty then show appstore button
  const appStoreButton = appStoreLink ? (
    <a className="me-lg-3 mb-4 mb-lg-0" href={appStoreLink} target="_blanck" >
      <Image
        className="app-badge"
        src="/app-store-badge.svg"
        alt="..."
        width={200}
        height={200}
      />
    </a>
  ) : null;

    return (
        <footer >
        <section className="bg-gradient-primary-to-secondary" id="download">
        <div className="container px-5">
            <h2 className="text-center text-white font-alt mb-4">{get}</h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                {playStoreButton}
                {appStoreButton}
            </div>
        </div>
    </section>
      </footer>
    );
}
