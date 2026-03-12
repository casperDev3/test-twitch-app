import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

const WindCard = () => {
    const { colors } = useTheme();

    return (
        <View
            className="p-5 rounded-xl m-4 shadow-lg shadow-black/10"
            style={{ backgroundColor: colors.card }}
        >
            <Text className="text-2xl font-bold mb-2" style={{ color: colors.text }}>
                Привіт, стрім!
            </Text>
            <Text className="text-base mb-4" style={{ color: colors.textSecondary }}>
                Це tailwind підхід, до стилізації!
            </Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-lg items-center">
                <Text className="text-white font-semibold text-base">Натисни мене</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WindCard;
