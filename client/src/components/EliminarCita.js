import React, { useState, useEffect } from 'react';

const EliminarCita = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await fetch('http://localhost:3333/citas');
        const data = await response.json();

        if (response.ok) {
          setCitas(data.data);
        } else {
          console.error('Error al obtener citas:', data.message);
        }
      } catch (error) {
        console.error('Error de red al obtener citas:', error.message);
      }
    };

    fetchCitas();
  }, []);

  const handleEliminarCita = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/citas/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setCitas((prevCitas) => prevCitas.filter((cita) => cita.id_cita !== id));
      } else {
        console.error('Error al eliminar cita:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red al eliminar cita:', error.message);
    }
  };

  return (
    <div>
      <h2>Lista de Citas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Barbero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id_cita}>
              <td>{cita.nombre_cliente}</td>
              <td>{cita.telefono_cliente}</td>
              <td>{cita.fecha_cita}</td>
              <td>{cita.hora_cita}</td>
              <td>{cita.barbero}</td>
              <td>
                <button onClick={() => handleEliminarCita(cita.id_cita)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EliminarCita;
