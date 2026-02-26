import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ClassicCard = () => {
    return (
        <>
            <View style={styles.card}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 8
                }}>
                    Привіт, стрім!
                </Text>
                <Text style={styles.description}>Це класичний підхід, до стилізації!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Натисни мене
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 12,
        margin: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    description: {
        fontSize: 16,
        color: "#4b5563",
        marginBottom: 16
    },
    button: {
        backgroundColor: '#3b82f6',
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    }
})

export default ClassicCard;