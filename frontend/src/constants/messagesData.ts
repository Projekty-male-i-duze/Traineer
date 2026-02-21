import type { Message } from "../types/messageType";

export const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content: "Cześć! Jestem Twoim asystentem AI. W czym mogę Ci dzisiaj pomóc? Chcesz zmienić plan, czy masz pytania o technikę ćwiczeń?",
  },
  {
    id: 2,
    sender: "user",
    content: "Zamiast martwego ciągu, co mogę zrobić na plecy?",
  },
  {
    id: 3,
    sender: "ai",
    content: "Świetną alternatywą będzie wiosłowanie sztangą w opadzie tułowia, podciąganie na drążku lub ściąganie drążka wyciągu górnego. Co brzmi dla Ciebie najlepiej?",
  }
];