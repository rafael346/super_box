import React from 'react'

import Alface  from '../../assets/alface.png'
import { Container, ProductCategorie, Content, ImageContent, ProductText,  TextContent } from './styles'

export function Product() {
  return (
    <Container>
      <ProductCategorie>Hortifrúti</ProductCategorie>
      <Content>
        <ImageContent source={Alface} />
        <TextContent>
          <ProductText>Alface</ProductText>
          <ProductText>R$ 3,00</ProductText>
        </TextContent>
      </Content>
    </Container>
  )
}
