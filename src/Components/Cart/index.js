import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Info, Text } from './styles';

const Cart = () => {
  return(
    <Info>
      <Icon name={'basket'} color={'white'} size={30} />
      <Text>Ver carrinho</Text>
      <Text>R$ 15,00</Text>
    </Info>
  );
}

export default Cart;