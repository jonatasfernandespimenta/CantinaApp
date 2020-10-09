import React from 'react';

import Menu from '../../Components/Menu';
import Header from '../../Components/Header';

import { Text } from './styles';

const Home = () => {
  return(
    <>
      <Header height={70}>Nome do aplicativo</Header>
      <Text>Seja bem vindo, Fulano</Text>
      <Menu />
    </>
  );
}

export default Home;
