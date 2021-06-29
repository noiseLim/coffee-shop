import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import WithShopService from '../hoc';
import {
  productLoaded,
  productRequested,
  productError,
} from '../CoffeeApp/coffeeAppSlice';

import { Wrapper, Input, Container } from './styled';

const SearchPanel = ({ ShopService }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productRequested());
    ShopService.getProductItems(searchValue)
      .then((res) => dispatch(productLoaded(res)))
      .catch(() => dispatch(productError()));
  }, [searchValue]);

  return (
    <Wrapper>
      <Container>
        <p style={{ margin: '0 19px' }}>Looking for</p>
        <Input
          name='Looking for'
          placeholder='start typing here...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Container>
      <Container>
        <p style={{ margin: '0 35px' }}>Or filter</p>
        <button
          onClick={() => setSearchValue('Brazil')}
          className='button__left button'
        >
          Brazil
        </button>
        <button onClick={() => setSearchValue('Kenya')} className='button'>
          Kenya
        </button>
        <button
          onClick={() => setSearchValue('Columbia')}
          className='button__right button'
        >
          Columbia
        </button>
      </Container>
    </Wrapper>
  );
};

export default WithShopService()(SearchPanel);
