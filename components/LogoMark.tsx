export function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="relative grid h-10 w-10 place-items-center rounded-xl bg-cyan-700 shadow-sm"
    >
      <span className="absolute inset-2 rounded-sm border-2 border-white" />
      <span className="absolute left-4 top-2 h-6 border-l-2 border-white/70" />
      <span className="absolute left-2 top-5 w-6 border-t-2 border-white/70" />
      <span className="absolute bottom-2 right-2 h-2 w-2 rounded-sm bg-amber-300" />
    </span>
  );
}
