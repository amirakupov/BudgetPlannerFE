import {useState,useEffect,useRef, useContext} from "react"
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const LOGIN_URL = 'http://localhost:8000/login';

const Login = () => {
 const { setAuthUser } = useContext(AuthContext);
 const navigate = useNavigate();
 const userRef = useRef();
 const errRef = useRef();

 const [user, setUser] = useState("");
 const [pwd, setPwd] = useState("");
 const [errMsg, setErrMsg] = useState("");
 const [success, setSuccess] = useState(false);

 useEffect(() =>{
    userRef.current.focus();
 },[])

 useEffect(()=>{
  setErrMsg('');
 },[user, pwd])

 const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await axios.post(
        LOGIN_URL,
        {
          username: user,
          password: pwd
        },
         {
          header: {'Content-Type': 'application/json'},
          withCredentials: true
        } 
        );
        console.log(response.data);
        if(response.data.message === "Login successful"){
          setAuthUser({user});
          navigate('/homepage')
          setUser("")
          setPwd("")
          setSuccess(true);
        }
      }catch(err){
        if(!err?.response){
          setErrMsg('No Server Response')
        } else if(err.response?.status === 400){
          setErrMsg('Missing Username or Password')
        } else if (err.response?.status === 401){
          setErrMsg('Unauthorized')
        }else {
          setErrMsg('Login Failed')
        }
        errRef.current.focus();
    }
 }

  return(
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br/>
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ):(
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-aria-live='assertive'>{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
        type="text"  
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        />
        
        <label htmlFor="password">Password</label>
        <input 
        type="password"  
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        />

        <button>Sign In</button>
      </form>

      <p>
        Need an Account?<br/>
        <span className='line'>
          {/*für register*/}
          <Link to="/register">Go to Register</Link>
        </span>
      </p>

    </section>
      )}
      </>
  )
}

export default Login