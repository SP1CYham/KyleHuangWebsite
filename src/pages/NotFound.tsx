import Base from '../Base';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div className="h-screen">
        <h1 style={{ fontSize: '200px' }}>404</h1>
        <p className="text-center">
          your page was not found! <br /> how unfortunate.
        </p>

        <div className="mt-4 flex justify-center align-middle">
          <Link to="/" className="">
            <button>get me back home!</button>
          </Link>
        </div>
      </div>
    </>
  );
}
