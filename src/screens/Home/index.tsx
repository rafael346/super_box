import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


import { Container, SearchBox, Title, Input, Button, Content } from './styles'
import {Product} from '../../components/Product';

export  function Home() {
  return (
    <Container>
      <Title>Super Box</Title>
      <SearchBox>
        <Input placeholder="Buscar"/>
        <Button>
          <Ionicons name="search" size={24} color="#494848" />
        </Button>
      </SearchBox>
      <Content>
        <Product />
        <Product />
      </Content>

    </Container>
  )
}
