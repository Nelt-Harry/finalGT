import {
    FacebookAuthProvider,
    getAdditionalUserInfo,
    signInWithPopup,
} from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { addDocument } from "../firebase/services";

export const Login = () => {
    const provider = new FacebookAuthProvider();
    const navigate = useNavigate();

    const handleFbLogin = async () => {
        const data = await signInWithPopup(auth, provider);

        if (getAdditionalUserInfo(data).isNewUser) {
            addDocument(
                "users",
                {
                    displayName: data.user.displayName,
                    email: data.user.email,
                    photoURL: data.user.photoURL,
                    uid: data.user.uid,
                    role: "admin",
                },
                data.user.uid
            );
        }
        console.log(data.user);
        navigate("/");
    };

    const togglePassword = () => {
        const passwordInputElement =
            document.getElementsByClassName("auth-form__input")[1];
        passwordInputElement.type === "text"
            ? (passwordInputElement.type = "password")
            : (passwordInputElement.type = "text");
    };

    return (
        <div className="login">
            <div className="auth-form">
                <div className="auth-form__content">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Sign in</h3>
                    </div>
                    <div className="auth-form__form">
                        <div className="auth-form__form__login">
                            <i
                                className="fab fa-facebook"
                                onClick={() => handleFbLogin()}
                            ></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                        <div className="auth__form-text">
                            <div className="line" />
                            <span>or uses your account </span>
                            <div className="line" />
                        </div>
                    </div>
                    <form className="auth-form__form">
                        <input
                            type="text"
                            placeholder="Email"
                            className="auth-form__input"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Your email"
                            required
                        />
                        <div className="show-password">
                            <input
                                type="password"
                                placeholder="Password"
                                className="auth-form__input"
                                pattern="[a-z][A-Z][0-9]{1,15}"
                                title="Your password"
                                required
                            />
                            <div
                                className="show-password__icon"
                                onClick={() => togglePassword()}
                            >
                                <i className="far fa-eye-slash eye-slash" />
                            </div>
                        </div>
                        <div className="auth-form__form__signin">
                            <div className="btn btn-form">Sign in</div>
                        </div>
                        <div className="forgot-password">
                            <div>Forget password</div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="auth-form">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Hello, Friend!</h3>
                </div>
                <div className="auth-from__txt">
                    Enter your personal details and start journey with us
                </div>
                <div className="auth-form__form__signin">
                    <div className="btn btn-form">Sign up</div>
                </div>
            </div>
        </div>
    );
};
