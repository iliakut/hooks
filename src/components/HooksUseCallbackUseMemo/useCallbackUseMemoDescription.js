import React, {useState} from "react";
import UseCallbackUseMemoExample from "./useCallbackUseMemoExample";

const UseCallbackUseMemoDescription = () => {
  const [id, setId] = useState(1);
  const [visible, toggleVisible] = useState(true);

  return (
    <React.Fragment>
      <button onClick={() => setId(id => id + 1)}>+</button>
      <button onClick={() => toggleVisible(visible => !visible)}>hide</button>
      {
        visible ? <UseCallbackUseMemoExample id={id}/> : null
      }
    </React.Fragment>
  );
};

export default UseCallbackUseMemoDescription;
