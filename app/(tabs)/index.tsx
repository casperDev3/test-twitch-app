import ClassicCard from "@/components/ClassicCard";
import WindCard from "@/components/WindCard";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const router = useRouter();

    const handleHello = () => {
        Alert.alert('Привіт!', 'Ви натиснули кнопку Hello', [
            {
                text: 'Скасувати',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

    const handlePapa = () => {
        Alert.alert("Papa!", "Це друга кнопка");
    }

    return (
        <View className="flex-1 bg-slate-50">
            <ScrollView 
                className="flex-1" 
                showsVerticalScrollIndicator={false}
            >
                {/* Hero Section */}
                <View className="bg-white pb-8">
                    <View className={`px-6 ${Platform.OS === 'ios' ? 'pt-16' : 'pt-12'}`}>
                        {/* Header */}
                        <View className="flex-row justify-between items-center mb-8">
                            <View>
                                <Text className="text-slate-500 text-sm font-medium mb-1">
                                    Доброго дня
                                </Text>
                                <Text className="text-slate-900 text-3xl font-bold">
                                    Головна
                                </Text>
                            </View>
                            <TouchableOpacity
                                className="bg-slate-100 w-12 h-12 rounded-full items-center justify-center border-2 border-slate-200"
                                onPress={() => router.push('/settings')}
                            >
                                <Ionicons name="settings-outline" size={22} color="#334155" />
                            </TouchableOpacity>
                        </View>

                        {/* Stats Cards */}
                        <View className="flex-row gap-3 mb-6">
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
                    </View>
                </View>

                {/* Main Content */}
                <View className="px-6 -mt-4">
                    {/* Quick Actions Card */}
                    <View className="bg-white rounded-3xl p-6 shadow-lg shadow-black/5 mb-6 border border-slate-100">
                        <Text className="text-slate-800 text-xl font-bold mb-4">
                            Швидкі дії
                        </Text>
                        
                        <View className="gap-3">
                            <TouchableOpacity 
                                className="bg-blue-500 px-6 py-4 rounded-2xl flex-row items-center justify-between active:scale-98 shadow-sm shadow-blue-500/20"
                                onPress={handleHello}
                            >
                                <View className="flex-row items-center gap-3">
                                    <View className="bg-white/20 w-10 h-10 rounded-full items-center justify-center border-2 border-white/30">
                                        <Ionicons name="hand-left-outline" size={20} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-white text-base font-bold">
                                            Say Hello
                                        </Text>
                                        <Text className="text-blue-100 text-xs">
                                            Натисніть для привітання
                                        </Text>
                                    </View>
                                </View>
                                <Ionicons name="arrow-forward-outline" size={20} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="bg-purple-500 px-6 py-4 rounded-2xl flex-row items-center justify-between active:scale-98 shadow-sm shadow-purple-500/20"
                                onPress={handlePapa}
                            >
                                <View className="flex-row items-center gap-3">
                                    <View className="bg-white/20 w-10 h-10 rounded-full items-center justify-center border-2 border-white/30">
                                        <Ionicons name="star-outline" size={20} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-white text-base font-bold">
                                            Say Papa
                                        </Text>
                                        <Text className="text-purple-100 text-xs">
                                            Друга дія для тесту
                                        </Text>
                                    </View>
                                </View>
                                <Ionicons name="arrow-forward-outline" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Info Banner */}
                    <View className="bg-amber-50 rounded-2xl p-5 mb-6 border-2 border-amber-200">
                        <View className="flex-row items-start gap-3">
                            <View className="bg-amber-400 w-10 h-10 rounded-full items-center justify-center">
                                <Ionicons name="information-outline" size={20} color="white" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-amber-900 text-base font-bold mb-1">
                                    Приклади стилізації
                                </Text>
                                <Text className="text-amber-800 text-sm leading-5">
                                    Нижче показано два підходи: класичний StyleSheet та сучасний Tailwind CSS
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Section Title */}
                    <Text className="text-slate-800 text-xl font-bold mb-4">
                        Компоненти
                    </Text>
                </View>

                {/* Example Cards */}
                <ClassicCard/>
                <WindCard/>

                {/* Bottom Spacing */}
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
