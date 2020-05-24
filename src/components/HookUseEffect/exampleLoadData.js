import React, {useEffect} from "react";

const ExampleLoadData = ({id}) => {
  const loadData = async (id) => {
    const resp = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=${59}&inprop=url&format=json`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      }
      );
    return await resp.json();
  };

  useEffect(  () => {
    loadData(id).then((data) => {
      console.log(data);
    })
  }, [id]);

  return (
    <div>123</div>
  );
};

export default ExampleLoadData;
