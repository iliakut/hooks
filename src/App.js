import React from 'react';
import HookSwitcher from "./components/HookSwitcher/HookSwitcher";
import HookUseContext from "./components/HookUseContext/HookUseContext";
import TestContext from './components/HookUseContext/context'
import UseEffectDescription from "./components/HookUseEffect/useEffectDescription";

function App() {
  return (
    <div>
      <HookSwitcher/>
      <TestContext.Provider value={'test value'}>
        <HookUseContext/>
      </TestContext.Provider>
      <UseEffectDescription/>
    </div>
  );
}

export default App;
