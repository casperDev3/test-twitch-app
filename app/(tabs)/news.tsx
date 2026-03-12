import ArticleCard from "@/components/ArticleCard";
import ScreenHeader from "@/components/ScreenHeader";
import { Article, setArticles } from "@/utils/newsStore";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "../../utils/themeContext";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function NewsScreen() {
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
            <View className="flex-1 items-center justify-center" style={{ backgroundColor: colors.bg }}>
                <ActivityIndicator size="large" color={colors.accent} />
            </View>
        );
    }

    if (error) {
        return (
            <View className="flex-1 items-center justify-center px-6" style={{ backgroundColor: colors.bg }}>
                <Ionicons name="alert-circle-outline" size={48} color="#f43f5e" />
                <Text className="text-lg font-bold mt-3 mb-2" style={{ color: colors.text }}>
                    Помилка
                </Text>
                <Text className="text-center" style={{ color: colors.textSecondary }}>
                    {error}
                </Text>
                <TouchableOpacity className="mt-4 bg-indigo-500 px-6 py-3 rounded-2xl" onPress={fetchNews}>
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
                    <ScreenHeader
                        subtitle="Актуальне"
                        title="Новини"
                        style={{ backgroundColor: colors.card, paddingBottom: 16 }}
                    />
                }
                renderItem={({ item, index }) => (
                    <ArticleCard item={item} index={index} />
                )}
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 16 }}
            />
        </View>
    );
}
