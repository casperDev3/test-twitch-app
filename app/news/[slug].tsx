import Badge from "@/components/Badge";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { getArticle } from "@/utils/newsStore";
import { useTheme } from "../../utils/themeContext";

export default function NewsDetailScreen() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    const router = useRouter();
    const { colors } = useTheme();
    const article = getArticle(slug);

    if (!article) {
        return (
            <View
                className="flex-1 items-center justify-center px-6"
                style={{ backgroundColor: colors.card }}
            >
                <Ionicons name="newspaper-outline" size={48} color="#a5b4fc" />
                <Text
                    className="text-lg font-bold mt-4 mb-2"
                    style={{ color: colors.text }}
                >
                    Новину не знайдено
                </Text>
                <Text
                    className="text-sm text-center mb-6"
                    style={{ color: colors.textMuted }}
                >
                    Поверніться та відкрийте новину знову
                </Text>
                <TouchableOpacity
                    className="bg-indigo-500 px-6 py-3 rounded-2xl"
                    onPress={() => router.back()}
                >
                    <Text className="text-white font-bold">Назад</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className="flex-1" style={{ backgroundColor: colors.card }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Hero Image */}
                <Image
                    source={{ uri: `https://picsum.photos/seed/${article.id}/800/500` }}
                    className="w-full h-64"
                    resizeMode="cover"
                />

                <View className="px-6 py-6">
                    {/* Badges */}
                    <View className="flex-row items-center gap-2 mb-4">
                        <Badge
                            label="JSONPlaceholder"
                            bgColor={colors.accent + "20"}
                            textColor={colors.accent}
                            bold
                        />
                        <Badge
                            label={`Post #${article.id}`}
                            bgColor={colors.iconBg}
                            textColor={colors.textSecondary}
                        />
                    </View>

                    {/* Title */}
                    <Text
                        className="text-2xl font-bold leading-8 mb-4 capitalize"
                        style={{ color: colors.text }}
                    >
                        {article.title}
                    </Text>

                    <View
                        className="h-px mb-5"
                        style={{ backgroundColor: colors.border }}
                    />

                    {/* Body */}
                    <Text
                        className="text-base leading-7"
                        style={{ color: colors.textSecondary }}
                    >
                        {article.body}
                    </Text>

                    {/* Author */}
                    <View
                        className="flex-row items-center gap-2 mt-6 pt-5 border-t"
                        style={{ borderTopColor: colors.border }}
                    >
                        <Ionicons
                            name="person-circle-outline"
                            size={20}
                            color={colors.textMuted}
                        />
                        <Text className="text-sm" style={{ color: colors.textMuted }}>
                            User #{article.userId}
                        </Text>
                    </View>
                </View>

                <View className="h-10" />
            </ScrollView>

            {/* Floating Back Button */}
            <TouchableOpacity
                className={`absolute left-4 w-10 h-10 rounded-full items-center justify-center shadow-md shadow-black/10 ${
                    Platform.OS === "ios" ? "top-14" : "top-10"
                }`}
                style={{ backgroundColor: colors.card + "e8" }}
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
        </View>
    );
}
