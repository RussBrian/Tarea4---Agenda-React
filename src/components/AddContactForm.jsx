import { useState } from "react";
import '../css/styles.css'

const AddContactForm = ({ onAddContact }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre && apellido && telefono) {
            const newContact = { nombre, apellido, telefono };
            onAddContact(newContact);
            setNombre('');
            setApellido('');
            setTelefono('');
            alert('Contacto añadido correctamente');
        } else {
            alert('Por favor, complete todos los campos');
        }
    };
    return (
        <div className="form-container">
            <h3>Agregar Contacto</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
};
export default AddContactForm;