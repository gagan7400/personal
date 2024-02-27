import React, { useState } from 'react';
import { auth } from './firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    let submithandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((credentials) => {
            console.log(credentials)
            console.log(auth.currentUser)
        }).catch((errs) => {
            console.log(errs);
        })
    }
    return (
        <div>
            <form action="" onSubmit={submithandler}>
                <label htmlFor="">email</label>
                <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                <label htmlFor="">password</label>
                <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                <button type="submit"> submit</button>
            </form>
        </div>
    );
}

export default Signup;
