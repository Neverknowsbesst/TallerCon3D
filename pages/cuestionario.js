"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageSwitcher from './switch';

const Cuestionario = () => {
  const { register, handleSubmit } = useForm();
  const [respuestas, setRespuestas] = useState([]);

  const pregunta = {
    pregunta: 'Seleccione las preguntas que apliquen:',
    opciones: [
      { opcion: '¿Usas el computador para jugar videojuegos?', respuesta: '-)Para jugar videojuegos, sobre todo los más recientes, necesitarías comprar una GPU "dedicada", o sea, una que compras aparte de la CPU y ubicas físicamente en tu computador. La razón es que las GPU se encargan de "correr" las aplicaciones, por lo que si un juego usa muchos recursos, necesitará una con más memoria y frecuencia. Todos los juegos para PC tienen especificaciones de sus requerimientos mínimos y recomendados, así que siempre puedes revisar los de tu juego objetivo.' },
      { opcion: '¿Usas el computador para exclusivamente trabajar en él?', respuesta: '-)Si usas computadoras exclusivamente para trabajar, puedes elegir no comprar una GPU, pero si es el caso, tu CPU debe tener una tarjeta gráfica "integrada". Ésta sirve para usar la placa madre para conectar monitores sin necesidad de una tarjeta gráfica por separado, pero no son suficientemente intensivas para correr juegos modernos.' },
      { opcion: '¿Importa la cantidad de ruido que puedes generar a tu alrededor al usar el computador? ', respuesta: '-)Deberías de fijarte si hay muchos ventiladores en tu gabinete, o si puedes reemplazarlos por opciones más silenciosas, lo que puede necesitar más dinero. También aplica si es que decides comprar Water Cooling a tu CPU, que tambien puede ser ruidoso.' },
      { opcion: '¿Usas/usarías multiples monitores para operar el computador?', respuesta: '-)Para GPU integradas, depende de la cantidad de outputs en tu Placa Madre para la cantidad de monitores que puedas agregar, que incluyen puertos HDMI, VGA, DVI, Display Port, y variaciones entre éstos. Para GPU dedicadas, aplican los mismos conceptos, pero para los puertos de éste.' },
      { opcion: '¿Buscas frecuencias (FPS) altas en tu(s) monitor(es)?', respuesta: '-)Sería vital tener una GPU de alta gama para frecuencias más altas, las cuales puedes ver si soportan dichas frecuencias en casi todas las páginas de compra, ó la página de los desarrolladores. También se requiere un monitor que pueda soportar éstas frecuencias hya que no todos pueden.' },
      { opcion: '¿Almacenas mucha información localmente?', respuesta: '-)Mucha información puede realentizar tu computadora, tanto en cargar aplicaiones como en iniciarla. Para ésto, es mucho mejor tener una SSD (Solid State Drive) tanto en puerto SATA como M2. Son más caras que unas HDD, pero una donde puedas almacenar el sistema operativo junto aplicaciones importantes, basta para no tener largas pantallas de carga. También sería ideal en cualquier computadora, pero es especialmente necesaria en éste caso.' },
      { opcion: '¿Utilizas conexiones inalámbricas para tus dispositivos en general?', respuesta: '-)Para conexiones inalámbricas, sería vital invertir en adaptadores de red de calidad. Existen opciones conectadas por USB, pero es preferible comprar conectadas por PCIe, que están conectadas a la placa madre directamente. Cabe destacar que hay que corroborar que la Placa Madre tenga puerto PCIe para este fin.' },
      { opcion: '¿Prefieres conexiones por cable a las conexiones inalámbricas?', respuesta: '-)Es preferible tener una placa madre con una cantidad decente de puertos USB, y/o que el gabinete los proporcione. Existen "splitters" de USB como opción más económica, pero dependiendo de la demanda de potencia de componentes externos, puede que ésta opción cause mal funcionamiento de éstos.' },
      { opcion: '¿Tienes espacio físico limitado para ubicar el computador donde lo usas?', respuesta: '-)Sería preferible comprar un gabinete pequeño, que se conocen como Mini ATX. Componentes como GPU deben de ser compatibles en tamaño para estos gabinetes, como las que tienen 3 ventiladores que no caben en éstos gabinetes. Otros componentes que deben ser compatibles serían la Placa Madre, Fuente de Poder, y Ventiladores. Tampoco sería posible usar refrigeración líquida ya que éstos usan mucho espacio. Existen opciones de todo tipo para gabinetes pequeños, a veces más caros por lo compacto que deben ser, pero los componentes de más alta gama pueden no estar disponibles por el espacio que necesitaría para ventilación si es que se calienta mucho, o no hacen componentes de esa potencia compatibles por el momento.' },
      { opcion: '¿Donde ubicarías el computador, tienes espacio de sobra?', respuesta: '-)Comprar gabienetes ATX o E-ATX sería ideal para no preocuparse por compatibilidad de espacio de componentes, las últimas siendo las más grandes. Si compras ATX debes de estar al tanto de las dimensiones máximas de componentes de todos modos, ya que las opciones más caras al momento pueden no caber. Puedes darte la libertad de comprar una Placa Madre con más puertos para expandir más adelante si es posible.' },
      { opcion: '¿Comprarías las GPU y/o CPU más nuevos para tu computador?', respuesta: '-)Para las opciones de más alta gama, tener un ventilador de CPU decente es usualmente lo que se necesita, incluso si éstos vienen incluidos con su compra ya que aumentan el tiempo de vida de éste, y si el ventilador es mejor, más aún. Tener buena ventilación interna para una GPU es esencial. Uno logra ésto ubicando ventiladores de forma que el aire fluya hacia afuera con la menor cantidad de obstáculos y mayor espacio entre la GPU y el exterior posible. No es sustancial la mejora de los ventiladores del gabinete, pero ayuda a éste caso de todos modos, asi que deberías de dejar esta mejora para el final si es que alcanza el dinero.'},
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
      <p className="mb-5 font-bold text-xl underline text-customGradientOtro">A continuación hay un cuestionario donde se le va presentar preguntas para recomendar decisiones dependiendo de sus necesidades.</p>
      <div className="flex w-5/6 ml-4 border-2 border-customGradientOtro border-spacing-1000 bg-gradient-to-b from-customGradientEnd to-customGradientOtro">
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
