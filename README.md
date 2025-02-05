Ссылка на сверстанную страницу, задеплоенную на хостинг Github Pages: https://nastusya-max.github.io/publish-frontend_test_task/
# Test task - Front-End Developer - Web Marketing

**Задание**: сверстать страницу листинга интернет-магазина, в которой нужно отрендерить датасет из [файла dataset.json](https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json). Дизайн - произвольный, за основу можно взять пример в данном репозитории ([jpeg](https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/marketplace_sketch.jpg), [figma](https://www.figma.com/file/GZDWwVSeu1N8KHRH7B0may/Test_task_sketch?node-id=0%3A1)). Фотографии к карточкам товаров из датасета лежат в [папке src/img](https://github.com/alexnaidovich/frontend_test_task/tree/master/src/img) данного репозитория. По готовности отправить HR 2 ссылки: на репозиторий с исходным кодом проекта и на сверстанную страницу, задеплоенную на любой бесплатный хостинг (Github Pages, Zeit Now, Netlify, Heroku и др.). 

**Что можно (и приветствуется)**:

  * Инструменты автоматизации сборки (**Webpack**, Parcel, Gulp и др.). Идеальный пример - датасет импотрируется в вебпак, и загоняется на страницу посредством `HTMLWebpackPlugin` (контр-идеальный пример - данные из датасета копируются и вставляются в html посредством `"копировать/вставить"`);
  * HTML-шаблонизаторы (EJS, Handlebars, Pug/Jade, **Marko.js**);
  * LESS/SASS/**SCSS**;
  * CSS-фреймворки (**Bulma**, Bootstrap, Materialize, etc.);
  * Декомпозиция в разумных пределах (идеальный пример: 1 компонент - 1 файл с pug-шаблоном - 1 scss-миксин);
  * AMP-стек (**PHP, MySQL**).
  
> Полужирным отмечен стек, который используется на данный момент.

**Что нельзя**:

  * **Реактивные JS-фреймворки (React/Angular/Vue/Svelte/etc), равно как и формировать HTML-разметку на клиенте динамически посредством ванильного JS без фреймворков (на клиент должна приходить уже сформированная статичная разметка)**. Исключение составляют дополнительные элементы, не имеющие отношения к основному контенту из датасета (например, мобильная навигация, декоративные элементы). Метод проверки: если по загрузке страницы я открою View Source (Ctrl+U), и увижу там пустой тег `<body>` либо `<body>` с единственным пустым `<div id="app"></div>` внутри, либо долистаю до листинга и на том месте, где должны быть карточки, увижу, что в режиме View Source их там нет - на этом проверка тестового задания завершится с отрицательным результатом и фидбэком "ключевое требование (рендер контентно-значимой части на стороне клиента запрещен) не выполнено";
  * CMS (WordPress/Joomla/Bitrix/etc);
  * Если используются инструменты автоматизации сборки - помещать в один репозиторий с исходным кодом файлы готового билда и папку `node_modules`.
