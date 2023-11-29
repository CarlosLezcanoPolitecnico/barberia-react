import React, { useState, useEffect } from 'react';

const CitasBarberia = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Función para obtener las citas desde el servidor
    const fetchCitas = async () => {
      try {
        const response = await fetch('http://localhost:3333/citas'); // Realiza la solicitud GET al endpoint /citas
        const data = await response.json();

        if (response.ok) {
          // Si la respuesta es exitosa, actualiza el estado con los datos de las citas
          setCitas(data.data);
          
        } else {
          // Si hay un error, muestra un mensaje en la consola
          console.error('Error al obtener citas:', data.message);
        }
      } catch (error) {
        console.error('Error de red al obtener citas:', error.message);
      }
    };

    // Llama a la función para obtener citas cuando el componente se monta
    fetchCitas();
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

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
          </tr>
        </thead>
        <tbody>
        {citas.map(cita => (
            <tr key={cita.id}>
            <td>{cita.nombre_cliente}</td>
            <td>{cita.telefono_cliente}</td>
            <td>{cita.fecha_cita}</td>
            <td>{cita.hora_cita}</td>
            <td>{cita.barbero}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitasBarberia;
