import edit from "../images/edit.png"

export default function NewPoem() {
  return (
    <div className="container" style={{"min-height":"70vh"}}>
        <h3>Add a New Poem</h3>
        <div className="row h-full">
            <div className="col-md-6">
               <img src={edit} className="img-fluid" />
            </div>
            <div className="col-md-6">
            <form>
                <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="file" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Image</label>
                    <input type="file" class="form-control " id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                </div>                
                <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>

                <button type="submit" class="btn mt-3 btn-success">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
