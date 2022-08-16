
import { about } from "../greeting"
export default function About() {

    return (
        <div className="masthead container px-5 bg-white">
            <h1>{about.title}</h1>
            <p>{about.longText}</p>
            <h3>Thanks For Visiting Our Site</h3>
        </div>
    )
}