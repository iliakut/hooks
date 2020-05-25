import React, {useState} from "react";

const HookSwitcher = () => {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);
  /*
  * хук useState создает стейт в функциональном компоненте
  * const [color, setColor] = useState('white');
  * первый параметр color - стейт
  * второй параметр setColor - функция для установки
  */

  return (
    <div style={{
      padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`
    }}>
      Hello world
      <button onClick={() => setColor('gray')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize(size => size + 2)}>Increase font size</button>
    </div>
  );
};

export default HookSwitcher;
