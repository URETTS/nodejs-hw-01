import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts) || contacts.length === 0) {
      console.log('Контактів немає. Нічого видаляти.');
      return;
    }

    // Видаляємо останній контакт
    contacts.pop();

    // Перезаписуємо файл без останнього контакту
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

// Виклик функції
removeLastContact();
