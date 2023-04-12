import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const Icon = createIconSetFromIcoMoon(
    require('../../../assets/fonts/icomoon/selection.json'),
    'icoMoon',
    'icomoon.ttf'
);

export default function Rank({ navigation, route: { params } }) {

    const [fontsLoaded] = useFonts({
        icoMoon: require('../../../assets/fonts/icomoon/icomoon.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page Classement {params?.param1 || ""}</Text>
            <View style={styles.divNav}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 50,
    },
    divNav: {
        display: 'flex',
        flexDirection: 'row',
        gap:5
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