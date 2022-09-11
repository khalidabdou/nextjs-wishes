
export default function Quote({quote:quote}) {

    return (
        <section className="vh-100 bg-light">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-5">
              <div
                className="card text-white"
                style={{ backgroundColor: "#1f959b", borderRadius: 15 }}
              >
                <div className="card-body p-5">
                  <i className="fas fa-quote-left fa-2x mb-4" />
                  <p className="lead">
                    Genius is one percent inspiration and ninety-nine percent
                    perspiration.
                  </p>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">Thomas Edison</p>
                    <h6 className="mb-0">
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "rgba(0,0,0, 0.2)" }}
                      >
                        876
                      </span>{" "}
                      <i className="fas fa-heart ms-2" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

