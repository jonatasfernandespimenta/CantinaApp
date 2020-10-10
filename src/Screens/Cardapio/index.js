import React from 'react';

import Menu from '../../Components/Menu';
import Header from '../../Components/Header';

import Input from '../../Components/Input';

import { Container, Items, ItemContainer, Scroll } from './styles.js';

const Cardapio = () => {

  return(
    <>
      <Header background={'fa695f'} color={'#ffff'} height={60}>Cardapio</Header>

      <Container>
        <Input icon={'magnify'} size={15} placeholder={'Está com fome de que?...'} />
      </Container>

      <Scroll>
      <Items>
        <ItemContainer/><ItemContainer/><ItemContainer/>
        <ItemContainer/><ItemContainer/><ItemContainer/>
        <ItemContainer/><ItemContainer/><ItemContainer/>
        <ItemContainer/><ItemContainer/><ItemContainer/>
        <ItemContainer/><ItemContainer/><ItemContainer/>
      </Items>
      </Scroll>

      <Menu />
    </>
  );
}

export default Cardapio;
