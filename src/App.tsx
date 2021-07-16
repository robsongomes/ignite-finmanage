import { createServer, Model } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

createServer({
  namespace: "api/",

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.create("transaction", {
      id: "1",
      title: "Computador",
      type: "deposit",
      amount: 5000,
      category: "venda",
      createdAt: new Date().toISOString(),
    });
  },

  routes() {
    this.get("transactions", (schema) => schema.all("transaction"));
    this.post("transactions", (schema, request) => {
      let transaction = JSON.parse(request.requestBody);
      return schema.create("transaction", transaction);
    });
  },
});

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
