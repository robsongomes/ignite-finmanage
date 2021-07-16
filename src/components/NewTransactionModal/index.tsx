import Modal from "react-modal";
import { Form, RadioButtonBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState, FormEvent } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleNewTransactionSubmitted = async (event: FormEvent) => {
    event.preventDefault();
    const transaction = {
      category,
      title,
      type,
      amount,
      createdAt: new Date().toISOString(),
    };
    await createTransaction(transaction);
    clearModal();
    onClose();
  };

  const clearModal = () => {
    setTitle("");
    setType("");
    setAmount(0);
    setCategory("");
  };

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <Form onSubmit={handleNewTransactionSubmitted}>
        <button className="react-modal-close" onClick={onClose}>
          <img src={closeImg} alt="Fechar" />
        </button>
        <h2>Cadastrar Transação</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <input
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          type="number"
          placeholder="Valor"
        />
        <TransactionTypeContainer>
          <RadioButtonBox
            type="button"
            activeColor="green"
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioButtonBox>
          <RadioButtonBox
            type="button"
            activeColor="red"
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioButtonBox>
        </TransactionTypeContainer>
        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
