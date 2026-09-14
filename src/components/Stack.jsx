function Stack() {
  return (
    <aside className="bg-white border border-slate-200 rounded-xl p-5 h-fit min-h-[320px]">

      <h3 className="text-base font-semibold text-slate-900">
        Your Stack
      </h3>

      <p className="text-xs text-slate-400 mt-1">
        0 Technology Selected
      </p>

      <div className="py-16 text-center">
        <p className="text-sm text-slate-400">
          Your stack is empty.
        </p>

        <p className="text-xs text-slate-400 mt-2">
          Add technologies to build your stack.
        </p>
      </div>

      <button
        type="button"
        disabled
        className="w-full py-2.5 border border-red-200 text-red-500 rounded-md text-sm font-medium"
      >
        Remove All
      </button>

    </aside>
  );
}

export default Stack;