import { GroupCard } from "@components/Groupcard";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList, Text } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

// import * as Style from "./styles"; -> outra forma de fazer importação

export function Groups() {

    const [groups, setGroups] = useState<string[]>([]);



    return (
        <Container>
            <Header />
            <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={
                    ({ item }) => (
                        <GroupCard title={item} />
                    )
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() =>
                (
                    <ListEmpty message="Que tal cadastrar a primeira?"/>
                )
                }

            />

            <Button title="Criar nova turma" />
        </Container>
    );
}

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: 'black',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text:{
//         color: 'white',
//         fontSize: 32
//     }
// })