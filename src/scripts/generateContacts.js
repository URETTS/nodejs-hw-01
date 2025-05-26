import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts() || [];

    const newContacts = Array.from({ length: count }, createFakeContact);

    const updatedContacts = [...existingContacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');

    console.log(`Успішно додано ${count} контакт(ів). Загальна кількість: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts(5);


