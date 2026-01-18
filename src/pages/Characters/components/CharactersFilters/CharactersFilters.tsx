import Select from '@atoms/Select/Select';
import type { JSX } from 'react';
import './CharactersFilters.scss';

export default function CharactersFilters(): JSX.Element {
  const statusOptions = [
    { value: 'alive', label: 'Vivo' },
    { value: 'dead', label: 'Muerto' },
    { value: 'unknown', label: 'Desconocido' },
  ];

  const genderOptions = [
    { value: 'female', label: 'Femenino' },
    { value: 'male', label: 'Masculino' },
    { value: 'genderless', label: 'Sin género' },
    { value: 'unknown', label: 'Desconocido' },
  ];

  const speciesOptions = [
    { value: 'human', label: 'Humano' },
    { value: 'alien', label: 'Alien' },
    { value: 'humanoid', label: 'Humanoide' },
    { value: 'robot', label: 'Robot' },
    { value: 'cronenberg', label: 'Cronenberg' },
    { value: 'animal', label: 'Animal' },
    { value: 'poopybutthole', label: 'Poopybutthole' },
    { value: 'mythological', label: 'Mitológico' },
    { value: 'unknown', label: 'Desconocido' },
  ];

  return (
    <div className="characters-filters">
      <h2>Módulos Filtrado</h2>

      <Select
        label="Estado"
        id="status"
        name="status"
        options={statusOptions}
        placeholder="Todos"
      />

      <Select
        label="Género"
        id="gender"
        name="gender"
        options={genderOptions}
        placeholder="Todos"
      />

      <Select
        label="Taxonomía"
        id="species"
        name="species"
        options={speciesOptions}
        placeholder="Todos"
      />

      <button type="button">Reiniciar Escáner</button>
    </div>
  );
}
