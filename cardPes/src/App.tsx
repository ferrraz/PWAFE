import "./App.css";

function App() {  
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">

      <a href="#" className="block w-96 rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          <div className="sm:order-last sm:shrink-0">
            <img
              alt=""
              src="https://i.redd.it/5ne18k2exeea1.jpg"
              className="size-16 rounded-full object-cover sm:size-18"
            />
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-medium text-pretty text-gray-900">
              Fábio Ferraz
            </h3>

            <p className="mt-1 text-sm text-gray-700">DS 2º Ano</p>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-md mb-2 text-left">Interesses</div>
        </div>

        <div className="px-6 pt-4 pb-2 text-left">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Programação</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jogos</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Música</span>
        </div>

        <div className="px-6 pt-4 pb-2 text-left">
          <span className="inline-block bg-green-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">À procura de estágio</span>
        </div>
      </a>
    </main>
  );
}

export default App;