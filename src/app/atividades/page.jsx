'use client'

import AtiPrimeiraEtapa from '../components/Atividades/AtiPrimeiraEtapa'
import AtiFerramentas from '../components/Atividades/AtiFerramentas'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiDiagnostico2 from '../components/Atividades/AtiDiagnostico2'
import AtiDica from '../components/Atividades/AtiDica'
import AtivHero from '../components/Atividades/AtivHero'
import Divider from '../components/Divider'
import AtiProfessores from '../components/Atividades/AtiProfessores'
import AtiDiag1 from '../components/Atividades/AtiDiag1'
import AtiDiag1part2 from '../components/Atividades/AtiDiag1-2'
import TestingScroll from '../components/Atividades/TestingScroll'


function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiPrimeiraEtapa />
        <AtiProfessores />
        <AtiDiag1 />
        <AtiDiag1part2  />
        <AtiDiagnostico2 />
        <AtiFerramentas />
        <TestingScroll />
        <AtiDica />
        
        <AtiSugestao />
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades