# Posts

### Описание проекта

В этом приложении:

Данный проект загружает посты пользователей с комментариями.

В этом приложении:
- переключение страниц при помощи стилей;
- переключение между вкладками без перезагрузки страницы;
- SCSS;
- получение постов, комментариев и пользователей с удаленного API ('https://jsonplaceholder.typicode.com');
- бесконечный скролл, подгрузка по 20 постов;
- VueX;
- Composition API;
- добавление комментарий под любой пост;
- просмотр постов определенного пользователя.

### Просмотр проекта

https://github.com/Dasha987/posts-comments-users-vueX-vue3/assets/33686892/702b52b8-bc57-4e46-bc70-09f6bef55c96

## Project setup

Чтобы была возможность использовать проект под свои нужды, необходимо в файле "vue.config.js" закомментировать строчку "roductionSourceMap: false". Она служит для корректного билдинга приложения, благодаря ей в папку "dist" не попадут файлы с расширением .map, поэтому при билдинге строчку рекомендую раскомментировать.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
