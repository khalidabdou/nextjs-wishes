import React from "react";
import axios from "axios";
import Quote from "../comp/Quote";
import { useState } from 'react';
import Image from 'next/image'
import SEO from '../comp/SEO'

let limit = 20
export const getStaticProps = async (ctx) => {
    // ctx will contain request parameters
    const { params } = ctx;
    // We will destructure id from the parameters
    const id = params.id;
    const quotes = await axios.get("http://specialones.online/api/v2/quotes_v2/" + id);
    //console.log(quotes);
    return {
        props: {
            quotes: quotes.data,
        },
    };
};

export const getStaticPaths = async ({ locales }) => {

    const cats = await axios.get("http://specialones.online/api/v2/cats_quote/all");



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

    // let paths = cats.data.cats.map(cat => {
    //     //console.log(cat.id);
    //     return {
    //         params: { 
    //             id: cat.id.toString()

    //          },

    //     }
    // })

    return {
        paths,
        fallback: false,
    };
};

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Quotes = ({ quotes }) => {
    const [quotesLimit, setQuotes] = useState(quotes.quotes.slice(0, 10));



    function loadMore() {
        limit = limit + 20
        setQuotes(quotes.quotes.slice(0, limit))
    }
    return (
        <>
            <SEO />
            <div className="masthead container px-5 bg-white">
                <div className="container">
                    <h1>best quotes 2022</h1>
                    <Image
                        src="http://specialones.online/category/Uploaded%20by%20user%20alwanalhamdani%20-1d6b1fee54ba74c6553f8ec7eb5b29a1.WEBP"
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

                        <div className="col-2">
                            <ul>

                            </ul>
                        </div>

                    </div>
                    <button className="btn btn-primary" onClick={loadMore}>next</button>

                </div>
            </div>

        </>

    );
};

export default Quotes;
