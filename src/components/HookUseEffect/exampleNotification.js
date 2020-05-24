import React, {useEffect, useState} from "react";

const ExampleNotification = () => {
  const [visible, toggleVisible] = useState(true);

  /*
  * если создать таймер и скрыть этот компонент в вышестоящем компоненте
  * то react выдаст предупреждение на утечку памяти, так как таймер ну успел отработать
  * а компонент уже размонтировался
  * нужно дополнительно уничтожить таймер в return функции хука useEffect
  */
  useEffect(() => {
    const timerId = setTimeout(() => { toggleVisible(false) }, 1500);

    return () => {
      clearTimeout(timerId);
    }
  }, []);

  return (
    <div>
      {visible && <p>Hello notification</p> }
    </div>
  );
};

export default ExampleNotification;
