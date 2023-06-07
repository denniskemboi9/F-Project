import savannah from "../images/savannah.jpg"
import programmer from "../images/programmer.jpg"
import blog3 from "../images/blog3.webp"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { PoemContext } from "../context/PoemContext"

export default function Home() {

  const {poems} = useContext(PoemContext)

  return (

    <div>

      <h1 className='text-center'>Popular Poems</h1>
      <div className='container-fluid row'>

        {
          poems && poems.length<1?
          <div className="text-info">
            There are poems at the moment. Care to add one?
          </div>:""
        }

        { 
        poems && poems.map((poem) => (
          <div className='col-6 col-sm-6 col-md-4 mb-5'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{poem.title}</h5>
                <h6 className="card-text">{poem.author}</h6>
                <p className="card-text">{poem.content}</p>              
                <Link to={`/poem/${poem.id}`} href="#" className="btn btn-success btn-sm w-100">Read More</Link>
              </div>
            </div>
          </div>  
        ))
        }


      </div>
    </div>
  )
}
