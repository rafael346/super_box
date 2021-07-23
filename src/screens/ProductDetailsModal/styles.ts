import styled from 'styled-components/native';


export const ModalOverlay = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background-color: #69c5e9;
`;
export const ModalContainer = styled.View``;

export const ProductImage = styled.Image`
  margin-top: 20px;
  width: 200px;
  height: 200px;
`

export const ProductName = styled.Text`
  font-size: 30px;
  margin-left: 10px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 17px;
  font-size: 20px;
  font-weight: bold;
  color: yellow;
`;

export const ProductDescription = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #000000;
  
` 

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  border-radius: 4px;
  display: flex;
  height: 40px;
  width: 150px;
  background-color: #FF0000 ;

`

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`