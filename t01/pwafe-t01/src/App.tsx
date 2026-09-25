function App() {
  type Aluno = {
    nome: string;
    ano: number;
    curso: string;
    interesse: string[];
  };

  const aluno: Aluno = { 
    nome: "John Whick",
    ano: 2,
    curso: "DS",
    interesse: ["Programação", "Data Science"]
  };

  const uc = {
    sigla: "PWAFE",
    nome: "Programação Web Avançada e Frameworks",
    horas: 50
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto mb-8 max-w-md rounded bg-white p-4 shadow">
        <div className="mb-4">
          <span className="text-sm font-medium uppercase tracking-wide text-sky-600">Informações do Aluno</span>
          <h1>{aluno.nome}</h1>
          <p>Curso: {aluno.curso}</p>
          <p>Ano: {aluno.ano}</p>
          <p>Interesses: {aluno.interesse.join(", ")}</p>
        </div>
      </section> 
    </main>
  );
}

export default App
