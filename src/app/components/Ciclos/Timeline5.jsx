import { Timeline } from '@material-tailwind/react';
import React from 'react'


function Timeline5() {

    const timelineItems = [
        {
          title: '1. Escolher um assunto',
          description: 'Uma aspiração, questão, sonho... justificando essa escolha.',
        },
        
        {
          title: '2. Fazer um diagnóstico da situação.',
          description: '',
        },
        
        {
            title: '3. Elaborar um Plano de Ação',
            description: 'Isto é, propor atividades e estratégias para atingir os objetivos, incluindo a atribuição de funções, o cronograma e um plano orçamentário.',
        },

        {
            title: '4. Executar as atividades',
            description: 'Que foram planejadas com registros e monitoramento para correção de rota ao longo do processo.',
        },

        {
            title: '5. Avaliar',
            description: 'Ao fim do percurso, em que medida se chegou ao resultado esperado.',
        },

        {
            title: '6. Planejar...',
            description: '...a celebração das conquistas e relatar essa experiência a colegas e demais interessados.',
        },
        
          
        
      ];

  return (
    <>
       
        <Timeline>
            
        </Timeline>
        
        
    </>
  )
}

export default Timeline5