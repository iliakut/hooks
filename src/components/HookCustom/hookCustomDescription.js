import React from "react";
import usePlanetName from "./hookCustom";

const HookCustomDescription = ({id}) => {
  const name = usePlanetName(id);

  return (
    <div>{id} - {name}</div>
  );
};

export default HookCustomDescription;
