import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';

import { auth } from './firebase';
import { useRouter } from 'next/router'
import modules from "./data/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from "next/link";
import PropTypes from 'prop-types';
import { ConsoleLoggingListener } from 'microsoft-cognitiveservices-speech-sdk/distrib/lib/src/common.browser/Exports';


export function BufferScreen() {
    return (
        <div className="relative bg-[#ECEFF5] bg-cover bg-no-repeat bg-center overflow-hidden min-h-screen flex flex-col justify-center align-center" id="homeHero">
        </div>
    )
}

export function LogInScreen() {
    return (
        <Login logInInitialization={true}/>
    )
}

export function UserCreationScreen() {
    return (
        <Login logInInitialization={false}/>
    )
}

const Login = ({ logInInitialization }) => {
    console.log(`Log In Initialization: ${logInInitialization}`)
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logInHook, setLogInHook] = useState(logInInitialization);
    const [authCode, setAuthCode] = useState('');

    const onLogin = (e) => {
        e.preventDefault();

        if (logInHook) {
            signInWithEmailAndPassword(auth, `${email}@noora.stanford.edu`, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                alert(errorMessage);
            });
        } else {
            if (authCode == process.env.CREATE_USER_KEY) { // set auth_code in environment
                createUserWithEmailAndPassword(auth, `${email}@noora.stanford.edu`, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert(errorMessage);
                });
              } else {
                alert("Wrong authorization code. Please try again.");
              }        
        }

       
    }

    // Sign in

    return (
        <div className="relative bg-[#ECEFF5] bg-cover bg-no-repeat bg-center overflow-hidden min-h-screen flex flex-col justify-center align-center" id="homeHero">

            <div className="relative z-10">
                <div className="pb-6 text-slate-700 flex flex-col gap-y-1 md:gap-y-2 text-center">
                <h1 className="inline bg-gradient-to-r from-noora-primary-dark via-noora-secondary-light to-noora-primary-dark1 bg-clip-text font-bold text-4xl xl:text-5xl tracking-tight">
                    {logInHook ? "Log in to" : "Sign up for" } <span className="text-noora-primary">Noora.</span>
                </h1>
                {/* <p>
                    {logInHook ? "Don't have an account? " : "Already have an account? "}
                    <a href={"/#"} onClick={() => { 
                        setLogInHook(!logInHook); 
                    }}>                            
                        <span className="text-noora-primary">{logInHook ? "Create one here." : "Sign in here."}</span>
                    </a>
                </p> */}
                </div>
                <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-200 p-6 rounded-md w-1/2">
                    <form className="mx-auto text-center">
                    <div>
                        <div class="mb-4">
                            <label htmlFor="email-address" className="text-slate-700 font-bold">
                                Username
                            </label>
                        </div>
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="NOORA_USER"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <br/>
                    <div>
                        <div class="mb-4">
                            <label htmlFor="password" className="text-slate-700 font-bold">
                                Password
                            </label>
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="noora123"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>



                    {!logInHook && (
                    <div>
                        <br/>
                        <div>
                            <div class="mb-4">
                                <label htmlFor="authCode" className="text-slate-700 font-bold">
                                    Authorization Code
                                </label>
                            </div>
                            <div>
                                <input
                                    id="authCode"
                                    name="authCode"
                                    type="password"
                                    required
                                    placeholder="4zh4278dxh"
                                    onChange={(e) => setAuthCode(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    )}

                    <br/>
                    <div>
                        <button className="rounded-lg py-2 p-4 px-8 outline-none bg-noora-primary hover:bg-noora-primary-dark text-white mx-auto mt-4 text-lg font-medium flex justify-center" onClick={onLogin}>
                            {logInHook ? "Login" : "Sign Up"}
                        </button>
                    </div>  
                    </form>
                </div>
            </div>
        </div>
    )

    // const onSubmit = (e) => {
    //   e.preventDefault()

    //   const [authCode, setPassword] = useState('');
     
    //   if (authCode == "Noora123") {
    //     createUserWithEmailAndPassword(auth, `${email}@noora.stanford.edu`, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage);
    //     });
    //   } else {
    //     alert("Wrong authorization code. Please try again.");
    //   }

 
   
    // }

    // Create an account
    // return (
    //     <div className="relative bg-[#ECEFF5] bg-cover bg-no-repeat bg-center overflow-hidden min-h-screen flex flex-col justify-center align-center" id="homeHero">

    //         <div className="relative z-10">
    //             <div className="pb-6 text-slate-700 flex flex-col gap-y-1 md:gap-y-2 text-center">
    //             <h1 className="inline bg-gradient-to-r from-noora-primary-dark via-noora-secondary-light to-noora-primary-dark1 bg-clip-text font-bold text-4xl xl:text-5xl tracking-tight">
    //                 Create an account to <span className="text-noora-primary">Noora.</span>
    //             </h1>
    //             </div>
    //         </div>
    //     </div>
    // );

}
 



Login.propTypes = {
    logInInitialization: PropTypes.bool.isRequired, 
};
