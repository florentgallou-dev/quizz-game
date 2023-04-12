import { StyleSheet, Text, View, TextInput } from 'react-native';

export default FormInput = ({ label, value, placeholder, onChangeText }) => {
    return (
        <View style={styles.field}>
            <View  style={styles.inputLine}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType="default"
                    placeholder={placeholder}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        width: '100%'
    },
    inputLine: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    },
    label: {
        fontSize: 16
    },
    textInput: {
        fontSize: 20,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F1F1F1',
        width: '100%'
    },
})