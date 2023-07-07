"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageSwitcher from './switch';

const Cuestionario = () => {
  const { register, handleSubmit } = useForm();
  const [respuestas, setRespuestas] = useState([]);

  const pregunta = {
    pregunta: '¿Cuál es tu color favorito?',
    opciones: [
      { opcion: 'Rojo', respuesta: 'Tu color favorito es el rojo.' },
      { opcion: 'Azul', respuesta: 'Tu color favorito es el azul.' },
      { opcion: 'Verde', respuesta: 'Tu color favorito es el verde.' },
      { opcion: 'Rojo1', respuesta: 'Tu color favorito es el rojo.' },
      { opcion: 'Azul1', respuesta: 'Tu color favorito es el azul.' },
      { opcion: 'Verde1', respuesta: 'Tu color favorito es el verde.' },
      { opcion: 'Rojo2', respuesta: 'Tu color favorito es el rojo.' },
      { opcion: 'Azul2', respuesta: 'Tu color favorito es el azul.' },
      { opcion: 'Verde2', respuesta: 'Tu color favorito es el verde.' },
      { opcion: 'Rojo3', respuesta: 'Tu color favorito es el rojo.' },
      { opcion: 'Azul3', respuesta: 'Tu color favorito es el azul.' },
      { opcion: 'Verde3', respuesta: 'Tu color favorito es el verde.' },
    ],
  };

  const onSubmit = (data) => {
    const opcionesSeleccionadas = pregunta.opciones.filter(
      (opcion) => data[opcion.opcion]
    );
    const nuevasRespuestas = opcionesSeleccionadas.map((opcion) => opcion.respuesta);
    setRespuestas(nuevasRespuestas);
  };

  const renderRespuestas = () => {
    if (respuestas.length > 0) {
      return (
        <div>
          {respuestas.map((respuesta, index) => (
            <p key={index}>{respuesta}</p>
          ))}
        </div>
      );
    } else {
      return <p>No se ha seleccionado ninguna opción.</p>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="fixed bottom-3 left-3 hover:scale-110 transform transition duration-300">
      <object data="meteor-solid.svg" width="90" height="90"> </object>
      </div>
    <div className="fixed top-0 left-0 z-50">
        <div className=" text-white p-4">
          <PageSwitcher />
        </div>
      </div>
      <h1 className="text-2xl mb-5 mr-0">Cuestionario</h1>
      <p className="mb-10 text-customGradientOtro">aaaaaaaaaaaaa a a a aaaaaaaaaaaaaa a a aaaaaaaaa</p>
      <div className="flex w-4/5 ml-4 border-2 border-customGradientOtro border-spacing-1000 bg-gradient-to-b from-customGradientEnd to-customGradientOtro">
        <div className="w-1/2 pr-4 mr-4">
          <form className="mb-4 m-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>{pregunta.pregunta}</p>
              {pregunta.opciones.map((opcion, opcionIndex) => (
                <label className="flex items-center mt-2" key={opcionIndex}>
                  <input
                    type="checkbox"
                    {...register(opcion.opcion)}
                    className="mr-2 appearance-none rounded-full border-3 border-white bg-customGradientOtro checked:bg-customGradientStart checked:border-customGradientEnd checked:text-customGradientEnd focus:outline-none focus:ring focus:border-customGradientStart w-6 h-6"
                  />
                  <span className="ml-2 text-white">{opcion.opcion}</span> 
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="transition px-4 py-2 rounded-full border-2 border-customGradientStart font-bold duration-300 ease-in-out bg-customGradientEnd hover:bg-customGradientStart hover:text-customGradientEnd hover:border-customGradientEnd transform hover:-translate-y-0.2 hover:scale-11"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-4">
          {renderRespuestas()}
        </div>
      </div>
    </div>
  );
};

export default Cuestionario;
