import savannah from "../images/savannah.jpg"
import programmer from "../images/programmer.jpg"
import blog3 from "../images/blog3.webp"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1 className='text-center'>Popular Poems</h1>
      <div className='container-fluid row'>

        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
            <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={savannah} className="card-img-top" alt="img loading..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/blog/2" href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>


        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card ">
          <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={programmer} className="card-img-top" alt="img loading..." />
           </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/blog/2" href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>

        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
          <div className="overflow-hidden " style={{"height":"30vh"}}>
            <img src={blog3} className="card-img-top" alt="img loading..." />
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/blog/2" href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>

        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
          <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={savannah} className="card-img-top" alt="img loading..." />
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/blog/2" href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>

        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
          <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={savannah} className="card-img-top" alt="img loading..." />
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/blog/2" href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>

        <div className='col-6 col-sm-6 col-md-4'>
          <div className="card">
          <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={savannah} className="card-img-top" alt="img loading..." />
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/blog/2" href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
