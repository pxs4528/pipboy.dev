import { options } from "../api/auth/[...nextauth]/options";
import {getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";

export default async function admin () {
    const session = await getServerSession(options);
    console.log(session)
    if(!session){
        redirect("/api/auth/signin")
    }
    if (session.user?.name === "Parth" && session.user?.email === "parthsharma.cs@gmail.com"){
        return (
            <div>
                <h1>admin page</h1>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>not an admin</h1>
            </div>
        )
    }   

}