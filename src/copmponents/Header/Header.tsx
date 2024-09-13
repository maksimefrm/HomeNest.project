import { UserButton, useUser } from "@clerk/clerk-react"

export const Header = () => {
    const { isSignedIn } = useUser();


    return (
        <header>
            <span className="logo">HomeNest</span>
            <div className="pages">
                <a className="pageItem">Главная</a>
                <a className="pageItem">Избранное</a>
                <a className="pageItem">Профиль</a>
            </div>
            {isSignedIn && <UserButton />}        
        </header>
    )
}