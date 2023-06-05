"use client";

type PromptType = {
  openedPrompt: boolean;
  setOpenedPrompt: Function;
};

export default function Prompt({ openedPrompt, setOpenedPrompt }: PromptType) {
  const handleClose = () => {
    return setOpenedPrompt(false);
  };

  return (
    <>
      {openedPrompt && (
        <div className=" absolute inset-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.80)] ">
          <div className="w-10/12 bg-slate-800 p-10 text-white  md:w-1/2">
            <h1 className="text-center text-4xl font-bold">Sorry! 👉👈</h1>
            <p className="text-base">
              Due to free-tier deployment, the project you are trying to reach
              is NOT AVAILABLE after the 20th of each month. Please come back
              next month!
            </p>
            <button
              onClick={handleClose}
              className="mx-auto mt-4 block rounded-lg bg-blue-500 px-3 py-2 text-lg font-bold hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
