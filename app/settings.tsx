import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Platform, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-slate-50">
            <View className={`px-6 ${Platform.OS === 'ios' ? 'pt-16' : 'pt-12'}`}>
                {/* Header */}
                <View className="flex-row items-center gap-4 mb-8">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="bg-white w-10 h-10 rounded-full items-center justify-center border border-slate-200 shadow-sm"
                    >
                        <Ionicons name="arrow-back-outline" size={20} color="#475569" />
                    </TouchableOpacity>
                    <Text className="text-slate-900 text-3xl font-bold">Налаштування</Text>
                </View>

                {/* Settings Items */}
                <View className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <SettingRow icon="person-outline" label="Профіль" />
                    <SettingRow icon="notifications-outline" label="Сповіщення" />
                    <SettingRow icon="lock-closed-outline" label="Конфіденційність" />
                    <SettingRow icon="color-palette-outline" label="Вигляд" />
                    <SettingRow icon="information-circle-outline" label="Про додаток" last />
                </View>
            </View>
        </View>
    );
}

function SettingRow({ icon, label, last = false }: { icon: any; label: string; last?: boolean }) {
    return (
        <TouchableOpacity
            className={`flex-row items-center gap-4 px-5 py-4 ${!last ? 'border-b border-slate-100' : ''}`}
        >
            <View className="bg-slate-100 w-9 h-9 rounded-full items-center justify-center">
                <Ionicons name={icon} size={18} color="#475569" />
            </View>
            <Text className="flex-1 text-slate-800 text-base font-medium">{label}</Text>
            <Ionicons name="chevron-forward-outline" size={16} color="#94a3b8" />
        </TouchableOpacity>
    );
}
