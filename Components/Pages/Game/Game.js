import { StyleSheet, Text, View, Pressable, Button, Alert, Image, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import ImagePicker from './PictureInput';
import FormInput from './FormInput';

const Icon = createIconSetFromIcoMoon(
    require('../../../assets/fonts/icomoon/selection.json'),
    'icoMoon',
    'icomoon.ttf'
);

export default function Game({ navigation, route: { params } }) {

    const [fontsLoaded] = useFonts({
        icoMoon: require('../../../assets/fonts/icomoon/icomoon.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

return (
    <View style={styles.container}>
        <Text style={styles.title}>QuizZ Game {params?.param1 || ""}</Text>
        <View style={styles.divForm}>
            <ImagePicker />
            <FormInput placeholder="Votre prénom"></FormInput>
            <Button
                onPress={() => Alert.alert(
                    'Validation',
                    'Vos données sont enregistrées.',
                    [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ]
                    )}
                title="Valider"
                color="#841584"
                accessibilityLabel="Bouton voir le classement"
            />
        </View>
        <View style={styles.divNav}>
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
    },
    divForm: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    divNav: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
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
        color: "white"
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    }
});