import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>error</h1>
      <p>Hey u are doing something wrong</p>
    </div>
  );
};

export default Error;
