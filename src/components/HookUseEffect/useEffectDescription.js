import React, {useState} from "react";
import TestClassComponent from "./testClassComponent";
import TestFuncComponent from "./testFuncComponent";

const UseEffectDescription = () => {
  const [value, setValue] = useState(0);
  const [visible, toggleVisible] = useState(true);

  return (
    <React.Fragment>
      <button onClick={() => setValue(value => value + 1)}>+</button>
      <button onClick={() => toggleVisible(visible => !visible)}>hide</button>

      {
        visible
        ? <div>
            <TestClassComponent test={value}/>
            <TestFuncComponent test={value}/>
          </div>
        : null
      }
    </React.Fragment>
  );
};

export default UseEffectDescription;