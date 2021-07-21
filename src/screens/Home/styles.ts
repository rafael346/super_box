import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  display: flex;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  margin-top: 20px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
`;

export const SearchBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #c2c2c2;
  border-radius:4px;
  width: 300px;
  height: 30px;
`
export const Input = styled.TextInput`
  padding-left: 10px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #cccc;
  height: 100%;
  width: 10%;
`