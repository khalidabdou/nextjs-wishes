
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
          <figcaption className="blockquote-footer mb-0 text-white">
            Grace Hopper
          </figcaption>
        </figure>
      </div>
    </div>

  )
}

