import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { PoemContext } from "../context/PoemContext"

export default function NewPoem() {

    const {currentUser} = useContext(AuthContext)  
    const {addPoem} = useContext(PoemContext)

    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [content, serContent] = useState()

    const handleSubmit = (e) =>  {
        e.preventDefault()
        addPoem(title, author, content, currentUser.id)
    }

  return (

    <div className="container" style={{"min-height":"70vh"}}>


        {currentUser && currentUser?
        <>

            <h3>Add a New Poem</h3>
            <div className="row h-full">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" onChange={e=>setTitle(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Title" />
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1">Author</label>
                        <input type="text" onChange={e=>setAuthor(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Author" />
                    </div>                
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1">Content</label>
                        <input type="text" onChange={e=>serContent(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Content" />
                    </div>

                    <button type="submit" class="btn mt-3 btn-success">Submit</button>

                </form>
            </div>
            </div>

        </>
        :
        <>
            <div className="text-info">
                Please Login to Add a new poem
            </div>
        </>

        }
    </div>
  )
}
