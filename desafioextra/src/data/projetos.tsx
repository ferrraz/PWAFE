export type Projetos = {
id: number;
nome: string;
descricao: string;
tecnologias: string[];
concluido: boolean;
};

export const projetos: Projetos[] = [
    {
        id: 1,
        nome: "Cartao de Perfil",
        descricao: "Primeiro ecra em React com TSX",
        tecnologias: ["React", "TypeScript", "TailwindCSS"],
        concluido: true, 
    },
    {
        id: 2,
        nome: "Loja de Teclados",
        descricao: "Catalogo com precos variados",
        tecnologias: ["TypeScript"],
        concluido: false, 
    },
    {
        id: 3,
        nome: "Portfolio",
        descricao: "Portfolio pessoal com projetos e informacoes",
        tecnologias: ["React", "TypeScript", "TailwindCSS"],
        concluido: true, 
    }
];