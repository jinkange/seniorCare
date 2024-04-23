import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';

const iconSearch = require('../../../assets/images/tabbar/search.png');
const iconHistory = require('../../../assets/images/tabbar/history.png');
const iconHome = require('../../../assets/images/drawer/home2.png');
const iconFavorite = require('../../../assets/images/tabbar/favorite.png');
const iconHeadline = require('../../../assets/images/tabbar/headline.png');

const tabNavigationData = [

  {
    name: '검색',
    component: CalendarScreen,
    icon: iconSearch,
  },
  {
    name: '기록',
    component: GridsScreen,
    icon: iconHistory,
  },
  {
    name: '홈',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: '찜',
    component: ComponentsScreen,
    icon: iconFavorite,
  },
  {
    name: '전체보기',
    component: PagesScreen,
    icon: iconHeadline,
  },
];

export default tabNavigationData;