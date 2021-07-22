import React, { useState } from 'react'
import { ProductDetailsModal } from '../../screens/ProductDetailsModal';



import { Container, Content, ImageContent, ProductText,  TextContent } from './styles'

export type ProductProps ={
  id?: string;
  image: string;
  name: string;
  description: string;
  value: string;
}



export function Product({ image, name, value, description}: ProductProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const uri = `${image}`

  function handleOpenModal(){
    setIsModalVisible(true);
  }

  function handleCloseModal(){
    setIsModalVisible(false);
  }


  return (
    <Container onPress={handleOpenModal}>
      <Content>
        <ImageContent source={{uri}} />
        <TextContent>
          <ProductText>{name}</ProductText>
          <ProductText>{value}</ProductText>
        </TextContent>
      </Content>
      <ProductDetailsModal image={image} value={value} description={description} closeModal={handleCloseModal}  visible={isModalVisible} name={name}/>
    </Container>
  )
}
