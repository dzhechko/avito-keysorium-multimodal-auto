export const sections = [
    {
        id: 'abstract',
        title: 'Краткое описание',
        icon: 'file-text',
        content: `
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-semibold text-slate-800 mb-3">Бизнес-контекст</h3>
                    <p class="mb-4">Avito сталкивается с барьером входа для продавцов ("cold start") из-за сложности заполнения форм. Длительный процесс подачи (> 3 мин) снижает конверсию (Listing Conversion Rate).</p>
                    <h3 class="text-lg font-semibold text-slate-800 mb-3">Цель</h3>
                    <p>Минимизировать когнитивную нагрузку, превратив процесс из <span class="font-medium text-slate-900">ввода данных</span> в <span class="font-medium text-slate-900">валидацию предложенного</span>.</p>
                </div>
                <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 class="text-avito-blue font-bold mb-2 flex items-center gap-2"><i data-lucide="lightbulb" class="w-5 h-5"></i> Концепция</h3>
                    <p class="text-slate-700 text-sm">Внедрение <strong>«Мультимодального Автозаполнителя»</strong>. Система использует Vision LLM для извлечения структурированных данных из фото и автозаполнения фильтров, чекбоксов и описания.</p>
                </div>
            </div>
        `
    },
    {
        id: 'solution',
        title: 'Решение: Magic Fields',
        icon: 'wand-2',
        content: `
            <p class="mb-6">Система представляет собой интеллектуальный слой между загрузкой медиафайлов и формой подачи.</p>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <div class="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition">
                    <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3 text-avito-blue"><i data-lucide="eye"></i></div>
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Визуальный анализ</h4>
                    <p class="text-xs text-slate-500">Распознавание бренда, цвета, материала, дефектов.</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition">
                    <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3 text-avito-blue"><i data-lucide="database"></i></div>
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Мэппинг</h4>
                    <p class="text-xs text-slate-500">Преобразование токенов в конкретные ID категорий Avito.</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition">
                    <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3 text-avito-blue"><i data-lucide="pen-tool"></i></div>
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Автозаполнение</h4>
                    <p class="text-xs text-slate-500">Заполнение фильтров и генерация SEO-описания.</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition">
                    <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3 text-avito-blue"><i data-lucide="sparkles"></i></div>
                    <h4 class="font-bold text-slate-800 text-sm mb-1">UX Магия</h4>
                    <p class="text-xs text-slate-500">Анимация, иконки уверенности, Smart Chips.</p>
                </div>
            </div>
        `
    },
    {
        id: 'architecture',
        title: 'Архитектура',
        icon: 'cpu',
        content: `
            <p class="mb-6 text-slate-600">Каскадная гибридная архитектура для обеспечения SLA < 10 секунд.</p>
            <div class="relative group cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-slate-50 mb-8" id="arch-img-container">
                <img src="https://r2.flowith.net/files/jpeg/N0EBS-avito_multimodal_autofill_architecture_index_0@1024x1024.jpeg" 
                     alt="Architecture Diagram" 
                     class="w-full object-cover transition duration-500 group-hover:scale-[1.02]">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span class="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-lg text-slate-800 flex items-center gap-2">
                        <i data-lucide="zoom-in" class="w-4 h-4"></i> Увеличить схему
                    </span>
                </div>
            </div>
            <div class="space-y-4">
                <details class="group bg-white border border-slate-200 rounded-lg">
                    <summary class="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-700 list-none hover:bg-slate-50 transition">
                        <span>Компонентная схема</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 transition group-open:rotate-180"></i>
                    </summary>
                    <div class="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100 mt-2">
                        <ul class="list-disc list-inside space-y-2 pt-2">
                            <li><strong>Inference Engine:</strong> Triton Inference Server / vLLM</li>
                            <li><strong>Vision Model:</strong> Fine-tuned Llava / Qwen-VL (Int8)</li>
                            <li><strong>Text Model:</strong> Bert-based Classifier (Mapping)</li>
                            <li><strong>Queue:</strong> Kafka / RabbitMQ (для сглаживания пиков)</li>
                        </ul>
                    </div>
                </details>
            </div>
        `
    },
    {
        id: 'integration',
        title: 'Точки интеграции',
        icon: 'git-merge',
        content: `
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="layers" class="text-avito-blue w-4 h-4"></i> Вертикали</h4>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li class="flex gap-2 items-start"><span class="w-1.5 h-1.5 rounded-full bg-avito-blue mt-1.5 shrink-0"></span><span><strong>Товары:</strong> Размер одежды по бирке, модель гаджета.</span></li>
                        <li class="flex gap-2 items-start"><span class="w-1.5 h-1.5 rounded-full bg-avito-blue mt-1.5 shrink-0"></span><span><strong>Авто:</strong> Интерьер (кожа/ткань), коробка передач по фото селектора.</span></li>
                        <li class="flex gap-2 items-start"><span class="w-1.5 h-1.5 rounded-full bg-avito-blue mt-1.5 shrink-0"></span><span><strong>Недвижимость:</strong> Тип санузла, класс ремонта по фото.</span></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="globe" class="text-avito-blue w-4 h-4"></i> Горизонтали</h4>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li class="flex gap-2 items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span><span><strong>Поиск:</strong> Обогащение индекса "невидимыми" тегами.</span></li>
                        <li class="flex gap-2 items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span><span><strong>Trust & Safety:</strong> Выявление запрещенных товаров и вотермарок.</span></li>
                        <li class="flex gap-2 items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span><span><strong>Аналитика:</strong> Гранулярные данные о реальном инвентаре.</span></li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'metrics',
        title: 'Метрики успеха',
        icon: 'bar-chart-3',
        type: 'table',
        data: [
            { category: 'Эффективность (UX)', metric: 'Time-to-Publish', target: '< 100 сек', desc: 'Снижение с ~3-4 мин' },
            { category: 'Принятие', metric: 'Autofill Acceptance', target: '> 75%', desc: 'Пользователь не исправляет ИИ' },
            { category: 'Качество', metric: 'Data Fill Rate', target: '+40% YoY', desc: 'Заполненность необязательных полей' },
            { category: 'Бизнес', metric: 'Conversion to Deal', target: '+15%', desc: 'Рост CTR и GMV' },
            { category: 'Техническая', metric: 'Latency', target: '< 5 сек', desc: 'p95 время ожидания' }
        ]
    },
    {
        id: 'risks',
        title: 'Риски',
        icon: 'alert-triangle',
        content: `
            <div class="grid gap-4">
                <div class="p-4 bg-red-50/50 border border-red-100 rounded-lg flex gap-4">
                    <i data-lucide="brain-circuit" class="text-red-500 shrink-0 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">Галлюцинации</h4>
                        <p class="text-xs text-slate-600 mt-1">Модель путает бренды. <br><strong>Mitigation:</strong> Порог уверенности (Threshold). Дисклеймер.</p>
                    </div>
                </div>
                <div class="p-4 bg-orange-50/50 border border-orange-100 rounded-lg flex gap-4">
                    <i data-lucide="clock" class="text-orange-500 shrink-0 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">Высокая задержка</h4>
                        <p class="text-xs text-slate-600 mt-1">Очереди в пиковые часы. <br><strong>Mitigation:</strong> Optimistic UI, асинхронная загрузка.</p>
                    </div>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg flex gap-4">
                    <i data-lucide="lock" class="text-slate-500 shrink-0 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">Приватность</h4>
                        <p class="text-xs text-slate-600 mt-1">Случайная загрузка документов. <br><strong>Mitigation:</strong> Edge-side размытие, быстрое удаление.</p>
                    </div>
                </div>
            </div>
        `
    }
];

export const demoData = {
    loadingSteps: [
        "Сжатие и загрузка фото...",
        "Детекция объектов (YOLO)...",
        "Извлечение атрибутов (Llava-Next)...",
        "Мэппинг категорий (BERT)...",
        "Формирование ответа..."
    ],
    fields: [
        { label: "Категория", value: "Личные вещи > Детская одежда > Для девочек > Верхняя одежда", confidence: 0.99 },
        { label: "Бренд", value: "Reima", confidence: 0.98, icon: "sparkles" },
        { label: "Размер", value: "110", confidence: 0.95, icon: "sparkles" },
        { label: "Состояние", value: "Отличное", confidence: 0.85 },
        { label: "Цвет", value: "Розовый", confidence: 0.92 }
    ],
    description: "Продам зимнюю куртку Reima для девочки, рост 110. Состояние отличное, без потертостей. Яркий розовый цвет."
};
