import { CardWithDetails } from "../../copmponents/CardWithDetails/CardWithDetails"
import { Header } from "../../copmponents/UI/Header/Header"
import { SCCardPage } from "./CardPage.styled"

const CardPage = () => {
    return (
        <SCCardPage>
            <Header/>
            <CardWithDetails/>
        </SCCardPage>
    )
}

export default CardPage