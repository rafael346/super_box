import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { Product } from '../../components/Product';
import { ProductContext } from '../../context/Context';
import { MaterialIcons } from '@expo/vector-icons'; 

import { Container, Title, DeleteButton } from './styles';

export  function Favorites() {
  const { favoriteList, handleRemoveFavoriteProduct } = useContext(ProductContext);
  return (
    <Container>
      <Title>Favoritos</Title>
      {
        favoriteList.map(product =>(
          <View key={product.id} style={{marginTop: 20}}>
              <Product
                name={product.name}
                image={product.image}
                value={product.value}
                description={product.description}
              />
              <DeleteButton onPress={() =>handleRemoveFavoriteProduct(product.id)}>
              <MaterialIcons name="delete" size={24} color="black" />
              </DeleteButton>
          </View>
        ))
      }
    </Container>
  )
}