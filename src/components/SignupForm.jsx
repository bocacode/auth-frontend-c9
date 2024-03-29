import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../App'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // make a post request to the API with the form data
<<<<<<< HEAD
    //fetch('https://auth-api-c9.web.app/signup', {
    fetch('http://127.0.0.1:5002/signup', {
=======
    fetch('https://auth-api-c9.web.app/signup', {
    // fetch('http://localhost:5002/signup', {
>>>>>>> bd42f460f1e47dd573717075dd225e34a3ccc026
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
    })
    // create a new user in the database
    // then...
      .then(res => res.json())
      .then(response => {
        // 1. do something with the new user
        setUser(response.user)
<<<<<<< HEAD
        //1.1 sets in token inot browser
        localStorage.setItem("token", response.token)
=======
        localStorage.setItem('token', response.token)
>>>>>>> bd42f460f1e47dd573717075dd225e34a3ccc026
        // 2. redirect to the content page
        navigate('/secret')
      })
      .catch(err => alert(err.message))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email &nbsp;
        <input type="email" name="email"
          value={email} onChange={e => setEmail(e.target.value)} />
      </label><br />
      <label htmlFor="password">Password &nbsp;
        <input type="password" name="password"
          value={password} onChange={e => setPassword(e.target.value)} />
      </label><br />
      <input type="submit" value="Sign Up" />
      <br />
      <Link to="/login" className='App-link'>Login</Link>
    </form>
  )
}
