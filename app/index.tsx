import {Text, View, StyleSheet, TouchableOpacity, Button, Alert, Platform} from "react-native";


export default function Index() {
    const handleHello = () => {
        // Alert.alert("Hello!");
        Alert.alert('Hello!', 'lorem ipsum', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

    const handlePapa = () => {
        Alert.alert("Papa!");
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>

            <TouchableOpacity style={styles.buttonHello} onPress={handleHello}>
                <Text style={styles.buttonHelloText}>Say Hello!</Text>
            </TouchableOpacity>

            <Button
                onPress={handlePapa}
                color="#841584"
                title={"Say Papa!"}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#906262",

    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 10,
        marginTop: Platform.OS === 'ios' ? 70 : 0,
    },
    buttonHello: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#1672a2",
        borderRadius: 10,
    },
    buttonHelloText: {
        color: "#FFF",
    },
    buttonPapa: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#FFF",
    }

})
