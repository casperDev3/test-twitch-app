import { Ionicons } from "@expo/vector-icons";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MENU_ITEMS = [
    { icon: "bookmark-outline", label: "Збережене", color: "#6366f1" },
    { icon: "heart-outline", label: "Уподобання", color: "#ef4444" },
    { icon: "notifications-outline", label: "Сповіщення", color: "#f59e0b" },
    { icon: "shield-checkmark-outline", label: "Конфіденційність", color: "#10b981" },
    { icon: "help-circle-outline", label: "Допомога", color: "#0ea5e9" },
    { icon: "log-out-outline", label: "Вийти", color: "#94a3b8" },
];

export default function Profile() {
    return (
        <View className="flex-1 bg-slate-50">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className={`${Platform.OS === 'ios' ? 'pt-16' : 'pt-12'}`}>
                    {/* Header */}
                    <View className="px-6 mb-6">
                        <Text className="text-slate-500 text-sm font-medium mb-1">Мій акаунт</Text>
                        <Text className="text-slate-900 text-3xl font-bold">Профіль</Text>
                    </View>

                    {/* Avatar Block */}
                    <View className="items-center mb-8 px-6">
                        <View className="bg-indigo-100 w-24 h-24 rounded-full items-center justify-center border-4 border-indigo-200 mb-4">
                            <Ionicons name="person-outline" size={44} color="#6366f1" />
                        </View>
                        <Text className="text-slate-900 text-2xl font-bold">Користувач</Text>
                        <Text className="text-slate-500 text-sm mt-1">user@example.com</Text>

                        <TouchableOpacity className="mt-4 bg-indigo-500 px-6 py-2 rounded-full flex-row items-center gap-2">
                            <Ionicons name="pencil-outline" size={14} color="white" />
                            <Text className="text-white text-sm font-semibold">Редагувати</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Stats */}
                    <View className="flex-row mx-6 mb-6 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <View className="flex-1 items-center py-4 border-r border-slate-100">
                            <Text className="text-indigo-600 text-2xl font-bold">12</Text>
                            <Text className="text-slate-500 text-xs mt-1">Проектів</Text>
                        </View>
                        <View className="flex-1 items-center py-4 border-r border-slate-100">
                            <Text className="text-purple-600 text-2xl font-bold">48</Text>
                            <Text className="text-slate-500 text-xs mt-1">Завдань</Text>
                        </View>
                        <View className="flex-1 items-center py-4">
                            <Text className="text-pink-600 text-2xl font-bold">32</Text>
                            <Text className="text-slate-500 text-xs mt-1">Готово</Text>
                        </View>
                    </View>

                    {/* Menu */}
                    <View className="mx-6 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        {MENU_ITEMS.map((item, index) => (
                            <TouchableOpacity
                                key={item.label}
                                className={`flex-row items-center gap-4 px-5 py-4 ${index < MENU_ITEMS.length - 1 ? 'border-b border-slate-100' : ''}`}
                            >
                                <View
                                    className="w-9 h-9 rounded-full items-center justify-center"
                                    style={{ backgroundColor: item.color + "15" }}
                                >
                                    <Ionicons name={item.icon as any} size={18} color={item.color} />
                                </View>
                                <Text className="flex-1 text-slate-800 text-base font-medium">{item.label}</Text>
                                <Ionicons name="chevron-forward-outline" size={16} color="#cbd5e1" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
