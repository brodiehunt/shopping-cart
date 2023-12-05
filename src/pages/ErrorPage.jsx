import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Looks like and error has occured</h1>
      <h2>{error.statusText || error.message}</h2>
      <Link className="home-link" to="/">Go to home</Link>
    </div>
  )
}

export default ErrorPage;