import React, { useContext }  from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


import { Container, SearchBox, Title, Input, Button, Content, ProductCategories, CategoryView, CategoryName } from './styles'
import {Product} from '../../components/Product';
import { ProductContext } from '../../context/Context';






export  function Home() {
  const { dataProducts } = useContext(ProductContext);
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
                  description={product.description}
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
