import React, {useEffect} from "react";

const TestFuncComponent = ({test}) => {
  useEffect(() => {
    /*
    *
    */
    console.log(1, 'useEffect(), no secondParam ');
  });
  useEffect(() => {
    /*
    * повторяет componentDidMount()
    */
    console.log(2, 'useEffect(), empty []');
  }, []);
  useEffect(() => {
    /*
    * повторяет componentDidUpdate() и смотрит за конкретным параметром
    */
    console.log(3, 'useEffect(), [test]');

    /*
    * работает приблищительно как componentWillUnmount
    * вызывается когда компонент пропадает со страницы
    * и когда нужно запустить следующий новый эввект
    */
    return () => console.log(3, 'clear');
  }, [test]);

  return (
    <div>
      {test}
    </div>
  );
};

export default TestFuncComponent;
