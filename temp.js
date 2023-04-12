import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import Harold from './assets/hide-the-pain-harold-harold.gif';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './Pages/Game/Game';
import Options from './Pages/Options/Options';

const Routes = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Routes.Navigator>
          <Routes.Screen name="Jouer" component={Game} options={{title: 'Jouer au jeu'}} />
        </Routes.Navigator>
        {/* Rest of your app code */}
        <StatusBar style="auto" />
      </NavigationContainer>
      <Image
        style={styles.logo}
        source={Harold}
      />
      <Text style={styles.title}>Bienvenue dans QuizZ Game !</Text>
      <Button
        onPress={() => Alert.alert('Votre classement')}
        style={styles.button}
        title="Classement"
        color="#841584"
        accessibilityLabel="Bouton voir le classement"
      />
      <Button
        onPress={() => Alert.alert('Vos options')}
        style={styles.button}
        title="Options"
        color="#841584"
        accessibilityLabel="Bouton des options"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  logo: {
    width: 350,
  },
  title: {
    color: '#20232A',
    fontSize: 25,
  },
  button: {
    color: '#841584',
    fontSize: 25,
  }
});
