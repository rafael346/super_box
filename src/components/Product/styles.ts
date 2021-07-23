import styled from 'styled-components/native';



export const Container = styled.TouchableOpacity`
  background-color: aqua;
  display: flex;
  width: 100%;
  height:100px;
  margin-bottom:  20px;
  border-radius: 4px;

`

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-bottom: 15px;
`;

export const ImageContent = styled.Image`
  width: 50px;
  height: 100%;
`;
export const TextContent = styled.View`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  
`;

export const ProductText = styled.Text`
  font-size: 14px;
  font-weight: bold;

`;

