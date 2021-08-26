export default function PorjectCard({title, children, onClick}) {
  return (
    <div
      onClick={onClick}aas
      role="button"
      className={`flex justify-between flex-col h-80 p-5 transition-all bg-gradient-to-tr from-pink-400 via-indigo-500 to-blue-400`}
    >
      <div className="flex-1 flex place-items-center">
        <div className="mt-24">
          <h1 className="text-4xl font-semibold">{title}</h1>
        </div>
      </div>
      <div className="flex justify-center uppercase flex-wrap">
        {children}
      </div>
    </div>
  );
}
