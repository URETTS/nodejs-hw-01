import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
        try {
            await fs.unlink(PATH_DB, 'utf-8');
            console.log('Файл успішно видалено.');
        } catch (err) {
            console.error('Помилка видалення файлу:', err);
        }
};

removeAllContacts();
