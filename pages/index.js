import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

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
        <div>
            Logged in {session.user.email}
        </div>
    )
}
