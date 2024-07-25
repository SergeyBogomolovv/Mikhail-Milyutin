import { ICollection } from "@/models/Collection";
import { grani } from "./grani";
import { alica } from "./alica";
import { olga } from "./olga";
import { gzhel } from "./gzhel";
import { classic } from "./classic";
import { mosty } from "./mosty";
import { pinap } from "./pinap";
import { newyear } from "./newyear";
import { flowers } from "./flowers";
import { iskusstvo } from "./iskusstvo";
import { tradicii } from "./tradicii";

export const collections: ICollection[] = [
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/alica/fon.png",
    title: "Алиса в стране чудес",
    cards: alica,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/grani/fon.png",
    title: "Грани",
    cards: grani,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/olga/fon.png",
    title: "Ольга",
    cards: olga,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/gzhel/fon.png",
    title: "Коллекция в стиле Гжель",
    cards: gzhel,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/classic/fon.png",
    title: "Классика",
    cards: classic,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/mosty/fon.png",
    title: "Знаменитые мосты и решетки",
    cards: mosty,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/pinap/fon.png",
    title: "Пин-ап",
    cards: pinap,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/newyear/fon.png",
    title: "Новогоднее настроение",
    cards: newyear,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/flowers/fon.png",
    title: "Сад цветов",
    cards: flowers,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/iskusstvo/fon.png",
    title: "Предметы искусства",
    cards: iskusstvo,
  },
  {
    image: "https://storage.yandexcloud.net/mikhail-milutin/tradicii/fon.png",
    title: "Сохраняя традиции",
    cards: tradicii,
  },
];
