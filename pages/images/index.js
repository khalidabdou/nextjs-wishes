import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import Quote from "../comp/Quote";
import React, { useState } from 'react';
let index = 10
import SEO from '../comp/SEO'
import cat from '../comp/CardCat'
import CardCat from "../comp/CardCat";

export const getStaticProps = async (ctx) => {

    const { locale } = ctx;
    const cats = await axios.get(process.env.DASHBOARD_API + "api/v2/cats_image/" + locale);
    //let quotes=res.data.quotes

    return {
        props: { categories: cats.data.cats },
    };
};

export default function Index(props) {
    const categories = props.categories
    return (
        <>
            <SEO />
            <div className="masthead container px-5 bg-white">
                <div className="container">


                    <div className="row">
                        <div className="col">
                            <div className="row ">
                                {categories.map(function (q, index) {
                                    return <div key={index} className="col">
                                        <CardCat
                                            categoryName={q.category_name}
                                            categoryImage={q.category_image}
                                            goTo={'/images/' + q.cid}
                                            API={process.env.DASHBOARD_API}
                                        />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="col-sm-3 center-image hidden-xs">
                            <ul>
                                {categories.map(function (cat, index) {
                                    return <li key={index}><Link href={"/images/" + cat.cid}>{cat.category_name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

