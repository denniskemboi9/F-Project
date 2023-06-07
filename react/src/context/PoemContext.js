import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const PoemContext = createContext();

export default function PoemProvider({children}) 
{
    const navigate = useNavigate()
    const [poems, setPoems] = useState()
    const [change, setChange] = useState(false)


        // Fetch Poems
        useEffect(()=>{
          fetch("/poems", {
              method: "GET",
              headers:{"Content-Type": "application/json"}
          }
          )
          .then(res=>res.json())
          .then(response=>{setPoems(response)
          }
          )
      }, [change])


    // Add a new Poem
    const addPoem = (title, author, content, userid) =>{
        fetch("/poems/addpoem",{
            method: "POST",
            headers:{"Content-Type": "application/json"},    
            body: JSON.stringify({title:title, author:author, content:content, user_id:userid})
        }
        )
        .then(res=>res.json())
        .then(response=>{
            console.log(response)

            if(response.error)
            {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: response.error,
                })
            }
            else if(response.success)
            {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: response.success,
                showConfirmButton: false,
                timer: 1500
              })
              setChange(!change)
              navigate("/")
                
            }

            else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong!",
              })
            }
            
        })
    }

  

    // Delete Poem  
    const deletePoem = (id) =>{
      fetch(`/poems/delete/${id}`,{
          method: "DELETE"
      })
      .then(res=>res.json())
      .then((response)=>{
        setChange(!change)
        console.log(response)
        navigate("/")
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Poem Deleted successfully!',
              timer: 1500
          })

      })
    }
  

    const contextData = {
      poems,
      addPoem,
      deletePoem 
    }

  return (
     <PoemContext.Provider value={contextData}>
        {children}
     </PoemContext.Provider>

  )
}

