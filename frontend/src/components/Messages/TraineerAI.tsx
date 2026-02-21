export function TraineerAI() {
  return (
    <div className="mt-3 flex h-full w-full flex-col gap-4">
      <div className="p-6">
        <h2 className="text-center text-3xl font-bold">
          Traineer <span className="text-(--hover-color)">AI</span>
        </h2>
        <p className="mt-1.5 text-center">
          Twój osobisty asystent ze sztuczną inteligencją
        </p>
      </div>
      <div className="flex-1 rounded-2xl bg-(--glass-color)/30 p-6 backdrop-blur-xl">
        {/* <p className="text-center text-sm text-gray-500">
          Tu będą wiadomości...
        </p> */}
      </div>

      <div className="flex gap-4 rounded-2xl bg-(--glass-color)/50 p-4 backdrop-blur-xl">
        <input
          type="text"
          placeholder="Napisz do Traineer AI..."
          className="flex-1 rounded-xl bg-white/5 p-3 text-white outline-none focus:bg-white/10"
        />
        <button className="cursor-pointer rounded-xl bg-(--text-color) px-6 py-3 font-bold text-(--btn-text-color) transition-colors hover:bg-(--hover-color) hover:text-(--text-color)">
          Wyślij
        </button>
      </div>
    </div>
  );
}
