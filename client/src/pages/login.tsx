import { auth } from "@/libs/firebase";
import { axiosInstance } from "@/utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { User } from "../../typings";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      const { data } = await axiosInstance.post<User>("/api/v1/auth/login", { email: user.email });
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("Login Error: ", error.response?.data);
      }
    }
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
