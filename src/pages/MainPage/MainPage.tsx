import { Header } from "../../copmponents/Header/Header"
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