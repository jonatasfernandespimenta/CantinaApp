import React from 'react';

import Menu from '../../Components/Menu';
import Header from '../../Components/Header';

import { Container, Text } from './styles';

const Home = () => {

  const image = {uri: 'https://www.cakolanches.com.br/novo/wp-content/uploads/2020/02/banner_site_mobile.jpg'};

  return(
    <Container source={image}>
      <Header height={60}>Nome do aplicativo</Header>
      <Text>Seja bem vindo, Fulano</Text>
      <Menu />
    </Container>
  );
}

export default Home;
