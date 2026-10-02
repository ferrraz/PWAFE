import { useNavigate } from 'react-router-dom'

type Perfil = {
  nome: string
  curso: string
  ano: string
  interesses: string[]
  procuraEstagio: boolean
}


function App() {
  const navigate = useNavigate()

  const perfil: Perfil = {
    nome: 'Fábio Ferraz',
    curso: 'DS',
    ano: '2.º ano',
    interesses: ['React', 'UX', 'Jogos', 'IA'],
    procuraEstagio: true,
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
     
      <div className="w-full max-w-md rounded-4xl border border-slate-200 bg-white p-8 shadow-lg">

        {/* Cabeçalho */}
        <div className="flex items-center gap-6">

          {/* Avatar */}
          <img
            src={"https://i.redd.it/5ne18k2exeea1.jpg"}
            alt={`Fotografia de ${perfil.nome}`}
            // shrink-0 para impedir que a imagem encolha em telas menores
            className="h-28 w-28 shrink-0 rounded-full object-cover"
          />

          {/* Nome e curso */}
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {perfil.nome}
            </h1>

            <p className="mt-2 text-lg text-slate-500">
              {perfil.curso} · {perfil.ano}
            </p>
          </div>

        </div>

        {/* Interesses */}
        <div className="mt-10">
          <h2 className="mb-5 text-lg font-semibold text-slate-700">
            Interesses
          </h2>

          <div className="flex flex-wrap gap-3">
            {perfil.interesses.map((interesse) => (
              <span
                key={interesse}
                className="w-20 rounded-full text-center bg-blue-100 px-5 py-2 font-semibold text-blue-700"
              >
                {interesse}
              </span>
            ))}
          </div>
        </div>

        {/* Estágio */}
        {perfil.procuraEstagio && (
          <div className="mt-5 w-fit rounded-full bg-green-100 px-6 py-3 font-semibold text-green-700">
            À procura de estágio
          </div>
        )}

        <button onClick={() => navigate('/perfil')} className="mt-8 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800">
          Ver perfil completo
        </button>


      </div>

    </main>
  )
}

export default App