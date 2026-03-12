import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

const CATEGORIES = [
    { icon: "flame-outline", label: "Популярне", color: "#ef4444" },
    { icon: "musical-notes-outline", label: "Музика", color: "#8b5cf6" },
    { icon: "game-controller-outline", label: "Ігри", color: "#6366f1" },
    { icon: "mic-outline", label: "Подкасти", color: "#f59e0b" },
    { icon: "tv-outline", label: "Серіали", color: "#10b981" },
    { icon: "football-outline", label: "Спорт", color: "#0ea5e9" },
];

export default function CategoriesGrid() {
    const { colors } = useTheme();

    return (
        <>
            <Text className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                Категорії
            </Text>
            <View className="flex-row flex-wrap gap-3">
                {CATEGORIES.map((cat) => (
                    <TouchableOpacity
                        key={cat.label}
                        className="rounded-2xl p-4 items-center justify-center"
                        style={{
                            backgroundColor: cat.color + "18",
                            borderWidth: 2,
                            borderColor: cat.color + "40",
                            width: "47%",
                        }}
                    >
                        <View
                            className="w-12 h-12 rounded-full items-center justify-center mb-2"
                            style={{ backgroundColor: cat.color + "25" }}
                        >
                            <Ionicons name={cat.icon as any} size={24} color={cat.color} />
                        </View>
                        <Text className="font-bold" style={{ color: colors.text }}>
                            {cat.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
}
