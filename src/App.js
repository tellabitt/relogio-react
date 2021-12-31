import React, { useState, useEffect } from 'react';

export default function App() {


 
  const [hora, setHora] = useState(4);
  const [minuto,setMinuto] = useState(59);
  const [segundo,setSegundo] = useState(45);
   // const [segundos,setSegundos] = useState(0);


    useEffect(() => {

      const Interval = setInterval(() => {

        setSegundo(segundo+1);
        if(segundo == 60){
          setSegundo(0);
           setMinuto(minuto+1);
        if(minuto == 60){
          setMinuto(0);
          setHora(hora+1)
        }
       }
      }, 1000);

return () => clearInterval(Interval);
  
    
  });
  
  

  return(
    <div>
     <h2>{hora}:{minuto}:{segundo}</h2>
    </div>
  );
}

