import { compose, withState } from 'recompose';

import HomeCareScreen from './HomeCareView';
const center1 = require('../../../assets/images/center/center1.jpg');
const center2 = require('../../../assets/images/center/center2.jpg');
const center3 = require('../../../assets/images/center/center3.jpg');
const center4 = require('../../../assets/images/center/center4.jpg');
const center5 = require('../../../assets/images/center/center5.jpg');
const center6 = require('../../../assets/images/center/center6.jpg');
const center7 = require('../../../assets/images/center/center7.jpg');
const center8 = require('../../../assets/images/center/center8.jpg');

const listData = [
  {
    id: 1,
    brand: '예은 센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center1,
  },
  {
    id: 2,
    brand: '민강 센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center2,
  },
  {
    id: 3,
    brand: 'A센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center3,
  },
  {
    id: 4,
    brand: 'B센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center4,
  },
  {
    id: 5,
    brand: 'C센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center5,
  },
  {
    id: 6,
    brand: 'D센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center6,
  },
  {
    id: 7,
    brand: 'E센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center7,
  },
  {
    id: 8,
    brand: 'F센터',
    title: '방문요양, 주간보호, 요양원',
    subtitle: '6년~',
    price: '현원/정원(30명/60명)',
    badge: 'A등급',
    badgeColor: 'green',
    image: center8,
  },
  
];

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['방문요양', '방문간호', '방문목욕']),
  withState('data', 'setData', listData),
)(HomeCareScreen);
