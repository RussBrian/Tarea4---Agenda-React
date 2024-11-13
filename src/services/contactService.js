import { API_URL } from '../constants/Api_constants';

// (GET)
export const listOfContacts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener contactos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener contactos:', error);
        return [];
    }
};

// (POST)
export const addContact = async (newContact) => {
    try {
        console.log("Enviando nuevo contacto;", newContact);
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(newContact),
        });
        if (!response.ok) throw new Error('Error al agregar contacto');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al agregar contacto:', error);
    }
};
