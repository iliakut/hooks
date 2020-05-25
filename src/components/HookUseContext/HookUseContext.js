import React, {useContext} from "react";
import TestContext from './context'

const HookUseContext = () => {
  const value = useContext(TestContext);

  /*
  * хук useContext заменяет функционал <MyContext.Consumer>
  * контекст создается и записывается также как и раньше
  * а считывается проще - непосредственно в компоненте
  */
  return (
    <div>{value}</div>
  );
};

export default HookUseContext;
