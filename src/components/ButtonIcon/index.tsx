import { TouchableOpacityProps } from "react-native";
import { BtnIcon, Container } from "./styles";

type Props = TouchableOpacityProps & {
     
}

export function ButtonIcon({ }: Props){
    return(
        <Container>
            <BtnIcon name="home" type="PRIMARY"/>
        </Container>
    )
}