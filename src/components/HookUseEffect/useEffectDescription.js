import React, {useState} from "react";
import TestClassComponent from "./testClassComponent";
import TestFuncComponent from "./testFuncComponent";
import ExampleNotification from "./exampleNotification";
import ExampleLoadData from "./exampleLoadData";

const UseEffectDescription = () => {
  const [value, setValue] = useState(1);
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
            <ExampleNotification/>
          </div>
        : null
      }
      <ExampleLoadData id={value}/>
    </React.Fragment>
  );
};

export default UseEffectDescription;
