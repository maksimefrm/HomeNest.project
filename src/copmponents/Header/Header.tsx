import { UserButton, useUser } from "@clerk/clerk-react"

export const Header = () => {
    const { isSignedIn } = useUser();


    return (
        <header>
            <span className="logo">HomeNest</span>
            {isSignedIn && <UserButton />}        
        </header>
    )
}