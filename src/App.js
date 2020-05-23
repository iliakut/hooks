import React from 'react';
import HookSwitcher from "./components/HookSwitcher/HookSwitcher";
import HookUseContext from "./components/HookUseContext/HookUseContext";
import TestContext from './components/HookUseContext/context'

function App() {
  return (
    <div>
      <HookSwitcher/>
      <TestContext.Provider value={'test value'}>
        <HookUseContext/>
      </TestContext.Provider>
    </div>
  );
}

export default App;
