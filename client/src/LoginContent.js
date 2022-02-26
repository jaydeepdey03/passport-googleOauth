import React from 'react'
import axios from 'axios'

const LoginContent = () => {

    const authFunc = async() => {
        const fetch = await axios.get('http://localhost:5000/api/google')
    } 

    return (
        <>
            <div className="divider"></div>
            <div className="section">
                <a href="/auth/google" className='btn red darken-1'>
                    <i className='fab fa-google left'>Login with Google</i>
                </a>
            </div>
        </>
    )
}

export default LoginContent
