
import Image from "next/image";

export default function Error() {
  return (
    <div className="masthead container px-5 bg-white">
      <h1>404</h1>
      <Image
      className="img-fluid"
      src="/404.png" alt="404" height={120} width={120} />
      <h3>Page Not Found</h3>
      <h5>Thanks For Visiting Our Site</h5>
      <a href={"/"} className="btn btn-primary" >back</a>
    </div>
  );
}
