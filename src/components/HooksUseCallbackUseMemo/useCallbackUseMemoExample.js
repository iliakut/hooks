import React, {useCallback, useEffect, useMemo, useState} from "react";

const UseCallbackUseMemoExample = ({id}) => {
  const getPlanet = (id) => {
    // функция получния данных
    return fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => data);
  };


  const useRequest = (request) => {
    /*
    * хук который делает запрос по функции request и возвращает данные
    * следит за изменением request - т.е. функции
    * и если она меняется, делает запрос еще раз
    */

    /*
    * useMemo - позволяет запомнить объек,
    * так как мы в useEffect пытаемся записать его снова
    * а объекты в JS разные
    */
    const initialState = useMemo(() => ({
      data: null,
      loading: true,
      error: null
    }), []);


    const [dataState, setDataState] = useState(initialState);

    useEffect(() => {
      setDataState(initialState);

      let cancelled = false;
      request()
        .then(data => !cancelled && setDataState({
          data,
          loading: false,
          error: null,
        }))
      .catch(error => !cancelled && setDataState({
        data: null,
        loading: false,
        error
      }));

      return () => cancelled = true;
    }, [request, initialState]);
    return dataState;
  };

  const usePlanetInfo = (id) => {
    /*
    * usePlanetInfo - хук, который создает функцию для запроса данных
    * передает эту функцию в хук useRequest
    * и возвращает данные
    */
    const request = useCallback(() => getPlanet(id), [id]);
    /*
    * useCallback - хук, который следит за id
    * и возврвщает новую функцию, если id изменился
    * нужен длы того, чтобы избежать бесконечного вызова
    * useRequest
    */
    return useRequest(request);
  };

  const PlanetInfo = (id) => {
    const {data, loading, error} = usePlanetInfo(id);

    if (error) {
      return <div>Error</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div>{id} - {data && data.name}</div>
    )
  };

  const Info = PlanetInfo(id);

  return (
    <div>{Info}</div>
  );
};

export default UseCallbackUseMemoExample;
