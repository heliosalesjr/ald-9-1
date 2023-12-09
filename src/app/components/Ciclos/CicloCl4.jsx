import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

const CicloCl4 = () => {
  const cardData = [
    { title: "1. Escolher um assunto", content: "Uma aspiração, questão, sonho... justificando essa escolha." },
    { title: "2. Fazer um diagnóstico da situação.", content: "Como você avalia o andamento das coisas?" },
    { title: "3. Elaborar um Plano de Ação", content: "Isto é, propor atividades e estratégias para atingir os objetivos, incluindo a atribuição de funções, o cronograma e um plano orçamentário." },
    { title: "4. Executar as atividades", content: "Que foram planejadas com registros e monitoramento para correção de rota ao longo do processo." },
    { title: "5. Avaliar", content: "Ao fim do percurso, em que medida se chegou ao resultado esperado." },
    { title: "6. Planejar...", content: "...a celebração das conquistas e relatar essa experiência a colegas e demais interessados." },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <div
        key={index}
        className={`w-full md:w-1/2 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}
        style={{ Width: '200px' }}
      >
        <Card className="h-full">
          <CardBody className='flex flex-col justify-center items-center'>
            <h1 className="text-center font-bold text-primary">{card.title}</h1>
            <p className="text-center">{card.content}</p>
          </CardBody>
        </Card>
      </div>
    ));
  };

  return (
    <>
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-700 p-8">
            O Ciclo do Projeto Coletivo
            </h1>
            <p className='pb-8 text-center'>
            Este ciclo, de cor laranja, refere-se às atividades que os alunos deverão desenvolver para o andamento do projeto. São elas:
            </p>
                <div className="max-w-2xl mx-auto">
                    <div className="grid md:flex md:flex-col">
                        {renderCards()}
                    </div>
                </div>
                <p className='mx-8 p-12 max-w-5xl mx-auto text-center'>
                    No Caderno do Educador, você encontra relatos da professora Jussara e do professor Carlos. São histórias fictícias, porém baseadas em fatos, que auxiliam na compreensão da proposta metodológica. 
                    Para conhecer a professora Jussara e sua turma{" "}
                    <a
                        href="https://drive.google.com/file/d/1aOy-Kvy4J_JomVGX9dnIfruMNCKzoUW5/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-500 underline"
                    >
                        clique aqui
                    </a>
                    . Para conhecer o professor Carlos e seus alunos{" "}
                    <a
                        href="https://drive.google.com/file/d/10I3ST_oVOOT5lEGKxzunofwipacrPu7Y/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-500 underline"
                    >
                        clique aqui
                    </a>
                    . Neste 
                    <a
                        href="https://drive.google.com/file/d/1HW3kSZdflvTEPahPWPlQ3Oms1xgJ5GZ1/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-500 underline"
                    > link</a>, 
                    você pode conferir um exemplo de como esses relatos serão utilizados, com o exemplo do relato de culminância dos projetos das turmas de ambos os professores.
                </p>
        </div>
    </>
    
  );
};

export default CicloCl4;




