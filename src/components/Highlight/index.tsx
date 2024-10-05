import { Container, Title, Subtitle } from './styles'

// Interface para definir tipagem de 
// informações que se espera receber de forma dinâmica
type Props = {
    title: string;
    subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    )
}