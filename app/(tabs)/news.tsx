import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Article, setArticles } from "@/utils/newsStore";
import { useTheme } from "../../utils/themeContext";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function NewsScreen() {
    const router = useRouter();
    const { colors } = useTheme();
    const [articles, setLocalArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API_URL);
            const data: Article[] = await response.json();
            setLocalArticles(data);
            setArticles(data);
        } catch {
            setError("Помилка мережі");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View
                className="flex-1 items-center justify-center"
                style={{ backgroundColor: colors.bg }}
            >
                <ActivityIndicator size="large" color={colors.accent} />
            </View>
        );
    }

    if (error) {
        return (
            <View
                className="flex-1 items-center justify-center px-6"
                style={{ backgroundColor: colors.bg }}
            >
                <Ionicons name="alert-circle-outline" size={48} color="#f43f5e" />
                <Text
                    className="text-lg font-bold mt-3 mb-2"
                    style={{ color: colors.text }}
                >
                    Помилка
                </Text>
                <Text
                    className="text-center"
                    style={{ color: colors.textSecondary }}
                >
                    {error}
                </Text>
                <TouchableOpacity
                    className="mt-4 bg-indigo-500 px-6 py-3 rounded-2xl"
                    onPress={fetchNews}
                >
                    <Text className="text-white font-bold">Спробувати знову</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className="flex-1" style={{ backgroundColor: colors.bg }}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View
                        className={`px-6 pb-4 ${Platform.OS === "ios" ? "pt-16" : "pt-12"}`}
                        style={{ backgroundColor: colors.card }}
                    >
                        <Text
                            className="text-sm font-medium mb-1"
                            style={{ color: colors.textMuted }}
                        >
                            Актуальне
                        </Text>
                        <Text className="text-3xl font-bold" style={{ color: colors.text }}>
                            Новини
                        </Text>
                    </View>
                }
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        className="mx-4 mb-4 rounded-3xl overflow-hidden shadow-sm shadow-black/5 border active:opacity-80"
                        style={{
                            backgroundColor: colors.card,
                            borderColor: colors.border,
                        }}
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
                                    <Ionicons
                                        name="person-outline"
                                        size={14}
                                        color={colors.textMuted}
                                    />
                                    <Text
                                        className="text-xs"
                                        style={{ color: colors.textMuted }}
                                    >
                                        User #{item.userId}
                                    </Text>
                                </View>
                                <View
                                    className="px-3 py-1 rounded-full"
                                    style={{ backgroundColor: colors.accent + "18" }}
                                >
                                    <Text
                                        className="text-xs font-semibold"
                                        style={{ color: colors.accent }}
                                    >
                                        Читати →
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 16 }}
            />
        </View>
    );
}
