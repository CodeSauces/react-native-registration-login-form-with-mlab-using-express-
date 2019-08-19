import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
const MainNavigator = createStackNavigator({
  Registration: RegistrationScreen,
  Login: LoginScreen,
  Profile: ProfileScreen
},
  {
    initialRouteName: 'Login',
  }
);

const App = createAppContainer(MainNavigator);

export default App;