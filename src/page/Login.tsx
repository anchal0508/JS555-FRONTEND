import type React from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useLoginHook } from "../hooks/useLoginHook";

const Login: React.FC = () => {
  const {register, handleSubmit, apiError, errors, inputFields, isSubmitting } = useLoginHook();

  return (
    <div
      className="
      flex flex-col items-center justify-center py-6   
    md:py-12
     "
    >
      <div>
        <form
          onSubmit={handleSubmit}
          className="
          border   py-2 px-2 rounded-2xl shadow-2xl shadow-blue-400 backdrop-blur-sm mb-2
          md:w-100 md:px-6 md:py-4
          lg:w-100 lg:px-6 lg:py-4
          "
        >
        <h2 className="
        text-3xl text-center font-bold
        ">Welcome Back</h2>
        <div className="
        text-center text-red-800  min-h-7 w-full font-semibold
        ">
          {apiError && <div className="rounded-2xl bg-amber-100/50 ">{apiError}</div>}
        </div>

        <div>
          {inputFields.map((fields, index) => {
            const fieldError = errors[fields.nameId];

            return (
              <div key={index}>
                <label className="block  mb-1">{fields.fieldName}</label>

                <input
                  type={fields.inputType}
                  {...register(fields.nameId)}
                  placeholder={fields.placeHolder}
                  className="
                  rounded-lg bg-slate-700 border w-full border-slate-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500
                  "
                />
                <div className="
                text-center text-red-800   min-h-7 w-80 font-semibold
                ">
                  {fieldError && <p className="rounded-2xl bg-amber-100/50">{fieldError.message}</p>}
                </div>
              </div>
            );
          })}
          <button
            type="submit"
            disabled={isSubmitting}
            className=" btn-primary"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Processing...</span>
              </>
            ) : (
              <span>Login Account</span>
            )}
          </button>
        </div>
      </form>
      <div className="flex justify-between w-full text-center text-2xl font-semibold">
      <Link to='/signup'>SignUp </Link>
      <Link to='/forgot-password'>Forgot Password?  </Link>

      </div>
      </div>
    </div>
  );
};

export default Login;
