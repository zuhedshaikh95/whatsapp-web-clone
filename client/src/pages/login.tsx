import { googleSignIn } from "@/redux/reducers/thunks";
import { AppDispatch, RootStore } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoading, userMessage, userError } = useSelector((store: RootStore) => store.userReducer);

  const handleLogin = async () => {
    dispatch(googleSignIn(router));
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6 ">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="whatsapp-gif" height={300} width={300} />
        <span className="text-7xl">WhatsApp</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={handleLogin}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default Login;
