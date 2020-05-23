import React, {useContext} from "react";
import TestContext from './context'

const HookUseContext = () => {
  const value = useContext(TestContext);
  return (
    <div>{value}</div>
  );
};

export default HookUseContext;
