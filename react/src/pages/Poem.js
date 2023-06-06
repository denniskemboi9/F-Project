import React from 'react'
import blog2 from "../images/blog2.jpg"

export default function Poem() {
  return (
    <div className='container mx-auto'>
        <h4>Title</h4>
        <div className='row gx-5'>
            <div className='col-lg-8 bg-light'>
              <img src={blog2} className='img-fluid' alt='image' />
             
              <div className='d-flex mt-4 gap-5 '>
                <p>Author: Dennis Kemboi</p>
                <p>Date posted: 6 June 2023</p>
              </div>

              <p className='mt-3'>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
              </p>

            </div>


            <div className='col-lg-4'>
            <div className='card p-2'>
              <h5 className='fw-thin mt-5'>LATEST NEWS</h5>
              <h6>Our first office</h6>
              <p>
                Over the past year, Volosoft has undergone many changes! After months of preparation.

                Read in 9 minutes
                Enterprise Design tips
                Over the past year, Volosoft has undergone many changes! After months of preparation.

                Read in 14 minutes
                Our first project with React
                Over the past year, Volosoft has undergone many changes! After months of preparation.

                Read in 4 minutes
              </p>

              <form className='mt-5'>
                <h6>Subscribe</h6>
                <div class="form-group my-4">
                  <label>Email address</label>
                  <input type="email" class="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" class="btn btn-success w-100">
                  Submi
                </button>
                
              </form>
            </div>
            </div>

        </div>
    </div>
  )
}
