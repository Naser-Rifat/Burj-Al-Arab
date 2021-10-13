import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});



    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        Logout,
        googleSignIn
    }

}

export default useFirebase;