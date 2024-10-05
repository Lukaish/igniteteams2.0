import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {  
    title: string;

}

// Com os "...rest", eu estou falando que qualquer outra propriedade que eu não deixei explícita
// eu a passarei para o meu "Container"
export function GroupCard({title, ...rest}: Props){
    return(
        <Container {...rest}>
            <Icon/>
            <Title>{title}</Title>
        </Container>
    )
}