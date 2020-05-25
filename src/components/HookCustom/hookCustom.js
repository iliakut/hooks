import {useState, useEffect} from "react";

const usePlanetName = (id) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchSwapi() {
      const resp = await fetch(`https://swapi.dev/api/planets/${id}`, {
        signal: controller.signal
      });

      const data = await resp.json();

      setName(data.name);
    }

    fetchSwapi();

    return () => {
      controller.abort();
    }
  }, [id]);

  return name;
};

export default usePlanetName;
