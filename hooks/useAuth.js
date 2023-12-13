import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';


export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(FIREBASE_AUTH, user => {
            console.log("got user: ", user);
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsub;
    }, [])
    
    return { user };
}