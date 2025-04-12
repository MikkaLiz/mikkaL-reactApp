import { FaSpinner } from "react-icons/fa";

const LoaderComponent = () => {
  return (
    <div className="loader">
      <div>
        <div className="col-1 mt-4 mx-auto">
          <FaSpinner className="spinner" />
        </div>
      </div>
    </div>
  );
};

export default LoaderComponent;