'use client'
import React from 'react';
import ReactPlayer from 'react-player';

function MatIntro() {
  return (
    <div className='bg-slate-500'>
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="p-4 mb-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Educação Financeira</h1>
          <p className="text-white">
          Numa roda de conversa, a partir das ideias presentes no Livro do Estudante, coloque em discussão termos como orçamento, despesa, custo, renda. Permita que todos os estudantes falem, estimulando os mais tímidos e organizando a participação de cada um. Sugerimos que você utilize o Google Jamboard para coletar as respostas dos estudantes on-line. Assim, todos poderão participar. Você pode fazer as seguintes perguntas: O que é orçamento? Você saberia dizer o valor da despesa mensal da sua família? Quanto você acredita que é o valor ideal de renda para uma família de 4 pessoas? Você se baseou em quais cálculos para concluir essa resposta? Você também pode criar um Formulário Google para coletar as respostas de forma assíncrona e poder discuti-las depois com os estudantes.
          </p>
        </div>
        <div className="attention-box mx-8 text-slate-800 text-center text-lg border-2 border-primary rounded-lg p-8">
              <h1 className="text-4xl font-semibold text-slate-700 mb-4">Atividades Extras</h1>
                <p>
                    Acesse as <a href="https://exerciciosextras9o.beieducacaopedagogico.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800"> atividades extras</a>{' '}que vão além do conteúdo presente nos livros físicos. Aqui você poderá acessar e baixar PDFs com atividades para cada capítulo, dando um passo além no ensino de habilidades matemáticas.
                </p>
                
              </div>
        <div className="p-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4">
            <h1 className="text-2xl font-bold text-white mb-4 px-8">Você também pode apresentar o seguinte vídeo para os estudantes:</h1>
          </div>
          <div className="w-full md:w-1/2">
            <ReactPlayer url='https://www.youtube.com/watch?v=IUL-yASGlU8' width="100%" />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default MatIntro;



