import SideBar from "@/components/SideBar";
import { useSession, signIn } from "next-auth/react"

export default function LayoutScreen({children}) {

    const { data: session } = useSession();

    if(!session) {
        return (
            <div className='bg-blue-700 w-screen h-screen flex items-center justify-center'>
                <button 
                    className="bg-white py-3.5 px-7 rounded-lg"
                    onClick={() => signIn("google")}
                >
                    Login with Google
                </button>
            </div>
        )
    }
    return (
        <div className="bg-blue-900 min-h-screen flex gap-0">
            <SideBar/>
            <div className="bg-white flex-grow my-3 rounded-tl-lg rounded-bl-lg pb-3 px-5">
                {children}
            </div>
        </div>
    )
}
