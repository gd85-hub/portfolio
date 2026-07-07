# AGENTS.md - Gleb Dvoryatkin Portfolio

Контекст для агента. Прочитай перед любыми изменениями.

## Что это
Персональный сайт-портфолио продуктового дизайнера. Astro + Tailwind, статическая сборка.
Репозиторий -> GitHub (origin/main) -> автодеплой на Vercel. Один источник правды: ветка main.

## Стек
- Astro (static output), Tailwind (официальная интеграция, НЕ CDN)
- Шрифты: Geist / Geist Mono (fontsource)
- Node: на Windows лежит в "C:\Program Files\nodejs\node.exe". Если сессия не видит node/npm в PATH, используй полный путь для build/preview.
- Сборка: astro build. Превью: astro preview / astro dev.

## Структура
- src/styles/ - дизайн-система, ЕДИНЫЙ источник стилей:
  - tokens.css - CSS-переменные (цвета light/dark, motion-токены). Тема переключается классом .dark на <html>.
  - typography.css - типо-шкала как классы t-display / t-title / t-section / t-sub / t-lede / t-body / t-small + .eyebrow. Размеры в ЧЁТНЫХ px.
  - motion.css - переходы, .reveal, hover.
  - components.css - .icon и прочие общие классы.
- src/components/ - Button.astro, Eyebrow.astro, WorkCard.astro, Nav.astro.
- src/components/sections/ - Hero, SelectedWork, About, Contact.
- src/layouts/ - BaseLayout.astro (общий каркас, Nav, reveal-скрипт, инициализация темы), CaseLayout.astro.
- src/data/cases.ts - КОНТЕНТ кейсов (данные отдельно от вёрстки). Новый кейс = новая запись здесь.
- src/pages/ - index.astro, resume.astro, case/[slug].astro (страницы кейсов по slug).
- public/ - статика как есть (в т.ч. Gleb_Dvoryatkin_Resume.pdf, отдаётся по /Gleb_Dvoryatkin_Resume.pdf).

## Как вносить изменения (принципы)
- Цвет / отступ / скругление / шкала: меняй ОДИН токен или ОДИН класс в src/styles, не хардкодь по месту.
- Кнопки: только компонент Button (variant solid/ghost, on page/panel, size default/sm). НЕ пиши инлайновые классы кнопок.
- Один accent-цвет на весь сайт, залочен в токенах. Не вводи новые цвета.
- Типографика: только роли t-* из typography.css. НЕ хардкодь произвольные размеры.
- on="panel" у Button для инвертированной тёмной панели (секция Contact). on="page" - обычные, следуют теме.
- Тема тема-агностична: элементы берут цвет из токенов, НЕ знают "светлая/тёмная".

## Жёсткие правила
- НЕ выдумывай контент: тексты, метрики, факты бери из данных / существующей разметки. Пробел помечай плейсхолдером в квадратных скобках, не догадкой.
- НЕ используй em-dash или en-dash. Только дефис или "to". Инлайновые разделители - middot.
- НЕ ломай тему: инициализация читает localStorage.theme (fallback на prefers-color-scheme) в инлайн-скрипте ДО отрисовки; переключатель пишет выбор в localStorage.
- Делай изменения ИНКРЕМЕНТАЛЬНО, показывай diff, не переписывай всё в один заход. Не "улучшай" дизайн без явной просьбы.
- Перед коммитом собирай проект. node_modules / dist / .astro не коммить (см .gitignore).

## Текущее состояние
Миграция с одностраничного index.html на Astro завершена. Готово: дизайн-система, лендинг на компонентах, страницы кейсов с URL, страница резюме + PDF, глобальный Nav, тема с сохранением.

## Известные плейсхолдеры (ещё не заполнено)
- Контакты (email, Telegram): плейсхолдеры в Contact, футере, резюме.
- Обложки кейсов [ cover ], hero-шоты [ hero shot ], фото [ photo ], [ your portrait ].
- Нет: favicon, OG-тегов, уникального description у кейсов, страницы 404, кастомного домена.
