import { createServer } from "miragejs";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

createServer({
  namespace: "api/",
  routes() {
    this.get("transactions", () => [
      {
        id: 1,
        title: "Computador",
        value: 5000,
        category: "Venda",
        type: "Deposit",
        data: new Date(),
      },
    ]);
  },
});

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}
