import Image from "next/image";

function Onboarding() {
  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" alt="whatsapp-gif" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>

      <div className="flex fap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6"></div>
      </div>
    </div>
  );
}

export default Onboarding;
