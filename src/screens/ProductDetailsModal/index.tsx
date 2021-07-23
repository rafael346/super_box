import React, { useContext } from 'react'
import { Modal} from 'react-native'
import { TouchableWithoutFeedback, ModalProps,Text } from 'react-native'
import { ProductContext } from '../../context/Context'

import {ModalOverlay, ModalContainer, ProductName,Button,ButtonText, ProductImage, ProductPrice, ProductDescription} from './styles'

type Props = ModalProps &{
  name: string;
  image: string;
  value: string;
  description: string;
  closeModal: () =>void;
}


export  function ProductDetailsModal({name, image,value,description,closeModal,...rest}: Props) {
  const {handleCreateFavoriteProduct  } = useContext(ProductContext);
  const uri = `${image}`

  function handleFavorite() {
    handleCreateFavoriteProduct({name, image, value ,description})
  }
  return (
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <ModalOverlay>
          <ModalContainer>
            <ProductImage source={{uri}} />
            <ProductName>{name}</ProductName>
            <ProductDescription>{description}</ProductDescription> 
            <ProductPrice>{value}</ProductPrice>
            
            <Button onPress={()=>{
              handleFavorite();
              closeModal();
            }}>
              <ButtonText>Favoritar</ButtonText>
            </Button>
          </ModalContainer>
        </ModalOverlay>

      </TouchableWithoutFeedback>
    </Modal>
  )
}