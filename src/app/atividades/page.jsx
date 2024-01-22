'use client'

import AtiPrimeiraEtapa from '../components/Atividades/AtiPrimeiraEtapa'
import AtiFerramentas from '../components/Atividades/AtiFerramentas'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiDiagnostico2 from '../components/Atividades/AtiDiagnostico2'
import AtiDica from '../components/Atividades/AtiDica'
import AtivHero from '../components/Atividades/AtivHero'

import AtiProfessores from '../components/Atividades/AtiProfessores'
import AtiDiag1 from '../components/Atividades/AtiDiag1'
import AtiDiagEstudAcc from '../components/Atividades/AtiDiagEstudAcc'
import AtiCardsEstud from '../components/Atividades/AtiCardsEstud'


function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiPrimeiraEtapa />
        <AtiProfessores />
        <AtiDiag1 />
        
        <AtiDiagnostico2 />
        <AtiFerramentas />
        
        <AtiDica />
        <AtiDiagEstudAcc />
        <AtiCardsEstud />
        <AtiSugestao />
        
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades