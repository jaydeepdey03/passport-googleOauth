import './login.css'
import LoginContent from './LoginContent'

const Login = () => {
    return (
        <div className="container login-container">
            <div className="card">
                <div className="card-content">
                    <h1>Login</h1>
                </div>
                <LoginContent />
            </div>
        </div>
    )
}

export default Login
