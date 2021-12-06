import { onAuthStateChanged } from "@firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { getDocument } from "../firebase/services";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const history = useNavigate();

    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    React.useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                getDocument("users", user.uid).then((user) => {
                    const {
                        displayName,
                        email,
                        uid,
                        photoURL,
                        currentTest,
                        role,
                    } = user;
                    setUser({
                        displayName,
                        email,
                        uid,
                        photoURL,
                        currentTest,
                        role,
                    });
                });
                setLoading(false);
                return;
            }
            setLoading(false);
            setUser(null);

            history("/login");
        });
        return () => {
            unsubcribed();
        };
    }, [history]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <div>is Loading</div> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
