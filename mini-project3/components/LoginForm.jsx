
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

function LoginForm() {
    // input state values always need to be strings - empty initially
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError]= useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reloading on form submit
        try {
          const res = await signIn('credentials',{userEmail, userPassword, redirect:false });
          
          if(res.error){
            setError('Login Failed')
            return;
          }
          setTimeout(() =>{router.push('/workouts');},1000)
        } catch (error) {
            console.log('Error:', error)
        }
        // add some password validation
        // if (userPassword.length < 5) {
        //     setSubmitResult('Password must be at least 5 characters long');
        // } else if (userPassword === userEmail) {
        //     setSubmitResult('Password must not match email address');
        // } 
    }

    return (
    <div className="LoginForm componentBox">
        <div><Image src='/project.png' width={250} height={250} className="mainLogo"alt='Logo'/></div>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userEmail">Email Address:</label> <br /> 
               <div> 
                    <input 
                        className="input"
                        type="email" 
                        value={userEmail}
                        id= "userEmail" 
                        name="userEmail"
                        placeholder="Email"
                        onChange={(e) => setUserEmail(e.target.value)} /> <br />
                <label htmlFor="userPassword">Password:</label> <br /> 
                    <input 
                        className="input"
                        type="password" 
                        value={userPassword}
                        id="userPassword" 
                        name="userPassword"
                        placeholder="Password"
                        onChange={(e) => setUserPassword(e.target.value)} />
                </div>        
                <button className="button">Log In</button> <br />
                { error && (
                <div className="error">{error}</div>
                )}
                <Link className="signup"href={'/signup'}>Don't have an account? <span style={{textDecoration:'underline'}}>Sign Up</span></Link>
            </form>
        </div>
    </div>
    )
    }
    
    export default LoginForm

