import React from 'react';
import { useSelector } from 'react-redux';

import CoffeeCardItem from '../CoffeeCardItem/CoffeeCardItem';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { Wrapper, Container } from './styled';

const ProductList = () => {
  const productItems = useSelector((state) => state.coffeeApp.products);
  const loading = useSelector((state) => state.coffeeApp.loading);
  const error = useSelector((state) => state.coffeeApp.error);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  const items = productItems.map((productItem) => {
    return <CoffeeCardItem key={productItem.id} productItem={productItem} />;
  });
  const View = ({ items }) => {
    return items;
  };
  return (
    <Container>
      <Wrapper className='coffee__card-wrapper'>
        <View items={items} />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
