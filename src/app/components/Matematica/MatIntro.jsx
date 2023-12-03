'use client'
import React from 'react';
import ReactPlayer from 'react-player';

function MatIntro() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="p-4 mb-4">
        <h1 className="text-4xl font-bold mb-4">Educação Financeira</h1>
        <p className="text-md">
          A primeira coisa a fazer em sala de aula será a apresentação do programa aos estudantes. Haverá muitas novidades e os jovens vão ficar curiosos quanto à proposta de um trabalho que associa Matemática e Educação Financeira. Mais ainda, é provável que eles fiquem bastante interessados ao saber que terão a oportunidade de propor e executar um projeto próprio - escolhido e executado por eles mesmos, de modo a obter uma conquista desejada por toda a turma.
        </p>
      </div>

      <div className="p-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-4">
          <h1 className="text-2xl font-bold mb-4 px-8">Você também pode apresentar o seguinte vídeo para os estudantes:</h1>
        </div>
        <div className="w-full md:w-1/2">
          <ReactPlayer url='https://www.youtube.com/watch?v=IUL-yASGlU8' width="100%" />
        </div>
      </div>
    </div>
  );
}

export default MatIntro;



