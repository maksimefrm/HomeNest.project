import { Header } from "../../copmponents/UI/Header/Header"
import { ListCard } from "../../copmponents/ListCard/ListCard"
import { SCMainPage } from "./MainPage.styled"

const MainPage = () => {
    return (
        <SCMainPage>
            <Header/>
            <ListCard/>
        </SCMainPage>
    )
}

export default MainPage