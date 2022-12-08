# Использование профилирования для сравнения быстродействия кода с использованием встроенных средств node.js

Навеяно после просмотра видео ["Старперский код VS модный Javascript код. Сравниваем скорость"](https://www.youtube.com/watch?v=vqyIY-37pYo)

## Использование

Запуска скрипта для профилирования:
`node --prof .\src\script1.js`

Форматирование лога в удобный формат для чтения:
`node --prof-process .\isolate-[название файла]-v8.log > script1log.txt`

## Результаты тестирования:

1 скрипт (неоптимальный): 564 тика

2 скрипт (простой for по массиву): 14 тиков

3 скрипт (через map по массиву): 31 тик.

## Результаты утилиты micro-benchmark

```txt
Name                        Operations per second    Average time, ms
optimal-simple-script       5.2 x 10^3               0.19
optimal-modern-ES-script    1.3 x 10^3               0.80
not-optimal-script          38                       26
```

## Встроенный профайлер в VS Code

Редактор VS Code имеет [встроенный профайлер](https://code.visualstudio.com/docs/nodejs/profiling), который умеет анализировать загрузку CPU и размер HEAP.
