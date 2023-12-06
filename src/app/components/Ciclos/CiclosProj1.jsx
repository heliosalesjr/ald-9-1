'use client'
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';

function CiclosProj1() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl py-8">
        <h1 className="font-bold text-2xl md:text-5xl sm:text-3xl text-gray-700 py-4 text-center">
          Ciclos de Projeto
        </h1>
        <p className="mt-4 p-4 text-gray-800">
          São diagramas contendo a sequência de etapas a serem desenvolvidas tanto por você, professor, quanto pelos
          estudantes. O Ciclo de Projeto é uma forma interessante de visualizar uma atividade que precisa ser bem
          planejada – com começo, meio e fim – para alcançar os objetivos almejados. Vamos conhecer esta ferramenta?
        </p>
      </div>

      <motion.div
        className="flex flex-col md:flex-row gap-4 mx-auto max-w-screen-xl pb-12"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Card className="px-4">
          <CardBody className="flex flex-col justify-center">
            <h1 className="text-lg font-bold py-2">Ciclo de Projeto do Educador</h1>
            <p>
              O Ciclo de Projeto do Educador é a ferramenta de planejamento voltada para o professor e mostra como o
              docente deve iniciar o seu planejamento, passando pelas etapas 1 (Definição de conteúdos), 2 (Diagnóstico
              e perfil da turma) e 3 (Montagem e apresentação do PDA) antes que os estudantes iniciem seu próprio
              Projeto Coletivo. Posteriormente, seguem-se as etapas 4 (Execução das atividades), 5 (Avaliação de
              resultados) e 6 (Culminância). Nestas, os estudantes estarão desenvolvendo seu próprio projeto.
            </p>
            {/* Adicionando a imagem cpeducador.jpg após o texto do primeiro card */}
            <img src="/images/cpeducador.jpg" alt="Ciclo de Projeto do Educador" className="mt-8 px-12" />
          </CardBody>
        </Card>
        <Card className="px-4">
          <CardBody className="flex flex-col justify-center">
            <h1 className="text-lg font-bold py-2">Ciclo do Projeto Coletivo</h1>
            <p>
              O Ciclo do Projeto Coletivo é a ferramenta de planejamento voltada para os estudantes para a Escolha de
              temas (Etapa 1), Diagnóstico (Etapa 2) e Plano de ação (Etapa 3) antes dele começar a ser executado sob
              sua orientação durante as aulas. Depois, você pode aproveitar os desafios da prática para abordar os
              conteúdos programados nas etapas seguintes do projeto dos estudantes: 4 (Execução das atividades), 5
              (Avaliação de resultados) e 6 (Culminância).
            </p>
            {/* Adicionando a imagem cpcoletivo.png após o texto do segundo card */}
            <img src="/images/cpcoletivo.png" alt="Ciclo do Projeto Coletivo" className="mt-4 px-8" />
          </CardBody>
        </Card>
      </motion.div>
    </>
  );
}

export default CiclosProj1;
