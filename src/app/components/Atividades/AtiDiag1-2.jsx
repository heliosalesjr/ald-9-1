import React from "react";
import { Card, CardBody } from "@nextui-org/react";

function AtiDiag1part2() {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus flex justify-center items-center pt-4 pb-4">
      <div className="flex justify-center items-center">
        <div className="flex mx-auto ">
          <Card className="m-8 hover:scale-105 transition-transform duration-300">
            <CardBody className="flex justify-center items-center h-full">
              <p className="text-center">
                Antes, porém, avise aos estudantes que o objetivo é saber o que eles já conhecem e não atribuir nota,
                porque assim eles se sentirão mais confortáveis com o livro e o projeto que vão realizar. Para detectar
                competências e habilidades, um bom ponto de partida é pensar: “Que conteúdos prévios são necessários para
                abordar esses temas de Educação Financeira e Matemática?”.
              </p>
            </CardBody>
          </Card>

          <Card className="m-8 hover:scale-105 transition-transform duration-300">
            <CardBody className="flex justify-center items-center h-full">
              <p className="text-center">
                Para realizar este diagnóstico, você poderá elaborar uma sondagem por meio do Formulários Google e enviá-la
                aos estudantes via Google Sala de Aula, deixando o link disponível na aba "Atividades" da turma
                correspondente. Você poderá visualizar os resultados de forma assíncrona, à medida que os jovens realizam
                as atividades. Como todas as respostas ficarão disponíveis em seu Google Drive, você poderá acessá-las
                sempre que necessário ao longo do projeto. Você pode se inspirar em um modelo clicando aqui.
              </p>
            </CardBody>
          </Card>

          <Card className="m-8 hover:scale-105 transition-transform duration-300">
            <CardBody className="flex justify-center items-center h-full">
              <p className="text-center">
                Importante: não envie esse formulário para seus alunos. Você precisa criar o seu para conseguir acessar as
                respostas. Caso você envie o link do modelo para seus estudantes, não teremos como identificar quais foram
                as respostas da sua turma.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AtiDiag1part2;
