import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationData = [

  {
    name: '검색',
    component: CalendarScreen,
    icon: iconCalendar,
  },
  {
    name: '기록',
    component: GridsScreen,
    icon: iconGrids,
  },
  {
    name: '홈',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: '찜',
    component: ComponentsScreen,
    icon: iconComponents,
  },
  {
    name: '전체보기',
    component: PagesScreen,
    icon: iconPages,
  },
];

export default tabNavigationData;