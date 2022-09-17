
import Image from "next/image"
import Router from 'next/router'

export default function Crad({ categoryImage,categoryName ,goTo ,API}) {
    return (
        <a href={goTo}>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                    <Image
                        src={API+'category/' + categoryImage}
                        alt="Card image cap"
                        width={300}
                        height={250}
                    />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{categoryName}</h5>
            </div>
        </a>

    )

}