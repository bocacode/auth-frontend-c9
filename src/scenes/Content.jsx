import { useEffect, useState } from "react"

export default function Content() {
<<<<<<< HEAD
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
    
=======
  const [secrets, setSecrets] = useState()
  useEffect(() => {
    fetch('https://auth-api-c9.web.app/secrets', {
    // fetch('http://localhost:5002/secrets', {
      headers: {
        Authorization: localStorage.getItem('token'),
      }
    })
      .then(res => res.json())
      .then(setSecrets)
      .catch(alert)
  }, [])
  return (
    <>
      <h1>Content</h1>
      {secrets
        ? <h2>{secrets.message}</h2>
        : <h2>Loading...</h2>
      }
    </>
  )
>>>>>>> bd42f460f1e47dd573717075dd225e34a3ccc026
}
