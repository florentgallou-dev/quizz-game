import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/Pages/Home/Home';
import Game from './Components/Pages/Game/Game';
import Options from './Components/Pages/Options/Options';
import Rank from './Components/Pages/Rank/Rank';

const Routes = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Routes.Navigator>
        <Routes.Screen name="Home" component={Home} options={{title: 'QuizZ Game'}} />
        <Routes.Screen name="Game" component={Game} options={{title: 'Jouer'}} />
        <Routes.Screen name="Options" component={Options} options={{title: 'Options'}}  />
        <Routes.Screen name="Rank" component={Rank} options={{title: 'Classements'}}  />
      </Routes.Navigator>
      {/* Rest of your app code */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}