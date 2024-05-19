import React,{useState} from 'react'
import axios from 'axios'
const LoginPage = () => {
    const [First, setFirst] = useState('');
    const [Last, setLast] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
  
    function handleRequest(event) {
      event.preventDefault();
      axios.post('http://localhost:8081/login', { First, Last, Email, Phone })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  
    return (
      <div className="form-container">
        <form onSubmit={handleRequest}>
          <div className="form-group">
            <label htmlFor='first-name'>First name</label>
            <input
              type="text"
              placeholder='First name'
              onChange={e => setFirst(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='last-name'>Last name</label>
            <input
              type="text"
              placeholder='Last name'
              onChange={e => setLast(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='phone'>Phone number</label>
            <input
              type="tel"
              placeholder='Phone number'
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">Register as Seller</button>
          <button type="submit">Register as Buyer</button>
        </form>
      </div>
    );
}

export default LoginPage