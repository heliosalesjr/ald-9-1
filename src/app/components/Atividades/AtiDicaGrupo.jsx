import React from 'react'
import { FaStarOfLife } from "react-icons/fa";

function AtiDicaGrupo() {
    return (
        <div className="relative w-full">
         
          <div className="absolute inset-0 bg-gradient-to-br from-primary-focus to-primary"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('images/grupo.jpg')",
            }}
          ></div>
    
            <div className="absolute inset-0 bg-gradient-to-tl from-primary to-primary-focus opacity-80"></div>
    
         
          <div className="relative z-10 text-white text-center py-20 max-w-3xl mx-auto">
            <div className='border-white border-3 rounded-xl p-4'>

                <p className="font-bold px-8 pb-8">
                Os trabalhos neste programa se dirigem ao Projeto Coletivo. Assim, quando surgem demandas individuais, elas precisam ser reconhecidas por todos como algo importante, a que os estudantes podem se dedicar pessoalmente, mas que não será trabalhado diretamente nas aulas deste programa.
                </p>
                <FaStarOfLife className='text-center mx-auto'/>
                <p className="font-gray-800 mt-4 pt-4">
                Veja 
                <a href="https://drive.google.com/file/d/1B8Gn-3hdrSRqI7g_1a9RCURcSgBGDvd0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline"> aqui </a> como as turmas do professor Carlos e professora Jussara definiram os temas de seus Projetos Coletivos com a ajuda das ferramentas de diagnóstico. Você pode conferir também como os alunos do professor Carlos nomearam seu projeto,  veja 
                <a href="https://drive.google.com/file/d/1K9h7_SuGK2jFfYpZ8BGrrf-4BFDGiOi_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline"> aqui</a>.
                </p>
            </div>
            
          </div>
        </div>
      );
    };

export default AtiDicaGrupo