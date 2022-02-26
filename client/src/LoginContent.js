import React from 'react'

const LoginContent = () => {
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
