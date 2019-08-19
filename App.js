import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
const MainNavigator = createStackNavigator({
  Registration:  RegistrationScreen,
  Login:LoginScreen,


});

const App = createAppContainer(MainNavigator);

export default App;