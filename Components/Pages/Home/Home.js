import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import PeiMei from '../../../assets/kill-bill-pai-mei.gif'
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const Icon = createIconSetFromIcoMoon(
    require('../../../assets/fonts/icomoon/selection.json'),
    'icoMoon',
    'icomoon.ttf'
);

export default function Home({ navigation, route: { params } }) {

    const [fontsLoaded] = useFonts({
        icoMoon: require('../../../assets/fonts/icomoon/icomoon.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={PeiMei}
            />
            <Text style={styles.title}>Bienvenue dans QuizZ Game !</Text>
            <Pressable
                style={styles.bouttons}
                onPress={() => navigation.navigate('Game')}
            >
                <Icon name="pacman" style={styles.icon} />
                <Text style={styles.buttonText} >Jouer</Text>
            </Pressable>
            <Pressable
                style={styles.bouttons}
                onPress={() => navigation.navigate('Options')}
            >
                <Icon name="cog" style={styles.icon} />
                <Text style={styles.buttonText} >Options</Text>
            </Pressable>
            <Pressable
                style={styles.bouttons}
                onPress={() => navigation.navigate('Rank')}
            >
                <Icon name="stats-bars" style={styles.icon} />
                <Text style={styles.buttonText} >Classements</Text>
            </Pressable>
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
    bouttons: {
        backgroundColor: '#841584',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        color:"white" 
    },
    buttonText: {
        fontSize: 20,
        color:"white" 
    }
});