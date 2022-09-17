import React from "react";
import axios from "axios";
import Quote from "../comp/Quote";
import Image from 'next/image'
import SEO from '../comp/SEO'
import { useEffect, useState } from "react";

let limit = 20
export const getStaticProps = async (ctx) => {
    // ctx will contain request parameters
    const { params } = ctx;
    // We will destructure id from the parameters
    const id = params.id;
    const quotes = await axios.get(process.env.DASHBOARD_API + "api/v2/quotes_v2/" + id);
    //console.log(quotes);
    return {
        props: {
            quotes: quotes.data,
        },
    };
};

export const getStaticPaths = async ({ locales }) => {

    const cats = await axios.get(process.env.DASHBOARD_API + "api/v2/cats_quote/all");

    let paths = [];

    cats.data.cats.map((cat) => {
        for (const locale of locales) {
            paths.push({
                params: {
                    id: cat.id.toString(),
                },
                locale,
            });
        }
    });

    return {
        paths,
        fallback: false,
    };
};

const Images = ({ quotes }) => {

    const [categories, setCat] = useState(null)
    const [quotesLimit, setQuotes] = useState(quotes.quotes.slice(0, 10));


    useEffect(() => {

        axios.get(process.env.DASHBOARD_API + "api/v2/cats_quote/zh").then(res => {
            console.log(res);
            setCat("aaa")
        });

    }, [])



    function loadMore() {
        limit = limit + 20
        setQuotes(quotes.quotes.slice(0, limit))
    }

    function Comp() {

        if (categories === null) {
            return <h1></h1>
        } else {
            return <h1>{categories}</h1>
        
        }
    }
    return (
        <>
            <SEO
                seoTitle={quotes.category.seoTitle ? quotes.category.seoTitle : quotes.category.name}
                seoKeyword={quotes.category.seoKeywords}
                seodesc={quotes.category.seoDesc ? quotes.category.seoDesc : quotes.category.name}
            />
            <div className="masthead container px-5 bg-white">
                <div className="container">
                    <h1>{quotes.category.seoTitle ? quotes.category.seoTitle : quotes.category.name}</h1>
                    <Image
                        src={process.env.DASHBOARD_API + "category/" + quotes.category.image}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <div className="row">
                        <div className="col">
                            <div className="row ">
                                {quotesLimit.map(function (q, index) {
                                    return <div key={index} className="">
                                        <Quote quote={q.quote} />
                                    </div>
                                })}
                            </div>
                        </div>

                        <div className="col-sm-3 center-image hidden-xs">

                            {Comp()}

                        </div>

                    </div>
                    <button className="btn btn-primary" onClick={loadMore}>next</button>

                </div>
            </div>

        </>

    );
};

export default Images;