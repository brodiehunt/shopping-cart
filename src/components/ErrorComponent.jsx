import {Link} from 'react-router-dom';

const ErrorComponent = ({error}) => {
  return (
    <div className="main-error-container">
      <h1>Oops.. An unexpected error occured.</h1>
      <p>We're sorry about this. You can go {" "}
        <Link className="back-link" to="/">Back</Link>
      </p>
    </div>
  )
};

export default ErrorComponent;