import {
  CoffeeItemPage,
  CoffeePage,
  GoodsPage,
  MainPage,
} from './components/pages';
import {
  COFFEE_ITEM_ROUTE,
  COFFEE_ROUTE,
  GOODS_ROUTE,
  MAIN_ROUTE,
} from './utils/consts';

export const routes = [
  {
    path: COFFEE_ITEM_ROUTE + '/:id',
    Component: CoffeeItemPage,
  },
  {
    path: COFFEE_ROUTE,
    Component: CoffeePage,
  },
  {
    path: GOODS_ROUTE,
    Component: GoodsPage,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];
