import axios from "axios";
import Image from "next/image"
import Link from "next/link";
const url = 'http://specialones.online/categories/thialand/Uploaded%20by%20user%20kanya9559%20-034fa68d420198aefc46e1021dc9420c.WEBP'

export default function Images(props) {


    const categories = props.data
    //console.log(categories);

    return (
        <div className="masthead container px-5 bg-white">
            {categories.map((cat) => {

                <h1>h</h1>
            })}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                           
                                {categories.map((cat) => (
                                    <Image  
                                    className="bg-dark m-4"
                                    key={cat.cid}
                                    src={'http://specialones.online/categories/thialand/twitter.com inspirational-words841f59b5f189aa9f0baa4abc9906353f.WEBP'}
                                    width={300}
                                    height={400}
                                    />
                                    
                                ))}
                            
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
    const res = await axios.get("http://specialones.online/api/cat_latest_images/3");
    //console.log(res.data.cats);
    return {
        props: { data: res.data.cats },
    };
};