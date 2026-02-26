import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const WindCard = () => {
    return (
        <View className="p-5 bg-white rounded-xl m-4 shadow-lg shadow-black/10">
            <Text className="text-2xl font-bold text-gray-800 mb-2">
                Привіт, стрім!
            </Text>
            <Text className="text-base text-gray-600 mb-4">
                Це tailwind підхід, до стилізації!
            </Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-lg items-center">
                <Text className="text-white font-semibold text-base">
                    Натисни мене
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default WindCard;
