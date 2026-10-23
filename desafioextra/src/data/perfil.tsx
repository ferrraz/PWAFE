// src/types.ts (os mesmos campos da PL01)
export type Perfils = {
nome: string;
curso: string;
ano: number;
cidade: string;
interesses: string[];
procuraEstagio: boolean;
};
// src/components/CartaoPerfil.tsx
export const Perfil: Perfils[] = [
    {
        nome: "Mário Amorim",
        curso: "Desenvolvimento de Software",
        ano: 2,
        cidade: "Porto",
        interesses: ["Desenvolvimento Web", "React", "Inteligência Artificial"],
        procuraEstagio: true,
    },
];