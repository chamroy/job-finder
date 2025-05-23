import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(  error.status === 404){
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not found</h3>
          <h4> Unable to find the page you are looking for, chuck</h4>
          <Link to='/dashboard'>back home</Link>
        </div>

        
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <div>
       <h3>you got an error, something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
