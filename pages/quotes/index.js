import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import Quote from "../comp/Quote";
import React, { useState } from 'react';
let index = 10


export const getStaticProps = async (ctx) => {
    

    console.log(ctx.locale);
    const { locale } = ctx;

   
    const cats = await axios.get("http://specialones.online/api/v2/cats_quote/"+locale);
    //let quotes=res.data.quotes
    
    return {
        props: { categories: cats.data.cats },
    };
};




export default function Index(props) {
    const categories = props.categories
    //const quotes = props.quotes.slice(1,10)
    //const [quotes, setQuotes] = useState(props.quotes.slice(0,index));


    //console.log(categories);
    return (
        <div className="masthead container px-5 bg-white">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row ">
                            {categories.map(function (q, index) {
                                return <div key={index} className="">
                                    <h1>{q.name}</h1>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-2">
                        <ul>
                            {categories.map(function (cat, index) {
                                return <li key={index}><Link href={"/quotes/" + cat.id}>{cat.name}</Link></li>
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )

}

