import React, {useEffect, useState} from "react";

const ExampleLoadData = ({id}) => {
  const [name, setName] = useState(null);
  const controller = new AbortController();

  const loadData = async (id) => {
    const resp = await fetch(`https://swapi.dev/api/planets/${id}`, {
      signal: controller.signal
    });
    const data = await resp.json();
    setName(data.name)
  };

  useEffect(   () => {
    loadData(id);

    return () => {
      controller.abort();
    }
  }, [id]);

  return (
    <div>
      {id} - {name}
    </div>
  );
};

export default ExampleLoadData;
