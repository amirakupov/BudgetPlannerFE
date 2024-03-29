import React, { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

import './Register.css';
import axios from 'axios';

const USER_REGX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const NAME_REGX = /^[a-zA-Z]{2,30}$/;

const REGISTER_URL = "/register";


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  },[])

  useEffect(() => {
    const result = USER_REGX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  },[user])

  useEffect(() => {
    const result = PWD_REGX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  },[pwd, matchPwd])

  useEffect(() => {
    setValidEmail(EMAIL_REGX.test(email));
  }, [email]);

  useEffect(() => {
    setValidFirstName(NAME_REGX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(NAME_REGX.test(lastName));
  }, [lastName]);

  useEffect(()=> {
    setErrMsg('');
  },[user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGX.test(user);
    const v2 = PWD_REGX.test(pwd);
    const v3 = EMAIL_REGX.test(email);
    const v4 = NAME_REGX.test(firstName);
    const v5 = NAME_REGX.test(lastName);
    if(!v1 || !v2 || !v3 || !v4 || !v5){
      setErrMsg("Invalid Entry");
      return;
    }
      /* console.log(user, pwd);
      setSuccess(true); */

      /* try{
        const response = await axios.post('http://localhost:8000/register',
          JSON.stringify({user, pwd}),
          {
            header: {'Content-Type': 'application/json'},
            withCredentials: true
          }
        );
        console.log(response.data);
        setSuccess(true);
        // clear input fields
      }catch(err){
        if(!err?.response){
          setErrMsg('No Server Response');
        }else if (err.response.status === 409){
          setErrMsg('Username Taken');
        } else{
          setErrMsg('Registration Failed')
        }
        errRef.current.focus();
      } */
      
    axios.post('http://localhost:8000/register', {
      username: user,
      password: pwd,
      email: email,
      first_name: firstName,
      last_name: lastName })
      .then(response => {
        // Handle success
        console.log(response.data);
        setSuccess(true);
      })
      .catch(error => {
        // Behandeln Sie den Fehlerfall
        console.log(error);
        if (error.response && error.response.status === 409) {
        setErrMsg('Username Taken');
        } else {
        setErrMsg('Registration Failed');
        }
      });
      
  }

  return (
    // <div className="body-background">
    <div className="auth-container">
    {success ? (
      <section>
          <h1>Success!</h1>
          <p>
              {/* <a href='#'>Sign In</a> */}
              <Link to="/login">Sign In</Link>
          </p>
      </section>
    ) : (
    <section>
      {/* # display error message */}
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-aria-live='assertive'>{errMsg}</p>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validName ||  !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span> 
        </label>
        <input
          type = "text"
          id = "username"
          ref={userRef}
          autoComplete='off'
          onChange={(e)=>setUser(e.target.value)}
          required
          aria-invalid = {validName ? "false" : "true"}
          aria-describedby='uidnote'
          onFocus={()=>setUserFocus(true)}
          onBlur={()=>setUserFocus(false)}
        />
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            4 to 24 characters. <br/>
            Must begin with a letter. <br/>
            Letters, number, underscores, hyphens allowed.
        </p>

        <label htmlFor='email'>Email:</label>
        <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        
        <label htmlFor='firstName'>First Name:</label>
        <input
        type="text"
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        required
        />
        
        <label htmlFor='lastName'>Last Name:</label>
        <input
        type="text"
        id="lastName"
        onChange={(e) => setLastName(e.target.value)}
        required
        />

        <label htmlFor='password'>
          Password:
          <span className={validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validPwd ||  !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          type = "password"
          id = "password"
          onChange={(e)=>setPwd(e.target.value)}
          required
          aria-invalid = {validPwd ? "false" : "true"}
          aria-describedby='pwdnote'
          onFocus={()=>setPwdFocus(true)}
          onBlur={()=>setPwdFocus(false)}
        />
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            8 to 24 characters. <br/>
            Must include uppercase and lowercase letters, a number and a special character.<br/>
            Allowed special characters: <span aria-label='exclamtaion mark'>!</span> <span aria-label='hashtag'>#</span>
            <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span> 
        </p>

        <label htmlFor='confirm_pwd'>
          Confirm Password:
          <span className={validMatch && matchPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validMatch ||  !matchPwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span> 
        </label>
        <input
          type = "password"
          id = "confirm_pwd"
          onChange={(e)=>setMatchPwd(e.target.value)}
          required
          aria-invalid = {validMatch ? "false" : "true"}
          aria-describedby='confirmnote'
          onFocus={()=>setMatchFocus(true)}
          onBlur={()=>setMatchFocus(false)}
        />
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            Must match the first password input field
        </p>

        <button disabled={!validName || !validPwd || !validMatch ? true : false}>
          Sign up!
        </button>
      </form>
      <p>
        Already registered?<br/>
        <span className='line'>
          {/*für login*/}
          <Link to="/login">Sign In</Link>
        </span>
      </p>
    </section>
    )
    }
   </div> 
  );
};

export default Register;