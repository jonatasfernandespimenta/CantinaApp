import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Navbar, Info, BlackContainer, RedContainer, YellowContainer } from './styles';

const Menu = () => {
  return(
    <>
    <Navbar>
      <TouchableOpacity>
        <Icon name={'home'} size={30}  color={'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name={'book-open'} size={30} color={'gray'} />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Icon name={'cart'} size={30}  color={'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name={'account'} size={30} color={'gray'} />
      </TouchableOpacity>
    </Navbar>

    <Info>
      <BlackContainer/>
      <RedContainer/>
      <YellowContainer/>
    </Info>
    </>
  );
}

export default Menu;
