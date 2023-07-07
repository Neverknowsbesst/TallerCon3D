import React from 'react';

const PageSwitcher = () => {
  const redirectToPage1 = () => {
    window.location.href = '/'; // Reemplaza '/page1' con la URL de la primera página
  };

  const redirectToPage2 = () => {
    window.location.href = '/cuestionario'; // Reemplaza '/page2' con la URL de la segunda página
  };

  return (
    <div>
      <button className="transition px-4 py-2 text-customGradientStart rounded-full border-2 border-customGradientStart font-bold duration-300 ease-in-out bg-customGradientEnd hover:bg-customGradientStart hover:text-customGradientEnd hover:border-customGradientEnd transform hover:-translate-y-0.2 hover:scale-11" onClick={redirectToPage1}>
        Componentes
      </button>
      <button className="transition px-4 py-2 text-customGradientStart rounded-full border-2 border-customGradientStart font-bold duration-300 ease-in-out bg-customGradientEnd hover:bg-customGradientStart hover:text-customGradientEnd hover:border-customGradientEnd transform hover:-translate-y-0.2 hover:scale-11" onClick={redirectToPage2}>
        Recomendaciones
      </button>
    </div>
  );
};

export default PageSwitcher;
