# Коментарі SPA-додаток

[Жива сторінка](https://test-d-zen-code-frontend.vercel.app/)

## Форма Додавання Коментаря

Користувач може залишати коментарі, використовуючи наступні поля:

1. **Ім'я користувача (цифри і букви латинського алфавіту):** Обов'язкове поле
2. **E-mail (формат email):** Обов'язкове поле
3. **Домашня сторінка (формат url):** Необов'язкове поле
4. **CAPTCHA (цифри і букви латинського алфавіту):** Зображення та обов'язкове поле
5. **Текст (сам текст повідомлення, всі HTML теги не допускаються, крім дозволених):** Обов'язкове поле

## Головна Сторінка

1. Кожен коментар може мати будь-скільки відповідей (каскадне відображення).
2. Заголовкові коментарі (те, які не є відповіддю) повинні виводитися у вигляді таблиці з можливістю сортування за ім'ям користувача, e-mail та датою додавання (як в порядку зменшення, так і в порядку збільшення).
3. Повідомлення повинні розділятися на сторінки, по 25 повідомлень на кожній.
4. Створено простий дизайн за допомогою CSS.

## JavaScript та AJAX

1. Валідація введених даних як на серверній, так і на клієнтській стороні.
2. Функція попереднього перегляду повідомлення без перезавантаження сторінки.
3. Для HTML тегів створено панель з кнопками ([i], [strong], [code], [a]).

## Регулярні Вирази

1. Користувач може використовувати наступні дозволені HTML теги в повідомленнях: `<a href="" title=""> </a> <code> </code> <i> </i> <strong> </strong>`
2. Перевірка закриття тегів, код повинен бути валідним XHTML.

## JavaScript та Робота з Файлами

1. Користувач може додати до повідомлення зображення або текстовий файл.
2. Зображення повинно мати розмір не більше 320х240 пікселів. При спробі завантажити зображення більшого розміру, воно пропорційно зменшується до зазначених розмірів. Допустимі формати файлів: JPG, JPEG, GIF, PNG.
3. Текстовий файл не повинен бути більше 100 кБ, формат TXT.
4. Перегляд зображень супроводжується візуальними ефектами.

## 🛠️ Технічний стек

- [axios](https://www.npmjs.com/package/axios) ^1.6.2
- [buffer](https://www.npmjs.com/package/buffer) ^6.0.3
- [date-fns](https://www.npmjs.com/package/date-fns) ^2.30.0
- [dompurify](https://www.npmjs.com/package/dompurify) ^3.0.6
- [formik](https://www.npmjs.com/package/formik) ^2.4.5
- [html-react-parser](https://www.npmjs.com/package/html-react-parser) ^5.0.6
- [modern-normalize](https://www.npmjs.com/package/modern-normalize) ^2.0.0
- [react](https://reactjs.org/) ^18.2.0
- [react-dom](https://reactjs.org/) ^18.2.0
- [react-icons](https://react-icons.github.io/react-icons/) ^4.12.0
- [react-paginate](https://www.npmjs.com/package/react-paginate) ^8.2.0
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) ^6.19.0
- [styled-components](https://styled-components.com/) ^6.1.1
- [yup](https://www.npmjs.com/package/yup) ^1.3.2
