import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import fakeImage from '../../../assets/Fake-Person.jpg';

import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

export default function PictureInput() {

    const [image, setImage] = useState(null);
    const getImage = async () => {
        let result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    return (
        <View style={styles.container}>
            {image && <Image source={image} style={styles.image} /> ? <Image source={image} style={styles.image} /> : <Image source={fakeImage} style={styles.image} />}
            <Button title="Selectionner une image" onPress={getImage} color="#841584" />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    image: {
        width: 200,
        height: 200,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
});