# AGENTS.md - Gleb Dvoryatkin Portfolio

Контекст для агента. Прочитай перед любыми изменениями.

## Что это
Персональный сайт-портфолио продуктового дизайнера. Astro + Tailwind, статическая сборка.
Репозиторий -> GitHub (origin/main) -> автодеплой на Vercel. Один источник правды: ветка main.
Сайт полностью на английском.

## Стек
- Astro 5 (static output), Tailwind (официальная интеграция, НЕ CDN)
- TypeScript в strict-режиме. tsconfig extends astro/tsconfigs/strict.
- Шрифты: Geist / Geist Mono (fontsource)
- Node: на Windows лежит в "C:\Program Files\nodejs\node.exe". Если сессия не видит node/npm в PATH, используй полный путь.
- Сборка: npm run build = astro check && astro build. Красный astro check блокирует сборку. Превью: astro preview / astro dev.

## Структура
- src/styles/ - дизайн-система, ЕДИНЫЙ источник стилей:
  - tokens.css - CSS-переменные (цвета light/dark, motion, radius). Тема переключается классом .dark на <html>.
  - typography.css - типо-шкала как классы t-display / t-title / t-section / t-sub / t-lede / t-body / t-small + .eyebrow. Размеры в ЧЁТНЫХ px.
  - motion.css - переходы, .reveal, hover, .link-underline, .card-lift.
  - components.css - .icon и прочие общие классы.
- src/components/ - Button, CopyEmail, Eyebrow, Footer, Nav, WorkCard.
- src/components/sections/ - Hero, SelectedWork, WhatIDo, Contact.
- src/components/blocks/ - рендереры блоков кейсов + CaseBlocks (диспетчер).
- src/layouts/ - BaseLayout (каркас, Nav, Footer, reveal-скрипт, инициализация темы, глобальный лайтбокс), CaseLayout.
- src/data/cases.ts - КОНТЕНТ кейсов и типы (данные отдельно от вёрстки).
- src/pages/ - index, about, resume, 404, case/[slug] (страницы кейсов по slug), preview/blocks (внутренняя витрина блоков, noindex).
- public/ - статика как есть (в т.ч. Gleb_Dvoryatkin_Resume.pdf, favicon.svg, скриншоты кейсов). Боевые ассеты закоммичены в git. Локальные рабочие картинки могут лежать в public/ как untracked - в репозиторий их не добавляем.

## Типы пропсов компонентов
- Props типизируются через HTMLAttributes из astro/types, а не через ручной interface с index-сигнатурой.
- НЕ используй [key: string]: unknown в Props: это глушит проверку типов и делает strict бесполезным.
- Паттерн: type Props = HTMLAttributes<'a'> & { собственныеПропсы }. Если собственный проп конфликтует с HTML-атрибутом (например role), оборачивай в Omit<HTMLAttributes<'a'>, 'role'>.

## Case blocks
Контент кейса в src/data/cases.ts. Есть ДВА формата, оба рабочие:

1. Блочный формат (основной, для Naoma): blocks: CaseBlock[]. Рендерится через CaseBlocks.astro. 12 типов блоков.
2. Легаси-формат { h, p } (CaseBodySection): используется в кейсах OilCase X и OilCase Courses. CaseBlocks нормализует его в prose при рендере. Это НЕ баг и НЕ мусор: не удаляй нормализацию и не переписывай эти кейсы на блоки без явной просьбы.

