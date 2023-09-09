import SignOut from "@components/SignOut";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-12 justify-center items-center">
        <h1 className="text-3xl font-bold text-stone-200">
          This is the protected page, you can only see this if you are signed
        </h1>
        <SignOut />
      </div>
    </div>
  );
}