

export default function Quote({ quote: quote }) {

  return (

    <div className="card bg-success text-white rounded-3 mb-3">
      <div className="card-body p-4">
        <figure className="mb-0">
          <blockquote className="blockquote">
            <p className="pb-2">
              {quote}
            </p>
          </blockquote>
       
            <i className="col bi bi-whatsapp m-2" style={{ fontSize: 25 + 'px' }}></i>
            <i className="col bi bi-facebook m-2" style={{ fontSize: 25 + 'px' }}></i>
            <i className="col bi bi-instagram m-2" style={{ fontSize: 25 + 'px' }}></i>
            <i className="col bi bi-clipboard-check m-2" style={{ fontSize: 25 + 'px' }}></i>
          

        </figure>
      </div>
    </div>

  )
}

