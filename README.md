# Проектная работа №10

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

Проект одностраничного сайта, который должен корректно отображаться на экранах популярных размеров (320, 768, 1024 и 1280 пикселей).

---

## React

---

1. Разметка портирована в JSX:
2. Разметка заключена в ( );
3. Разметка вынесена в соответствующие ей компоненты:
  - компоненты собраны в папке "components";
  - Хуки не используются внутри условных блоков;
  - Хуки вызываются в основной функции компонента;
  - При использовании классовых компонентов эффекты описаны внутри методов жизненного цикла
    компонента;
4. Запрос к API за информацией о пользователе и массиве карточек выполняется единожды, при монтировании;
5. Все стейт-переменные из брифа созданы и определены внутри указанного в брифе компонента;
6. На странице отрисовывается информация о пользователе и карточки;
7. Модальные окна открываются при нажатии на соответствующий элемент интерфейса;
8. Модальные окна закрываются при нажатии на иконку закрытия.

---

### Доступные скрипты

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
