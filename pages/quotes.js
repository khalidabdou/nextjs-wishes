import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import Quote from "./comp/Quote";
const url = 'http://specialones.online/categories/thialand/Uploaded%20by%20user%20kanya9559%20-034fa68d420198aefc46e1021dc9420c.WEBP'

export default function Quotes(props) {


    const categories = props.data
    //console.log(categories);

    return (
        <div className="masthead container px-5 bg-white">
           
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <Quote />
                            
                        </div>
                    </div>

                    <div className="col-2">
                        One of three columns
                    </div>
                </div>
            </div>
        </div>
    )


}

export const getStaticProps = async () => {
    const res = await axios.get("http://specialones.online/api/quotes_v2/5");
    console.log(res.data);
    return {
        props: { data: res.data },
    };
};