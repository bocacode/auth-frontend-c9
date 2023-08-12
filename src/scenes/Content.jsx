import { useEffect, useState } from "react"

export default function Content() {
  const [secrets,setSecrets] = useState()

  useEffect(()=>{
    fetch("http://127.0.0.1:5002/secrets", {
      headers:{
          Authorization: localStorage.getItem("token")
      }
    })
    .then(incoming=>incoming.json())
    .then(setSecrets)
    .catch(console.error)
  },[])

  return(
    <>
    <h1>Content</h1>
    {secrets
    ?<h2>{secrets.message}</h2>
    :<h2>Loading...</h2>
    }
    </>
    )
    
}
