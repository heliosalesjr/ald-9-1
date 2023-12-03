import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


const rows = [
  {
    key: "1",
    name: "Consumo sustentável e economia circular",
    role: "1. Como consumir de maneira sustentável? 2. Como não gastar mais do que recebemos?",
    status: "I - Diagnóstico. II - Conteúdos e habilidades. III - Planejamento.",
    location: "Porcentagens. / Notação científica. / Volume de bloco retangular e medidas de capacidade. / Princípio multiplicativo da contagem.",
    department: "Ferramentas Google. Mapa conceitual.",
  },
];

const columns = [
  {
    key: "name",
    label: "Parte do Quadro Geral",
  },
  {
    key: "role",
    label: "Capítulos do Livro do Estudante",
  },
  {
    key: "status",
    label: "Atividades do Projeto",
  },
  {
    key: "location",
    label: "Matemática e Educação Financeira",
  },
  {
    key: "department",
    label: "Recursos Didáticos",
  },
];

export default function IntroTabela() {
  return (

    <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="py-8">
        <h1 className="font-bold text-2xl md:text-5xl sm:text-3xl text-gray-700 py-4 text-center">Site 1</h1>
        <p className="p-8 mb-4 text-center">Vamos ver quais Etapas do Projeto, temas de Matemática e ferramentas didáticas serão tratadas neste site:</p>
      
      <Table aria-label="Example table with dynamic content" style={{ fontSize: "1.2rem" }}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="font-medium text-lg text-white bg-primary">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell style={{ textAlign: "center" }}>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      


    
    </div>
  );
}
