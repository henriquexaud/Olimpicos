// src/components/LocationForm.tsx
import React, { useState } from 'react';
import Select from 'react-select';

// Opções de esportes para seleção
const sportsOptions = [
  { value: 'Futebol', label: 'Futebol' },
  { value: 'Basquete', label: 'Basquete' },
  { value: 'Vôlei', label: 'Vôlei' },
  { value: 'Tênis', label: 'Tênis' },
  { value: 'Skate', label: 'Skate' },
  { value: 'Natação', label: 'Natação' },
  { value: 'Ciclismo', label: 'Ciclismo' },
  { value: 'Corrida', label: 'Corrida' },
  { value: 'Outros', label: 'Outros' }
];

// Opções de categorias para seleção
const categoryOptions = [
    { value: 'Quadra', label: 'Quadra' },
  { value: 'Academia', label: 'Academia' },
  { value: 'Pista de Skate', label: 'Pista de Skate' },
  { value: 'Pista de Atletismo', label: 'Pista de Atletismo' },
  { value: 'Piscina', label: 'Piscina' },
  { value: 'Outros', label: 'Outros' }
];

interface LocationFormProps {
  onClose: () => void;
}

const LocationForm: React.FC<LocationFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [modalities, setModalities] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [schedule, setSchedule] = useState('');

  const handleModalitiesChange = (selectedOptions: any) => {
    setModalities(selectedOptions);
  };

  const handleCategoriesChange = (selectedOptions: any) => {
    setCategories(selectedOptions);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio dos dados
    console.log({ name, description, modalities, categories, schedule });
    onClose(); // Fecha o sidebar secundário após o envio
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Descrição:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Modalidade:
        <Select
          isMulti
          name="modalities"
          options={sportsOptions}
          value={modalities}
          onChange={handleModalitiesChange}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Selecione as modalidades"
        />
      </label>
      <label>
        Infraestrutura:
        <Select
          name="categories"
          options={categoryOptions}
          value={categories}
          onChange={handleCategoriesChange}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Selecione as categorias"
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default LocationForm;
