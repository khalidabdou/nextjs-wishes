import Image from "next/image";
import { reviews } from "../../greeting";
import useTranslation from 'next-translate/useTranslation'
export default function Reviews() {
  const stars = ["/star.png", "/star.png", "/star.png", "/star.png", "/star.png"];
  const { t, lang } = useTranslation('common')
  return (
    <div className="container p-4">
      <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h2 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">
          {t('review')}
        </h2>
      </div>
      <div className="row">
        {reviews.map((review) => (
          <div className="card" key={review.id}>
            <div className="card-body">
              <Image
                className="card-img-top"
                src={review.image}
                alt="Card image cap"
                width={100}
                height={100}
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">{review.name} </h5>
              <div className="row p-2">
                {stars.map((star,index) => (
                  <Image src={star} alt="star" width={20} height={20} key={index} className="" />
                ))}
              </div>


              <p className="card-text"  >{review.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card {
          height: auto;
          width: 18rem;
          margin: 1rem;
        }
        p {
          color: darkgray;
        }
      `}</style>
    </div>
  );
}
