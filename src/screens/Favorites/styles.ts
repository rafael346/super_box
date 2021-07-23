import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
`

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 20px;
  
`