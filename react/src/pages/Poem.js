import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PoemContext } from '../context/PoemContext'
import { AuthContext } from '../context/AuthContext'

export default function Poem() {

  const {poems, deletePoem} = useContext(PoemContext)
  const {id} = useParams()
  const singlePoem = poems && poems.find(poem => (
    poem.id==id
  ))

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='container mx-auto'>
      <h4>{singlePoem && singlePoem.title}</h4>
      <p>by: {singlePoem && singlePoem.author}</p>
      <div className='row gx-5'>
          <div className='col-lg-8 bg-light'> 

            <p className='mt-3'>
                {singlePoem && singlePoem.content}
            </p>

          </div>

          <div className='d-flex mt-4 gap-5 '>
              
              <p>Date created: {singlePoem && singlePoem.created_at}</p>
          </div>
          
          <div>
            {
              currentUser && currentUser.username==singlePoem.user.username?
              <>
            <button className="btn btn-success btn-sm m-1">Edit</button>
            <button onClick={()=>deletePoem(singlePoem.id)} className="btn btn-danger btn-sm m-1">Delete</button>
            </>
            :""
            }
          </div>

      </div>
    </div>
  )
}
