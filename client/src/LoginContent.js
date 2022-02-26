import { useNavigate } from 'react-router-dom'

const LoginContent = () => {
    const navigate = useNavigate()

    const authFunc = () => {
        navigate('http://localhost:5000/api/google')
    }

    return (
        <>
            <div className="divider"></div>
            <div className="section">
                <button onClick={authFunc} className='btn red darken-1'>
                    <i className='fab fa-google left'>Login with Google</i>
                </button>
            </div>
        </>
    )
}

export default LoginContent
