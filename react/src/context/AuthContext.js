import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const AuthContext = createContext();

export default function AuthProvider({children}) 
{
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState()

    const [change, setChange] = useState(false)

    // login
    const login = (username, password) =>{
        fetch("/auth/login",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        .then(res=>res.json())
        .then(response=>{
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
                    title: 'LoggedIn successfully!',
                    timer: 1500
                  })
                navigate("/")
                setChange(!change)

            }
            else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops...',
                    text: "Something went wrong!",
                    timer: 3000
                })

            }
            
        })
    }

    // Register
    const register = (username, email, password) =>{
        // Post this data to the backend
        fetch("/users/adduser",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password})
        })
        .then(res=>res.json())
        .then((response) => {
            console.log(response);
            if (response.error) {
              Swal.fire("Error", response.error, "error");
            } else if (response.success) {
              navigate("/login");
              Swal.fire("Success", response.success, "success");
              setChange(!change)
              
            } else {
              Swal.fire("Error", "Something went wrong", "error");
            }
          });
        
    }

     // Logout
     const logout = () =>{
        fetch("/auth/logout",{
            method: "POST",
            headers:{"Content-Type": "application/json"}
        })
        .then(res=>res.json())
        .then((response)=>{
            setChange(!change)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Logged out successfully!',
                timer: 300
            })
            navigate("/login")
            setCurrentUser()
            setChange(!change)

        })
    }
   
    // check current user
    useEffect(()=>{
        fetch("/current_user",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response)
            if (response.user)
            {
                setCurrentUser(response.user)
            }
            
        })
    }, [change])

    const contextData = {
        login, 
        currentUser,
        register, 
        logout
    }

  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}

