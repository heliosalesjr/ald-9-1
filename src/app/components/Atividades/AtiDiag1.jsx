import React from 'react';

const AtiDiag1 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Parte esquerda */}
      <div className="md:w-2/3 p-8">
        <h1 className="font-semibold text-2xl md:text-4xl sm:text-3xl text-gray-700 py-8">Diagnóstico 1: Conhecimentos prévios de Educação Financeira e Matemática</h1>
        <p className='px-4'>
          Com este diagnóstico, é possível avaliar até que ponto os estudantes dominam os conteúdos que são pré-requisitos
          para a aplicação deste programa. Se os jovens não dominam conhecimentos básicos, não adianta avançar com o programa
          sem resolver as dificuldades prévias. Nesse caso, é preciso adotar estratégias para recuperar o conhecimento de forma
          que todos possam avançar no aprendizado, especialmente ao aplicar os conceitos nos casos de uso do dinheiro e educação
          financeira. Portanto, com esse primeiro diagnóstico, você consegue ao mesmo tempo:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Avançar nos conteúdos de Matemática e Educação Financeira;</li>
          <li>Recuperar alguns pré-requisitos de Matemática para quem ainda não os domina.</li>
        </ul>
      </div>

      {/* Parte direita */}
      <div className="md:w-1/3 flex justify-center">
        <img src="images/ati_mat_teacher.png" alt="Ati Math Teacher" className="max-w-md max-h-md p-8 object-cover p-4" />
      </div>
    </div>
  );
};

export default AtiDiag1;

