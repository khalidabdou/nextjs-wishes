import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import Quote from "./comp/Quote";
const url = 'http://specialones.online/categories/thialand/Uploaded%20by%20user%20kanya9559%20-034fa68d420198aefc46e1021dc9420c.WEBP'

export default function Quotes(props) {


    const categories = props.cats.cats
    const quotes = props.quotes
    console.log(quotes);

    return (
        <div className="masthead container px-5 bg-white">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row ">
                            {quotes.map(function (q,index) {
                                return <div key={index} className="">
                                    <Quote quote={q.quote}/>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="col-2">
                        <ul>
                            {categories.map(function (cat, index) {
                                return <li key={index}><Link href="/blog/hello-world">{cat.name}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export const getStaticProps = async () => {
    const res = await axios.get("http://specialones.online/api/quotes_v2/7");
    const cats = await axios.get("http://specialones.online/api/cats_quote/7");
    let quotes=res.data.quotes.slice(1,10)
    console.log(res.data);

    return {
        props: { quotes: quotes, cats: cats.data },
    };
};