
import Image from "next/image"
import Router from 'next/router'

export default function Crad({ category }) {




    return (
        <>

            <div className="card" style={{ width: "18rem" }} onClick={() => Router.push('/quotes/' + category.id)}>
                <div className="card-img-top">
                    <Image
                        src={'http://specialones.online/category/' + category.image}
                        alt="Card image cap"
                        width={300}
                        height={250}
                    />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
            </div>
        </>

    )

}