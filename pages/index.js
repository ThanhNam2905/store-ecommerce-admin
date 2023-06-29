import LayoutScreen from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {

    const { data: session } = useSession();

    return (
        <>
            <LayoutScreen>
                <div className="py-2.5 border-b flex items-center justify-between">
                    <h2 className="text-lg text-blue-900">Welcome, <b>Dashboard Admin</b></h2>
                    <div className="flex items-center gap-2 cursor-pointer bg-gray-200 pr-2.5  rounded-tl-3xl rounded-bl-3xl !rounded-tr-lg !rounded-br-lg">
                        <img 
                            src={session?.user?.image} 
                            alt={session?.user?.image} 
                            className="w-11 h-11 rounded-full"
                        />
                        <p>{session?.user?.name}</p>
                    </div>
                </div>
                
            </LayoutScreen>
        </>
    )    
}
