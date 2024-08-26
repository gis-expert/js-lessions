# lessions

Репозиторий для реализации студентами различных утилит и задач:

## Реализация строковых утилит:

### Этап 1.
1. [isEqual function](https://github.com/gis-expert/dedok/wiki/1.1.-is-equal)
1. [len function](https://github.com/gis-expert/dedok/wiki/1.2.-len)
1. [replace len funcion](https://github.com/gis-expert/dedok/wiki/1.3.-modify-is-equal)
1. [isNotEqual funcion](https://github.com/gis-expert/dedok/wiki/1.4.-is-not-equal)
1. [isMore function](https://github.com/gis-expert/dedok/wiki/1.5.-is-more)
1. [isLess function](https://github.com/gis-expert/dedok/wiki/1.6.-is-less)
1. [isMoreOrEqual function](https://github.com/gis-expert/dedok/wiki/1.7.-is-more-or-equal)
1. [isLessOrEqual function](https://github.com/gis-expert/dedok/wiki/1.8.-is-less-or-equal)
1. [Отправляем свой код на код-ревью](https://github.com/gis-expert/dedok/wiki/1.9.-git-hub-and-code-review)

### Этап 2.
1. [reverse function](https://github.com/gis-expert/dedok/wiki/1.10.-reverse)
1. [repeat function](https://github.com/gis-expert/dedok/wiki/1.12.-repeat)
1. [substring function](https://github.com/gis-expert/dedok/wiki/1.13.-substring)
1. [indexOf function](https://github.com/gis-expert/dedok/wiki/1.15.-index-of)
1. [includes function](https://github.com/gis-expert/dedok/wiki/1.19.-includes)
    - Написать тесты которые проверяют требования к функции.
1. **remove function**  
    __Описание задачи:__
    Реализуйте функцию `remove(text: string, charToRemove: string): string`, которая принимает строку text и символ charToRemove, и возвращает новую строку, из которой удалены все вхождения символа charToRemove.  
    Необходимо будет создать файлы remove.ts, remove.test.ts  
    Написать тесты которые проверяют требования к функции.

1. [Отправляем свой код на код-ревью](https://github.com/gis-expert/dedok/wiki/1.9.-git-hub-and-code-review)

### Этап 3.
1. [trim function](https://github.com/gis-expert/dedok/wiki/1.16.-trim)
1. [replace function](https://github.com/gis-expert/dedok/wiki/1.17.-replace)
1. [pad function](https://github.com/gis-expert/dedok/wiki/1.18.-pad)
1. [startsWith, endsWith function](https://github.com/gis-expert/dedok/wiki/1.20.-starts-ends-with)
1. [slice, endsWith function](https://github.com/gis-expert/dedok/wiki/1.23.-slice)
1. [Отправляем свой код на код-ревью](https://github.com/gis-expert/dedok/wiki/1.9.-git-hub-and-code-review)

### Этап 4.
1. [charUtils function](https://github.com/gis-expert/dedok/wiki/1.21.-char-utils)
1. [upperCase, lowerCase function](https://github.com/gis-expert/dedok/wiki/1.22.-upper-lower-case)
1. **invertCase function**  
    __Описание задачи:__
    Реализуйте функцию `invertCase(text: string): string`, которая принимает строку text и возвращает новую строку, в которой все буквы инвертированы: символы в верхнем регистре преобразованы в нижний, а в нижнем — в верхний.  
    Написать тесты которые проверяют требования к функции.
1. **capitalize function**  
    __Описание задачи:__
    Реализуйте функцию `capitalize(text: string): string`, которая принимает строку text и возвращает новую строку, в которой первый символ преобразован в верхний регистр, а все остальные — в нижний регистр.  
    Написать тесты которые проверяют требования к функции.
1. [Отправляем свой код на код-ревью](https://github.com/gis-expert/dedok/wiki/1.9.-git-hub-and-code-review)

### Этап 5.
**Задание 1: Функция для перевода строки из camelCase в snake_case**

Описание задачи:
1. Реализуйте функцию `camelToSnake(text: string): string`, которая принимает строку в camelCase формате и переводит её в snake_case.
1. Функционал должен быть покрытый тестами.

**Задание 2: Функция для перевода строки из snake_case в camelCase**

Описание задачи:
1. Реализуйте функцию `snakeToCamel(text: string): string`, которая принимает строку в snake_case формате и переводит её в camelCase.
1. Функционал должен быть покрытый тестами.

**Задание 3: Функция для перевода строки из camelCase в kebab-case**

Описание задачи:
1. Реализуйте функцию `camelToKebab(text: string): string`, которая принимает строку в camelCase формате и переводит её в kebab-case.
1. Функционал должен быть покрытый тестами.

**Задание 4: Функция для перевода строки из kebab-case в camelCase**

Описание задачи:
1. Реализуйте функцию `kebabToCamel(text: string): string`, которая принимает строку в kebab-case формате и переводит её в camelCase.
1. Функционал должен быть покрытый тестами.

**Задание 5: Функция для перевода строки из snake_case в kebab-case**

Описание задачи:
1. Реализуйте функцию `snakeToKebab(text: string): string`, которая принимает строку в snake_case формате и переводит её в kebab-case.
1. Функционал должен быть покрытый тестами.

**Задание 6: Функция для перевода строки из kebab-case в snake_case**

Описание задачи:
1. Реализуйте функцию `kebabToSnake(text: string): string`, которая принимает строку в kebab-case формате и переводит её в snake_case.
1. Функционал должен быть покрытый тестами.

**Задание 7: Код-ревью**

### Этап 6.
**Задание 1: Реализация функции генерации случайных строк на основе формата**

Описание задачи:

Вам необходимо реализовать функцию `random(format: string, delimiter = '-'): string`, которая будет генерировать случайные строки на основе предоставленного формата. Формат строки задается с использованием специальных символов, каждый из которых определяет тип символа, который будет сгенерирован.

Специальные символы для генерации:

h — случайное шестнадцатеричное число (0-9, a-f).
d — случайная десятичная цифра (0-9).
z — случайная буква английского алфавита (a-z).
Z - случайная буква английского алфавита в нижнем и врехнем регистре (a-z, A-Z).
a — случайная буква английского алфавита или цифра (a-z, 0-9).
Z - случайная буква английского алфавита в нижнем и врехнем регистре или цифра (a-z, A-Z, 0-9).
0-9 — генерирует случайное число в диапазоне от 0 до указанного числа.
Аргументы функции:

`format: string` — строка, задающая формат генерации. Каждый символ в этой строке определяет тип данных, которые будут сгенерированы.
`delimiter: string` — разделитель, который используется для разделения сегментов в строке формата (по умолчанию '-').

Функция должна возвращать:  
Сгенерированную строку, которая соответствует заданному формату.

Функционал должен быть покрытый тестами.
Перед началом реализации напишите тесты, а потом приступайте к реализации (test driven development)
Примеры тестовых случаев:
```ts
random('h-d-d-d');             // 'a-5-3-8'
random('z_z_d', '_');          // 'k_p_7'
random('255.255.255.255', '.');// '237.084.102.178'
random('d-d-4-h');             // '3-8-2-c'
random('hdd-AA', ':');         // 'b32-Y8'
random('hh-hhhh-hhhh');        // 'c5-499f-9196'
random('dd.dddd.dddd', '.')    // '39.1231.3456'
random('3-34-4h-hhh')          // '0-34-41-bf5'
random('zzzz#ddd', '#')        // 'jafn#855'
random('2.2.4', '.')           // '2.1.4'
```


**Задание 2: Функция для извлечения слова из текста по его порядковому номеру**
Описание задачи:

Реализуйте функцию `getWordAtPosition(text: string, position: number): string`, которая принимает строку text и порядковый номер position, и возвращает слово, находящееся на этой позиции в тексте. Позиции слов начинаются с 1.
Перед началом реализации напишите тесты, а потом приступайте к реализации (test driven development)

Примеры использования:

```ts
getWordAtPosition('Hello world from JavaScript', 2);  // 'world'
getWordAtPosition('The quick brown fox jumps', 4);   // 'fox'
getWordAtPosition('One two three four five', 5);     // 'five'
getWordAtPosition('ChatGPT is a powerful tool', 3);  // 'a'
```
Требования:

Если позиция превышает количество слов в тексте, вернуть пустую строку.
Если позиция меньше 1, вернуть пустую строку.
Пункты и знаки препинания не должны учитываться в качестве слов.
Слова разделяются пробелами или другими разделительными символами (например, запятыми, точками, точками с запятой и т.д.).
Функция должна корректно обрабатывать текст, содержащий несколько пробелов или других разделительных символов подряд.
Дополнительное условие:

Подумайте, как сделать функцию устойчивой к неправильным входным данным, например, если в качестве позиции передано не число или текст содержит необычные символы.

Функционал должен быть покрытый тестами.
Примеры тестовых случаев:

```ts
getWordAtPosition('  This is a test string  ', 3);  // 'a'
getWordAtPosition('A, quick, brown; fox!', 2);     // 'quick'
getWordAtPosition('Hello world', 5);               // ''
getWordAtPosition('One two', 0);                   // ''
getWordAtPosition('Punctuation: doesn\'t count!', 3); // 'count'
```
