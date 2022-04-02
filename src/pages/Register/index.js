import { useState } from "react";
import { LayoutComponents } from "../../layout";
import { Link } from "react-router-dom"; 
import logIMG from "../../assets/dev.svg";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Register </span>

                <span className="login-form-title">
                    <img src={logIMG} alt="Developer" />
                </span>


                <div className="wrap-input">
                    <input
                        className={name !== "" ? "has-val input" : "input"}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Name"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Register</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Do you have account? </span>
                    <Link className="txt2" to="/login">
                        Log in.
                    </Link>
                </div>    
            </form>
        </LayoutComponents>
    )
}