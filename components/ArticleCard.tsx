import Badge from "@/components/Badge";
import { Article } from "@/utils/newsStore";
import { useTheme } from "@/utils/themeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
    item: Article;
    index: number;
};

export default function ArticleCard({ item, index }: Props) {
    const router = useRouter();
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            className="mx-4 mb-4 rounded-3xl overflow-hidden shadow-sm shadow-black/5 border active:opacity-80"
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
            onPress={() => router.push(`/news/${index}`)}
        >
            <Image
                source={{ uri: `https://picsum.photos/seed/${item.id}/600/400` }}
                className="w-full h-48"
                resizeMode="cover"
            />
            <View className="p-4">
                <Text
                    className="text-base font-bold leading-5 mb-2 capitalize"
                    style={{ color: colors.text }}
                    numberOfLines={2}
                >
                    {item.title}
                </Text>
                <Text
                    className="text-sm leading-5 mb-3"
                    style={{ color: colors.textSecondary }}
                    numberOfLines={2}
                >
                    {item.body}
                </Text>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-1">
                        <Ionicons name="person-outline" size={14} color={colors.textMuted} />
                        <Text className="text-xs" style={{ color: colors.textMuted }}>
                            User #{item.userId}
                        </Text>
                    </View>
                    <Badge
                        label="Читати →"
                        bgColor={colors.accent + "18"}
                        textColor={colors.accent}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}
