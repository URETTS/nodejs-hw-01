import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
   
    const existingContacts = await readContacts() || [];

    const newContact = createFakeContact();

    const updatedContacts = [...existingContacts, newContact];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');

    console.log('Один новий контакт успішно додано!');
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error.message);
  }
};

addOneContact();

