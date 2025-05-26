import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    const data = PATH_DB;
    try {
        await fs.writeFile('output.txt', data, 'utf8');
        console.log('Дані успішно записані у файл.');
    } catch (err) {
        console.error('Помилка запису у файл:', err);
    }
};