12 типов блоков:
- prose - narrative text. Fields: type, heading?, body.
- imageText - image + текст в две колонки. Fields: type, side, image, alt, caption?, heading?, body.
- fullImage - одна full-width картинка в колонке кейса. Fields: type, image, alt, caption?.
- metrics - числа результата/процесса. Fields: type, heading?, items[{ value, label }].
- beforeAfter - визуальное сравнение до/после. Fields: type, before, after, beforeAlt, afterAlt, caption?.
- callout - выделенный инсайт или проблема. Fields: type, body, title?, variant? ('insight' | 'problem').
- list - маркированный или нумерованный список. Fields: type, heading?, ordered?, items[].
- quote - сдержанная цитата или внутренняя заметка. Fields: type, quote, attribution?.
- twoCol - парные текстовые колонки. Fields: type, heading?, left{ label?, body }, right{ label?, body }.
- divider - вводный разделитель между секциями. Fields: type, label?, title.
- gallery - сетка картинок. Fields: type, heading?, columns? (2 | 3), items[{ image, alt, caption? }].
- table - таблица сравнения. Fields: type, heading?, columns[], rows[{ cells[] }].

## Visual tokens and image behavior
- Скругление карточек, картинок, плейсхолдеров, callout-ов - из --radius в tokens.css. --radius-sm только для намеренно меньшего UI.
- Реальные картинки в блоках могут включать глобальный лайтбокс через data-zoomable. Плейсхолдеры зумиться не должны.
- Лайтбокс живёт в BaseLayout: клик-открытие, закрытие по фону, кнопка закрытия, Esc, блокировка скролла body.

## Как вносить изменения (принципы)
- Цвет / отступ / скругление / шкала: меняй ОДИН токен или ОДИН класс в src/styles, не хардкодь по месту.
- Кнопки: только компонент Button (variant solid/ghost, on page/panel, size default/sm). НЕ пиши инлайновые классы кнопок.
- Один accent-цвет на весь сайт, залочен в токенах. Не вводи новые цвета.
- Типографика: только роли t-* из typography.css. НЕ хардкодь произвольные размеры (никаких text-[16px] и т.п.).
  Исключение: 12px допустим для служебного текста (логотип в Nav, строка в Footer) - роли t-* под этот размер нет.
- on="panel" у Button для инвертированной тёмной панели (секция Contact). on="page" - обычные, следуют теме.
- Тема тема-агностична: элементы берут цвет из токенов, НЕ знают "светлая/тёмная".

## Жёсткие правила
- НЕ выдумывай контент: тексты, метрики, факты бери из данных / существующей разметки. Пробел помечай плейсхолдером в квадратных скобках, не догадкой.
- НЕ используй em-dash или en-dash. Только дефис или "to". Инлайновые разделители - middot.
- НЕ ломай тему: инициализация читает localStorage.theme (fallback на prefers-color-scheme) в инлайн-скрипте ДО отрисовки; переключатель пишет выбор в localStorage.
- Делай изменения ИНКРЕМЕНТАЛЬНО, показывай diff, не переписывай всё в один заход. Не "улучшай" дизайн без явной просьбы.
- Перед коммитом собирай проект (npm run build, включает astro check). node_modules / dist / .astro / .codex-screenshots / *.log не коммить (см .gitignore).

## Текущее состояние
Миграция с одностраничного index.html на Astro завершена. Работает: дизайн-система, лендинг на компонентах (Hero, Selected Work, What I do, Contact), страницы кейсов с URL, страница About, страница резюме + PDF, глобальный Nav и Footer, тема с сохранением, глобальный лайтбокс, кастомная 404, витрина блоков /preview/blocks, favicon, базовые OG-теги, strict TypeScript с гейтом сборки.

## Известные плейсхолдеры и незакрытое
- /resume: контакты (email, telegram) до сих пор плейсхолдеры в разметке, тогда как в Footer и Contact контакты уже реальные. Нужен единый источник.
- PDF-резюме (public/Gleb_Dvoryatkin_Resume.pdf) содержит плейсхолдеры и расходится со страницей /resume. Скрипта генерации в репозитории нет. Переделывается отдельно, пока не трогаем.
- Обложки кейсов на лендинге: WorkCard рендерит плейсхолдер [ cover ], поле cover в cases.ts не заполнено.
- Картинки кейсов тяжёлые и неоптимизированные (public/, без srcset/lazy/размеров). Переделывается отдельно.
- Нет: og:image, site в конфиге, sitemap, robots.txt. SEO отложено осознанно (сайт в разработке).
