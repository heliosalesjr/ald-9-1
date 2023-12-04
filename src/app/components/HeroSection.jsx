import React from 'react';
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto pt-20 h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
          <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
              Aprendendo a Lidar com Dinheiro
            </h1>
            <p className="text-lg text-white py-8">
              Olá, professor e professora! Seja bem-vindo e bem-vinda ao site de apoio da coleção Aprendendo a Lidar com Dinheiro: Educação Financeira. Nesta seção, há informações sobre o que são os sites “Aprendendo a Lidar com Dinheiro” e como estão organizados, facilitando a navegação e consulta. Vamos conhecê-los?
            </p>
          </div>
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="images/9covers.png" alt="Capa" className="px-8 w-[2000px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

