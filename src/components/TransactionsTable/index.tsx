import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 10.000,00</td>
            <td>Venda</td>
            <td>15/01/2021</td>
          </tr>
          <tr>
            <td>Hamburger</td>
            <td className="withdraw">- R$ 50,00</td>
            <td>Alimentação</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Moradia</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 5.000,00</td>
            <td>Venda</td>
            <td>10/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
