import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  width: 130px;
  height:100px;
`
export const ProductCategorie = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ImageContent = styled.Image`
  width: 50px;
  height: 100%;
`;
export const TextContent = styled.View`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ProductText = styled.Text`
  font-size: 14px;

`;

