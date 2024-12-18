import { useEffect } from "react";
import { useUserStore } from "../../hooks/useUserStore";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {


  const {onLogin,login} = useUserStore();
  const navigate = useNavigate();
  const handleLogin =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = new FormData(e.target as HTMLFormElement);
    const dataUser =Object.fromEntries(dataForm) as {user:string,password:string};    
    onLogin(dataUser)
  }

  useEffect(()=>{
    if(login) navigate("/")
  },[login])
  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 self-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
            Ingresa con tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e)=>handleLogin(e)}>
            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Usuario
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  name="user"
                  type="user"
                  autoComplete="user"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
