import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


export type ButtotnIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtotnIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;
    
    margin-left: 12px;
`;

export const BtnIcon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
