# Обновление контента

## Добавление новых коллекций

Чтобы добавить коллекцию, нужно:

- 1 - Перейти в папку collections
- 2 - Найти файл index.ts
- 3 - В массив коллекций добавить элемент со следующими аттрибутами:
  - image - путь к картинке из папки src
  - title - Заголовок на странице коллекции и название
  - cards - Массив карточек этой коллекции
  - content - не обязательно, описание коллекции, пример - жемчуг

## Добавление карточек коллекций

Чтобы добавить коллекцию, нужно:

- 1 - Перейти в папку collections
- 2 - Добавить новый файл ts
- 3 - В массив карточек добавить элемент со следующими аттрибутами:
  - src - путь к картинке из папки src
  - title - необязательно, подпись к карточке

## Смена баннеров на слайдере

Чтобы добавить коллекцию, нужно:

- 1 - Перейти в папку modules
- 2 - Найти файл CarouselMain.tsx
- 3 - В компонент Carousel добавить элемент по типу:

`<Link to='/Жемчуг'> `
Указывается путь к коллекции, этот элемент не обязателен, путь должен совпадать с названием коллекции
`<AspectRatio ratio={16 / 9}>`
`<img src='./banner1.png' alt='' /> указывается путь к картинке из папки public`
`</AspectRatio>`
`</Link>`

### Картинки добавляются в папку public, путь начинает с ./путь к картинке
