import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { Product } from '../../components/Product';
import { ProductContext } from '../../context/Context';

export  function Favorites() {
  const { favoriteList, handleRemoveFavoriteProduct } = useContext(ProductContext);
  return (
    <View>
      <Text>Produtos  Favoritos</Text>
      {
        favoriteList.map(product =>(
          <View key={product.id} style={{margin: 20}}>
              <Product
                name={product.name}
                image={product.image}
                value={product.value}
                description={product.description}
              />
              <Button onPress={() =>handleRemoveFavoriteProduct(product.id)} title='remover' />
          </View>
        ))
      }
    </View>
  )
}