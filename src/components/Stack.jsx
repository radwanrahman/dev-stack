function Stack({ selectedStack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-slate-200 rounded-xl p-5 h-fit min-h-[320px]">

      {/* Header */}
      <h3 className="text-base font-semibold text-slate-900">
        Your Stack
      </h3>

      <p className="text-xs text-slate-400 mt-1">
        {selectedStack.length} Technology
        {selectedStack.length !== 1 ? "ies" : ""} Selected
      </p>

      {/* Empty state */}
      {selectedStack.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        /* Selected technologies */
        <div className="mt-6 space-y-3">
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
            >
              <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-900 truncate">
                  {technology.name}
                </p>

                <p className="text-[10px] text-slate-400 mt-1">
                  {technology.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}
      <button
        type="button"
        onClick={onRemoveAll}
        disabled={selectedStack.length === 0}
        className="w-full mt-5 py-2.5 border border-red-200 text-red-500 rounded-md text-sm font-medium
        hover:bg-red-50 transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Remove All
      </button>

    </aside>
  );
}

export default Stack;