import React, { useContext } from 'react'
import { Modal, Button} from 'react-native'
import { TouchableWithoutFeedback, ModalProps } from 'react-native'
import { ProductContext } from '../../context/Context'

import {ModalOverlay, ModalContainer, ProductName, ProductImage, ProductPrice, ProductDescription} from './styles'

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
            <ProductName>{name}</ProductName>
            <ProductImage source={{uri}} />
            <ProductPrice>{value}</ProductPrice>
            <ProductDescription>{description}</ProductDescription>
            <Button title='favoritar' onPress={()=>{
              handleFavorite();
              closeModal();
            }} />
          </ModalContainer>
        </ModalOverlay>

      </TouchableWithoutFeedback>
    </Modal>
  )
}