import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
        try {
            const emptyArray = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyArray, null, 2), 'utf-8');
            console.log('Файл успішно видалено.');
        } catch (err) {
            console.error('Помилка видалення файлу:', err);
        }
};

removeAllContacts();
