import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Info } from './styles';

const Menu = () => {
  return(
    <>
    <Container>
      <TouchableOpacity style={{ marginRight: 50, marginLeft: 10}}>
        <Icon name={'home'} size={30} />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginRight: 50}}>
        <Icon name={'book-open'} size={30} />
      </TouchableOpacity>
      
      <TouchableOpacity style={{ marginRight: 50}}>
        <Icon name={'cart'} size={30} />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginRight: 60}}>
        <Icon name={'account'} size={30} />
      </TouchableOpacity>
    </Container>

    <Info>
      <TouchableOpacity style={{ marginRight: 60}}>
        <Icon name={'basket-outline'} size={30} color={'white'} />
      </TouchableOpacity>
    </Info>
    </>
  );
}

export default Menu;
