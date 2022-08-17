import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { playStoreLink, appStoreLink } from "../../greeting";
import { motion, AnimatePresence } from 'framer-motion';


export default function Header() {

  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: {
      opacity: 1, x: 0, y: 0, transition: {
        duration: 0.9,
        delay: 0.1
      }
    },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  const { t, lang } = useTranslation("common");
  const title = t("title");
  const description = t("description");

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
    <a className="me-lg-3 mb-4 mb-lg-0" href={appStoreLink}>
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
    <header className="masthead">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="mb-5 mb-lg-0  text-lg-start">
              <h1 className="display-1 lh-2 mb-3 text-black">{title}</h1>
              <p className="lead fw-normal text-muted mb-5">{description}</p>
              <div className="d-flex flex-column flex-lg-row align-items-center">
                {playStoreButton}
                {appStoreButton}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="masthead-device-mockup">
              <svg
                className="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop className="gradient-start-color" offset="0%"></stop>
                    <stop className="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg
                className="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <motion.div className="device-wrapper"
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }}
              >
                <div
                  className="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div className="screen bg-black">
                    {/* <Image src="/en/main.jpg" alt="logo" layout="fill" /> */}
                    <video
                      className="bg-video"
                      src="/video.mp4"
                      controls={false}
                      autoPlay={true}
                      loop={true}
                      muted={true}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .bg-video {
            max-width: 100%;
            height: 100%;
          }
            `
        }</style>
      </div>
    </header >
  );
}
