import React from "react";
import usePlanetName from "./hookCustom";

const HookCustomDescription = ({id}) => {

  /*
  * собственные хуки работают как обычные функции
  * и могут использовать другие хуки (см. пример usePlanetName)
  */
  const name = usePlanetName(id);

  return (
    <div>{id} - {name}</div>
  );
};

export default HookCustomDescription;
