function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div
      className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm
      hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg
      transition-all duration-200"
    >
      {/* Top section */}
      <div className="flex items-start justify-between gap-4">
        <div
          className="w-11 h-11 rounded-lg bg-slate-50
          flex items-center justify-center
          group-hover:bg-slate-100 transition-colors duration-200"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-8 h-8 object-contain"
          />
        </div>

        <span
          className="px-2.5 py-1 rounded-full
          bg-sky-50 text-sky-600
          text-[10px] font-medium"
        >
          {technology.badge}
        </span>
      </div>

      {/* Technology name */}
      <h3 className="mt-4 text-base font-semibold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-xs leading-5 text-slate-500 min-h-[60px]">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="px-2.5 py-1 rounded-md bg-slate-50 text-[10px] text-slate-500">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-400">
          {technology.difficulty}
        </span>

        <span className="text-[11px] font-medium text-slate-600">
          <span className="text-yellow-500">★</span> {technology.rating}
        </span>
      </div>

      {/* Add button */}
      <button
       type="button"
       onClick={() => onAdd(technology)}
      disabled={isAdded}
      className={`w-full mt-4 py-2.5 rounded-md text-xs font-medium
      transition-all duration-200
      ${
        isAdded
          ? "bg-slate-200 text-slate-500 cursor-not-allowed"
          : "bg-slate-950 text-white hover:bg-slate-800 hover:shadow-sm active:scale-[0.98]"
      }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
    </div>
  );
}

export default TechnologyCard;