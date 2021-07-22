import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


import { Container, SearchBox, Title, Input, Button, Content, ProductCategories, CategoryView, CategoryName } from './styles'
import {Product} from '../../components/Product';
import { FlatList, ScrollView } from 'react-native';



const dataProducts = [
    {
      categoryId: '1',
      categoryName: 'Hortifrúti',
      product: [
        {
          id: '10',
          name: 'Alface',
          image: 'https://superprix.vteximg.com.br/arquivos/ids/178850-600-600/Alface-Crespa-Verde-Un-396.png?v=636934628540170000',
          value: 'R$ 2,00'
        },
        {
          id: '11',
          name: 'Cebola',
          image: 'https://trimais.vteximg.com.br/arquivos/ids/1022837-1000-1000/foto_original.jpg?v=637576370393570000',
          value: 'R$ 2,00'
        },
      ],
    },
    {
      categoryId: '2',
      categoryName: 'Alimento',
      product: [
        {
          id: '20',
          name: 'Arroz',
          image: 'https://static.clubeextra.com.br/img/uploads/1/1/574001.png',
          value: 'R$5,00'
        },
        {
          id: '21',
          name: 'Feijão',
          image: 'https://www.paodeacucar.com/img/uploads/1/385/607385.png',
          value: 'R$9,00'
        },
        {
          id: '22',
          name: 'Feijão Preto',
          image: 'https://superprix.vteximg.com.br/arquivos/ids/173596-600-600/Feijao-Preto-Super-Maximo-1kg.png?v=636156035791730000',
          value: 'R$10,00'
        },
      ],

    },
    {
      categoryId: '3',
      categoryName: 'Laticinios',
      product: [
        {
          id: '10',
          name: 'Leite',
          image: 'https://www.embare.com.br/wp-content/uploads/2013/06/leite-po-instantaneo-pouch-1kg.png',
          value: 'R$: 3,50 '
        },
      ],

    },
    {
      categoryId: '4',
      categoryName: 'Limpeza',
      product: [
        {
          id: '40',
          name: 'Detergente',
          image: 'https://static.paodeacucar.com/img/uploads/1/774/11766774.png',
          value: 'R$: 2,50'
        },
      ],

    },
];



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
      {
        dataProducts.map(category => (
          <View key={category.categoryId}>
          <CategoryName>{category.categoryName}</CategoryName>
          <CategoryView  horizontal>
            {category.product.map(product => (
              <ProductCategories key={product.id}>
                <Product 
                  name={product.name}
                  image={product.image}
                  value={product.value}
                />
              </ProductCategories>
            ))}
          </CategoryView>
          </View> 
        ))
        
      }
      </Content>

    </Container>
  )
}
