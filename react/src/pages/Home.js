import { Link } from "react-router-dom"
import { useContext } from "react"
import { PoemContext } from "../context/PoemContext"
import openmic from "../images/openmic.jpg"
import PoemBooklet from "../images/PoemBooklet.jpg"
import publishing from "../images/publishing.jpg"


export default function Home() {

const {poems} = useContext(PoemContext)

return (

  <div>

    {/* Caraousel */}
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active vh-80">
      <img src={openmic} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-green">Open Mic Sessions</h5>
        <p className="text-green">Showcase your creativity by sharing infront of an audience of Poem enthusiats</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={PoemBooklet} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-green">Thousands of Books</h5>
        <p className="text-green">Read from our collection of over a thousand Poetry books</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={publishing} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="text-green">Publishing</h5>
      <p className="text-green">Get your work published from inhouse publishing</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>    


    {/* End of Caraousel */}

    <div className="container">   
          <div className="row">
            
            {
                  poems && poems.length<1?
                  <div className="text-info">
                    There are poems at the moment. Care to add one?
                  </div>:""                                                
            }                                                             
            {                                                                     
                poems && poems.map((poem) => (                                     
                        <div className="p-4 my-2 bg-light rounded-3" style={{"textAlign": "center"}}>
                                <div className="container-fluid">
                          <p className="col-md-12 lead fw-bolder">{poem.title}</p>                                                      
                          <p className="col-md-12 lead text-muted">by {poem.author}</p>                                                   
                          <p className="col-md-12 lead" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{poem.content}</p>
                            {/* <button className="btn btn-dark btn-lg" type="button">Learn More</button> */}         
                            <Link to={`/poem/${poem.id}`} href="#" className="btn btn-success btn-sm">Read More</Link>
                        </div>
                        </div>
                        
                ))
           }
                
          </div>

    </div>

  </div>
  )
}



