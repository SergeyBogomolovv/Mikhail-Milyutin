import { ICollection } from '@/models/Collection'
import { emal } from './emal'
import { grani } from './grani'
import { pens } from './pens'
import { pins } from './pins'
import { reznoycamen } from './rez'
import { zhemchug } from './zhemchug'

export const collections: ICollection[] = [
  { image: './gor.jpeg', title: 'Горячая эмаль', cards: emal },
  { image: './grani.jpeg', title: 'Грани', cards: grani },
  { image: './pens.jpeg', title: 'Ручки', cards: pens },
  { image: './pin.jpeg', title: 'Пин-ап', cards: pins },
  { image: './rez.jpeg', title: 'Резной камень', cards: reznoycamen },
  {
    image: './zhemchug.jpeg',
    title: 'Жемчуг',
    cards: zhemchug,
    content:
      'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
  },
]
