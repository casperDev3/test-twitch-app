# test-twitch-app — CLAUDE.md

## Стек технологій

- **Framework**: Expo 54 + React Native 0.81
- **Routing**: Expo Router 6 (файлова маршрутизація)
- **Стилізація**: NativeWind 4 (Tailwind CSS) + React Native StyleSheet
- **Іконки**: `@expo/vector-icons` → `Ionicons`
- **Стан теми**: React Context (`utils/themeContext.tsx`)
- **Дані новин**: `utils/newsStore.ts` (глобальний стор, заповнюється з API)

## Структура проєкту

```
app/
  _layout.tsx          — кореневий layout з ThemeProvider
  settings.tsx         — екран налаштувань (тема, профіль тощо)
  (tabs)/
    _layout.tsx        — tab-навігація
    index.tsx          — Головна
    explore.tsx        — Огляд
    news.tsx           — Новини
    profile.tsx        — Профіль
  news/
    [slug].tsx         — Деталі новини

components/
  — Shared primitives —
  ScreenHeader         — заголовок екрана (subtitle + title + right slot, pt platform-aware)
  MenuItem             — рядок меню (іконка в колі + текст + chevron)
  Badge                — пігулка-тег (label + bgColor + textColor)
  SearchBar            — рядок пошуку (заглушка)
  BackHeader           — заголовок з кнопкою «назад» (для stack-скрінів)

  — Home —
  HomeStats            — 3 кольорові картки статистики
  QuickActionsCard     — картка з кнопками дій
  InfoBanner           — amber-банер з інформацією
  ScrollTestSection    — секція тесту скролу (кнопка scroll-to-section)

  — Explore —
  CategoriesGrid       — сітка категорій 2×N

  — News —
  ArticleCard          — картка статті у списку

  — Profile —
  ProfileAvatar        — аватар + ім'я + email + кнопка редагування
  ProfileStats         — рядок статистики (проєкти / завдання / готово)
  ProfileMenu          — список пунктів меню профілю

  — Settings —
  SettingsList         — список пунктів налаштувань
  AppearanceSidebar    — бокова панель вибору теми

  — Demo —
  ClassicCard          — приклад StyleSheet-підходу
  WindCard             — приклад Tailwind-підходу

utils/
  themeContext.tsx     — ThemeProvider, useTheme(), типи ThemeMode / Colors
  newsStore.ts         — збереження/отримання статей між екранами
```

## Правила розробки

### Компонентний підхід
- Кожен екран (`app/`) складається **тільки з компонентів** — жодного inline-стилювання у файлах екранів.
- Будь-який UI-блок, що повторюється ≥ 2 рази або є окремою логічною секцією, виноситься у `components/`.

### Стилізація
- Перевагу надавати **Tailwind (className)** для layout та типографіки.
- `style={{}}` використовувати тільки для динамічних значень з теми (`colors.*`).
- Кольори теми завжди через `useTheme()` — ніяких хардкод-кольорів у компонентах (крім статичних акцентних кольорів категорій).

### Тема
- Колірна система: `bg`, `card`, `text`, `textSecondary`, `textMuted`, `border`, `iconBg`, `accent`, `separator`, `tabBar`, `tabBarBorder`.
- Підтримуються режими: `light`, `dark`, `system`.

### Іконки
- Тільки `Ionicons` з `@expo/vector-icons`.
- Розміри: 14–18 для inline, 20–24 для кнопок, 44+ для великих аватарів.

### Platform-aware відступи
- `pt-16` (iOS) / `pt-12` (Android) — інкапсульовано в `ScreenHeader` і `BackHeader`.
- Не дублювати `Platform.OS` логіку в екранах.

### Навігація
- `useRouter()` з `expo-router` для переходів між екранами.
- Stack-переходи: `/settings`, `/news/[slug]`.
