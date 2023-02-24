import { useEffect, useState } from "react"

export default function Content() {
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
}
