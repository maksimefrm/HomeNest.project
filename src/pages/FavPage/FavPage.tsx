import { Favorites } from "../../copmponents/Favorites/Favorites"
import { Header } from "../../copmponents/UI/Header/Header"
import { SCMainPage } from "../MainPage/MainPage.styled"

const FavPage = () => {
    return (
        <SCMainPage>
            <Header/>
            <Favorites/>
        </SCMainPage>
    )
}

export default FavPage