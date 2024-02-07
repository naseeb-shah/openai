import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()
    const onStart = () => {
        navigate('/login')
    }
    return(
        <div className="landingpage-container">
            <div className="card">
                <h1>Welcome To Openinapp</h1>
                <p>I'm sure that I'll definitely contribute my skills to Openinapp.</p>
                <button className="login-button" onClick={onStart}>Get Started</button>
            </div>

        </div>
    )
}

export default LandingPage