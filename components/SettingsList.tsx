import MenuItem from "@/components/MenuItem";
import { useTheme } from "@/utils/themeContext";
import { View } from "react-native";

type Props = {
    onAppearancePress: () => void;
};

export default function SettingsList({ onAppearancePress }: Props) {
    const { colors } = useTheme();

    return (
        <View
            style={{
                marginHorizontal: 24,
                backgroundColor: colors.card,
                borderRadius: 24,
                borderWidth: 1,
                borderColor: colors.border,
                overflow: "hidden",
            }}
        >
            <MenuItem icon="person-outline" label="Профіль" />
            <MenuItem icon="notifications-outline" label="Сповіщення" />
            <MenuItem icon="lock-closed-outline" label="Конфіденційність" />
            <MenuItem
                icon="color-palette-outline"
                label="Вигляд"
                onPress={onAppearancePress}
            />
            <MenuItem
                icon="information-circle-outline"
                label="Про додаток"
                separator={false}
            />
        </View>
    );
}
