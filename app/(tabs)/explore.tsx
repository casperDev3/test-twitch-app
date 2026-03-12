import { Ionicons } from "@expo/vector-icons";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";

const CATEGORIES = [
    { icon: "flame-outline", label: "Популярне", color: "#ef4444", bg: "#fef2f2", border: "#fecaca" },
    { icon: "musical-notes-outline", label: "Музика", color: "#8b5cf6", bg: "#f5f3ff", border: "#ddd6fe" },
    { icon: "game-controller-outline", label: "Ігри", color: "#6366f1", bg: "#eef2ff", border: "#c7d2fe" },
    { icon: "mic-outline", label: "Подкасти", color: "#f59e0b", bg: "#fffbeb", border: "#fde68a" },
    { icon: "tv-outline", label: "Серіали", color: "#10b981", bg: "#ecfdf5", border: "#a7f3d0" },
    { icon: "football-outline", label: "Спорт", color: "#0ea5e9", bg: "#f0f9ff", border: "#bae6fd" },
];

export default function Explore() {
    return (
        <View className="flex-1 bg-slate-50">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className={`px-6 ${Platform.OS === 'ios' ? 'pt-16' : 'pt-12'}`}>
                    {/* Header */}
                    <View className="mb-6">
                        <Text className="text-slate-500 text-sm font-medium mb-1">Досліджуй</Text>
                        <Text className="text-slate-900 text-3xl font-bold">Огляд</Text>
                    </View>

                    {/* Search Bar */}
                    <View className="bg-white flex-row items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 mb-6 shadow-sm">
                        <Ionicons name="search-outline" size={18} color="#94a3b8" />
                        <Text className="text-slate-400 text-base">Пошук...</Text>
                    </View>

                    {/* Categories */}
                    <Text className="text-slate-800 text-xl font-bold mb-4">Категорії</Text>
                    <View className="flex-row flex-wrap gap-3">
                        {CATEGORIES.map((cat) => (
                            <TouchableOpacity
                                key={cat.label}
                                className="rounded-2xl p-4 items-center justify-center"
                                style={{
                                    backgroundColor: cat.bg,
                                    borderWidth: 2,
                                    borderColor: cat.border,
                                    width: "47%",
                                }}
                            >
                                <View
                                    className="w-12 h-12 rounded-full items-center justify-center mb-2"
                                    style={{ backgroundColor: cat.color + "20" }}
                                >
                                    <Ionicons name={cat.icon as any} size={24} color={cat.color} />
                                </View>
                                <Text className="font-bold text-slate-800">{cat.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
