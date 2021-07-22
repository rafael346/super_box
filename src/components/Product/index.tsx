import React from 'react'
import {TouchableOpacityProps}  from  'react-native'


import { Container, Content, ImageContent, ProductText,  TextContent } from './styles'

export type ProductProps ={
  id?: string;
  image: string;
  name: string;
  value: string;
}



export function Product({ image, name, value}: ProductProps) {
  const uri = `${image}`
  return (
    <Container>
      <Content>
        <ImageContent source={{uri}} />
        <TextContent>
          <ProductText>{name}</ProductText>
          <ProductText>{value}</ProductText>
        </TextContent>
      </Content>
    </Container>
  )
}
