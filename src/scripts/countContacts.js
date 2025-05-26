import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => { 
     try {
            const data = await fs.readFile(PATH_DB, 'utf-8');
            const contacts = JSON.parse(data);
            return contacts.length;
      } catch (err) {
        console.error('Помилка отримання списку контактів:', err);
      } };

console.log(await countContacts());
