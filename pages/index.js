"use client";
import Navbar from './Navbar';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ObjetoThree from "./ObjetoThree";


const buttons = [
  {
    name: 'button1',
    text: 'GPU',
    modelUrl: 'earth/scene.glb',
    description: `La tarjeta de video, también conocida como tarjeta gráfica es la responsable de procesar las imágenes y los gráficos en el computador.  La tarjeta de video tiene su propio procesador, memoria de video y controlador de pantalla, lo que la hace capaz de procesar y mostrar gráficos de alta calidad en la pantalla. Cuando se ejecuta un programa o aplicación que utiliza gráficos intensivos, esta tarjeta procesa la información y la envía al monitor para mostrar las imágenes.

    La tarjeta de video también es responsable de manejar la resolución y la calidad de las imágenes que se muestran en la pantalla. Si una tarjeta de video no es lo suficientemente potente, puede haber retrasos en la visualización de las imágenes y los vídeos, y la calidad de la imagen puede ser inferior a lo esperado.

    En los últimos años, las tarjetas de video también se han utilizado para tareas de cómputo intensivas, como la minería de criptomonedas, el aprendizaje automático y la simulación de juegos. En estas aplicaciones, la tarjeta de video se utiliza para procesar grandes cantidades de datos en paralelo, lo que la hace mucho más rápida y eficiente que una CPU normal.
    `,
  },
  {
    name: 'button2',
    text: 'CPU',
    modelUrl: 'earth/scene.glb',
    description: `Es el cerebro del computador, es responsable de procesar y ejecutar instrucciones. La CPU está compuesta por un conjunto de circuitos integrados y se encarga de realizar cálculos matemáticos y lógicos.
  
    El procesador, también conocido como unidad central de procesamiento (CPU, por sus siglas en inglés), es el componente principal de una computadora que realiza la mayoría de las operaciones de procesamiento de datos.
    
    La función principal del procesador es procesar las instrucciones que recibe de otros componentes de la computadora, como la memoria y los dispositivos de entrada y salida. Estas instrucciones se conocen como código de máquina y están compuestas por una serie de ceros y unos que representan diferentes operaciones y datos.
    
    El procesador lee estas instrucciones de la memoria, las decodifica y ejecuta las operaciones correspondientes. Las operaciones pueden incluir sumar, restar, multiplicar, dividir, comparar y transferir datos.
    
    Además de procesar las instrucciones, el procesador también es responsable de administrar y coordinar el funcionamiento de todos los componentes de la computadora. Por ejemplo, puede controlar la velocidad a la que se ejecutan las instrucciones y la cantidad de energía que se consume.`,
  },
  {
    name: 'button3',
    text: 'MOBO',
    modelUrl: 'earth/scene.glb',
    description: ` La placa base, también conocida como motherboard, es el componente principal de la computadora que conecta todos los demás componentes y les permite comunicarse entre sí. En la tarjeta madre se encuentra la CPU, la memoria RAM, el disco duro y otras tarjetas de expansión, como la tarjeta de video y la tarjeta de sonido.

    La placa base es un circuito impreso que contiene varios componentes importantes, como el procesador, la memoria RAM, los puertos de entrada y salida, las ranuras de expansión y los controladores de dispositivos. La placa base también proporciona el suministro de energía a los componentes de la computadora.

    Además de conectar los componentes de la computadora, la placa base también controla el flujo de datos y la comunicación entre ellos. Por ejemplo, el procesador se comunica con la memoria RAM a través del bus de datos en la placa base. La placa base también tiene un BIOS (Sistema Básico de Entrada/Salida), que proporciona una interfaz entre el hardware y el sistema operativo.`
  }
  ,
  {
    name: 'button4',
    text: 'PSU',
    modelUrl: 'earth/scene.glb',
    description: `Es el componente que proporciona energía eléctrica a todos los componentes del computador. La fuente de poder se conecta a la placa base y a todos los demás componentes, y su capacidad se mide en vatios (W).
    
    La mayoría de las fuentes de poder modernas tienen una eficiencia del 80% o más, lo que significa que convierten al menos el 80% de la energía eléctrica que reciben en energía útil para la computadora.
    
    La fuente de poder también protege los componentes de la computadora contra sobretensiones y cortocircuitos. Por ejemplo, si hay un cortocircuito en algún componente, la fuente de poder detectará este problema y cortará el suministro de energía a ese componente para evitar daños.
    
    Además, también puede tener características adicionales, como ventiladores para mantenerla fresca y silenciosa, y cables de alimentación para conectar los componentes de la computadora.
    
    Es importante tener en cuenta que la capacidad de la fuente de poder debe ser suficiente para alimentar todos los componentes de manera efectiva. Si la fuente de poder no es lo suficientemente potente, la computadora puede experimentar fallos y problemas de rendimiento.`,
  },
  {
    name: 'button5',
    text: 'COOLER',
    modelUrl: 'earth/scene.glb',
    description: `El disipador de calor es un componente que se utiliza en la computadora para disipar el calor generado por el procesador. El procesador es uno de los componentes que genera más calor en la computadora debido a su alta capacidad de procesamiento. Si el procesador se calienta demasiado, puede dañarse permanentemente y hacer que la computadora falle.
    
    El disipador de calor se compone de dos partes: el disipador en sí y el ventilador. El primero de estos es una pieza de metal que está en contacto directo con el procesador y se utiliza para absorber el calor generado por él. La mayoría de los disipadores están hechos de aluminio o cobre, que son buenos conductores de calor.
    
    El ventilador, por su parte, se encarga de llevar el aire fresco al disipador para que éste pueda disipar el calor. La mayoría de los disipadores de calor tienen un ventilador de alta velocidad montado en la parte superior de éste, que empuja el aire a través de las aletas del disipador para enfriar el metal y reducir la temperatura del procesador.
    
    Es importante tener en cuenta que el disipador de calor debe estar instalado correctamente para que sea efectivo. Si el disipador está mal instalado o no está en contacto directo con el procesador, no podrá disipar el calor de manera efectiva.`,
  },
  {
    name: 'button6',
    text: 'GABINETE',
    modelUrl: 'earth/scene.glb',
    description: `El gabinete, también conocido como chasis, es la carcasa que protege y alberga todos los componentes internos de una computadora, como la placa base, la fuente de alimentación, el disco duro, la tarjeta de video, entre otros.
    
    El gabinete de una computadora tiene varias funciones importantes. En primer lugar, proporciona protección física a los componentes de la computadora contra golpes, polvo y otros contaminantes del ambiente. También ayuda a reducir el ruido que emiten los componentes, ya que está diseñado para absorber el ruido y minimizar su transmisión al exterior.
    
    Además, el gabinete proporciona un espacio para la gestión de cables, lo que ayuda a mantener los cables organizados y a reducir el desorden dentro de la computadora. Esto facilita la identificación de los cables y la sustitución de los componentes.
    
    Otra función importante del gabinete es la ventilación. Los componentes internos de la computadora, como la CPU y la tarjeta de video, generan mucho calor durante su funcionamiento. Por lo tanto, el gabinete debe estar diseñado de manera que permita la entrada de aire fresco y la salida del aire caliente. Para lograr esto, el gabinete tiene ventiladores en la parte delantera, trasera o superior que ayudan a disipar el calor y mantener los componentes internos a una temperatura adecuada. El gabinete también puede tener puertos USB y conectores de audio en la parte frontal para una fácil conexión de periféricos externos, como discos duros externos, micrófonos y auriculares.`,
  },
  {
    name: 'button7',
    text: 'RAM',
    modelUrl: 'earth/scene.glb',
    description: `Es la memoria principal del computador, donde se almacenan temporalmente los datos que están siendo utilizados por el sistema operativo y los programas. La RAM es esencial para el rendimiento del computador y su capacidad se mide en gigabytes (GB).

    La memoria RAM (Random Access Memory) es un tipo de memoria volátil que se utiliza para almacenar temporalmente los datos y programas que la computadora está utilizando.

    La RAM es esencial para el rendimiento de la computadora, ya que permite al procesador acceder rápidamente a los datos necesarios para ejecutar programas y realizar operaciones. Cuanta más RAM tenga una computadora, más rápido podrá ejecutar programas y operaciones.

    Cuando se ejecuta un programa, se carga en la RAM desde el almacenamiento permanente (como el disco duro) para que pueda ser procesado por el procesador. La RAM es mucho más rápida que el almacenamiento permanente, lo que significa que el procesador puede acceder a los datos del programa y trabajar con ellos mucho más rápido.

    Además, la RAM también se utiliza para el almacenamiento temporal de datos de trabajo. Por ejemplo, si se está editando un documento en un procesador de texto, los cambios se guardan en la RAM hasta que se guarda el documento en el almacenamiento permanente.

    Es importante tener en cuenta que la RAM es volátil, lo que significa que pierde su contenido cuando se apaga la computadora. Por lo tanto, cualquier dato o programa que no se haya guardado en el almacenamiento permanente se perderá al apagarse el equipo.
    `,
  },
  {
    name: 'button8',
    text: 'SSD/HDD',
    modelUrl: 'earth/scene.glb',
    description: `Es el dispositivo de almacenamiento principal del computador, donde se guardan todos los archivos y programas. El disco duro es una unidad de almacenamiento magnético y su capacidad se mide en gigabytes (GB) o terabytes (TB).

    El almacenamiento en una computadora se refiere al espacio donde se guardan los datos y programas de forma permanente o temporal. Hay diferentes tipos de dispositivos de almacenamiento, cada uno con sus propias características y funciones.

    Los dispositivos de almacenamiento más comunes en las computadoras son los discos duros y los discos sólidos (SSD). Estos dispositivos proporcionan un almacenamiento no volátil, lo que significa que la información almacenada permanece en el dispositivo incluso cuando la computadora se apaga.

    El disco duro es un dispositivo de almacenamiento magnético que utiliza discos giratorios y cabezas de lectura/escritura para leer y escribir datos en el disco. El disco duro es generalmente más grande y económico que un SSD, pero también es más lento en términos de acceso y transferencia de datos.

    El disco sólido o SSD, por otro lado, utiliza memoria flash para almacenar datos. Es más rápido y consume menos energía que un disco duro, lo que hace que sea una buena opción para mejorar el rendimiento de la computadora.
    `,
  },
  // aqui agregamos mas botones con sus atributos
];

export default function Page() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButtonInfo, setSelectedButtonInfo] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    const buttonInfo = buttons.find((button) => button.name === buttonName);
    setSelectedButtonInfo(buttonInfo);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar buttons={buttons} handleButtonClick={handleButtonClick} />
      </div>
        {selectedButtonInfo && (
          <div className="box-container w-[50%]">
            <div className="flex border-1 border-[#edf5e0] items-center justify-center bg-inherit p-4">
              <div className="w-1/2">
              <ObjetoThree modelPath={selectedButtonInfo.modelUrl} />
              </div>
              <div className="w-1/2">
                <div className="text-lg font-bold text-[#112d32] mb-2">{selectedButtonInfo.text}</div>
                <p className="text-sm whitespace-pre-line">{selectedButtonInfo.description}</p>
              </div>
            </div>
          </div>
        )}
      
    </main>
  );
}