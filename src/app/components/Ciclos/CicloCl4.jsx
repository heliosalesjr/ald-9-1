import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

const CicloCl4 = () => {
  const cardData = [
    { title: "Card 1 - Lado Esquerdo", content: "Conteúdo do Card 1" },
    { title: "Card 2 - Lado Direito", content: "Conteúdo do Card 2" },
    { title: "Card 3 - Lado Esquerdo", content: "Conteúdo do Card 3" },
    { title: "Card 4 - Lado Direito", content: "Conteúdo do Card 4" },
    { title: "Card 5 - Lado Esquerdo", content: "Conteúdo do Card 5" },
    { title: "Card 6 - Lado Direito", content: "Conteúdo do Card 6" },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <div
        key={index}
        className={`w-full md:w-1/2 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}
        style={{ Width: '200px' }}
      >
        <Card className="h-full">
          <CardBody className='bg-purple-300 flex flex-col justify-center items-center'>
            <h1 className="text-center font-bold">{card.title}</h1>
            <p className="text-center">{card.content}</p>
          </CardBody>
        </Card>
      </div>
    ));
  };

  return (
    <>
        <div>
            <h1>HOLA Q TALE</h1>
        </div>
        <div className="max-w-2xl mx-auto">
        <div className="grid md:flex md:flex-col">
            {renderCards()}
        </div>
        </div>
    </>
    
  );
};

export default CicloCl4;




