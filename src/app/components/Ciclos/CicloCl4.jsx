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
            <h1 className="text-center font-bold text-primary-focus">{card.title}</h1>
            <p className="text-center">{card.content}</p>
          </CardBody>
        </Card>
      </div>
    ));
  };

  return (
    <>
        <div className='bg-primary-focus'>
            <h1>HOLA Q TALE</h1>
            
            <div className="max-w-2xl mx-auto">
                <div className="grid md:flex md:flex-col">
                    {renderCards()}
                </div>
            </div>
        </div>
    </>
    
  );
};

export default CicloCl4;




