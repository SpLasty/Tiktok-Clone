import React from "react";
import { ImCross } from "react-icons/im";
import Login from "./Login";
import Register from "./Register";
import useGeneralStore from "../store/generalStore";

function AuthModal() {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen);
  const isLoginOpen = useGeneralStore((state) => state.isLoginOpen);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white w-full max-w-md mx-auto rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{isRegistered ? 'Log in' : 'Sign up'}</h2>
          <button
            onClick={() => setLoginIsOpen(!isLoginOpen)}
            className="p-2 text-black rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ImCross size="20" />
          </button>
        </div>
        {isRegistered ? <Login /> : <Register />}
        <div className="flex items-center justify-center p-4 border-t">
          <p className="text-sm text-gray-600">
            {isRegistered ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => setIsRegistered(!isRegistered)}
            className="text-sm text-blue-500 font-semibold pl-2"
          >
            {isRegistered ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
