import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface EditFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;  
  editingFood: EditFood;
  setIsOpen: () => void;
  handleUpdateFood: (data:EditFood) => void;
}

function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditFoodProps) {  
  const formRef = useRef(null); 
  
  const handleSubmit = async (data: EditFood) => {
    handleUpdateFood(data);
    setIsOpen();
  }; 

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
  
};

export default ModalEditFood;