import { Text, View } from "react-native";

export default function HomeStats() {
    return (
        <View className="flex-row gap-3 mb-6 px-6">
            <View className="flex-1 bg-indigo-50 rounded-2xl p-4 border-2 border-indigo-100">
                <Text className="text-indigo-600 text-xs font-bold mb-1">ПРОЕКТІВ</Text>
                <Text className="text-indigo-900 text-2xl font-bold">12</Text>
            </View>
            <View className="flex-1 bg-purple-50 rounded-2xl p-4 border-2 border-purple-100">
                <Text className="text-purple-600 text-xs font-bold mb-1">ЗАВДАНЬ</Text>
                <Text className="text-purple-900 text-2xl font-bold">48</Text>
            </View>
            <View className="flex-1 bg-pink-50 rounded-2xl p-4 border-2 border-pink-100">
                <Text className="text-pink-600 text-xs font-bold mb-1">ГОТОВО</Text>
                <Text className="text-pink-900 text-2xl font-bold">32</Text>
            </View>
        </View>
    );
}
