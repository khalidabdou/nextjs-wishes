import React from "react";
import axios from "axios";
import Quote from "../comp/Quote";
import Image from 'next/image'
import SEO from '../comp/SEO'
import { useEffect, useState } from "react";

let limit = 20
export const getStaticProps = async (ctx) => {

    const { params } = ctx;
    const id = params.id;
    const images = await axios.get(process.env.DASHBOARD_API + "api/v2/images/" + id);
    return {
        props: {
            images: images.data,
        },
    };
};

export const getStaticPaths = async ({ locales }) => {

    const cats = await axios.get(process.env.DASHBOARD_API + "api/v2/cats_image/all");
    let paths = [];

    cats.data.cats.map((cat) => {
        for (const locale of locales) {
            paths.push({
                params: {
                    id: cat.cid.toString(),
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

const Images = ({ images }) => {

    const [categories, setCat] = useState(null)
    const [imagesLimit, setimages] = useState(images.images.slice(0, 4));






    function loadMore() {
        limit = limit + 20
        setimages(images.images.slice(0, limit))
    }

    function Comp() {

        if (categories === null) {
            return <h1></h1>
        } else {
            return <h1>{categories}</h1>
            return <ul>
                {categories.map(function (cat, index) {
                    return <li key={index}><Link href={"/images/" + cat.id}>{cat.name}</Link></li>
                })}
            </ul>
        }
    }
    return (
        <>
            <SEO
                seoTitle={images.category.seoTitle ? images.category.seoTitle : images.category.category_name}
                seoKeyword={images.category.seoKeywords}
                seodesc={images.category.seoDesc ? images.category.seoDesc : images.category.category_name}
            />
            <div className="masthead container px-5 bg-white">
                <div className="container">
                    <h1>{images.category.seoTitle ? images.category.seoTitle : images.category.category_name}</h1>

                    <div className="row">
                        <div className="col">
                            <div className="row ">
                                {imagesLimit.map(function (q, index) {
                                    return <div
                                        key={index} className="col">
                                        <Image

                                            key={q.id}
                                            src={process.env.DASHBOARD_API + "/categories/Chinese/" + q.image_upload}
                                            width={300}
                                            height={400}
                                        />
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