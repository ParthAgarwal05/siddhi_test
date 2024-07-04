import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import { FaLock, FaAt } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getAuthInstance } from '../../services/db';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const auth = getAuthInstance();
    const handleSubmit = async(e) => {
        sendPasswordResetEmail(auth, email).then(data => {
            alert("Check your email.");
        }).catch(err=> {
            alert(err.code);
        })
    }
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Reset Password</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button>Reset</button>
                </div>
            </form>
        </div>
    );
}
export default ForgotPassword;