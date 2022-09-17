
import { useEffect } from "react";


export default function Quote({ quote: quote }) {



  

  async function copy(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(quote);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  return (
    <section className="m-0 p-2">
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col ">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <div className="text-center mb-4 pb-2">
                </div>
                <figure className="text-center mb-0">
                  <blockquote className="blockquote">
                    <p className="pb-3">
                      <i className="fas fa-quote-left fa-xs text-primary" />
                      <span className="lead font-italic" id="quote">
                        {quote}
                      </span>
                      <i className="fas fa-quote-right fa-xs text-primary" />
                    </p>

                    <div>
                      <i className="col bi bi-whatsapp m-2" style={{ fontSize: 25 + 'px' }}>
                        <a href="whatsapp://send" onClick="ga.send('btn1');" data-text="Take a look at this awesome website:" />
                      </i>
                      <i
                        className="col bi bi-facebook m-2"
                        style={{ fontSize: 25 + 'px' }}
                      ></i>
                      <i className="col bi bi-instagram m-2" style={{ fontSize: 25 + 'px' }}></i>
                      <i className="col bi bi-clipboard-check m-2" style={{ fontSize: 25 + 'px' }} onClick={(e) => copy(e)}></i>
                    </div>
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    // <div className="card bg-success text-white rounded-3 mb-3">
    //   <div className="card-body p-4">
    //     <figure className="mb-0">
    //       <blockquote className="blockquote">
    //         <p className="pb-2">
    //           {quote}
    //         </p>
    //       </blockquote>

    //         <i className="col bi bi-whatsapp m-2" style={{ fontSize: 25 + 'px' }}></i>
    //         <i className="col bi bi-facebook m-2" style={{ fontSize: 25 + 'px' }}></i>
    //         <i className="col bi bi-instagram m-2" style={{ fontSize: 25 + 'px' }}></i>
    //         <i className="col bi bi-clipboard-check m-2" style={{ fontSize: 25 + 'px' }}></i>
    //     </figure>
    //   </div>
    // </div>

  )
}

