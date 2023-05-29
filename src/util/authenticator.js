import { redirect } from "react-router-dom";

export function authenticator(){
    const token = localStorage.getItem('token');
    if(!token)
        return redirect("/");
    return null;
}

export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}
