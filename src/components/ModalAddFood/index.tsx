import { Component, createRef, FormEvent, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: () => void;
}

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  // constructor(props) {
  //   super(props);

  //   this.formRef = createRef();
  // }

  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  async function handleSubmit(){    
    handleAddFood();

    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input           
          name="image" 
          placeholder="Cole o link aqui"                    
        />

        <input 
          type="text"
          name="name" 
          placeholder="Ex: Moda Italiana" 
          value={name} 
          onChange={event => setName(event.target.value)} 
        />

        <input 
          type="number"
          name="price" 
          placeholder="Ex: 19.90" 
          value={price} 
          onChange={event => setPrice(Number(event.target.value))} 
        />

        <input 
          type="text"
          name="description" 
          placeholder="Descrição" 
          value={description} 
          onChange={event => setDescription(event.target.value)} 
        />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );  
};

export default ModalAddFood;
