// src/types.ts (os mesmos campos da PL01)
export type Perfil = {
nome: string;
curso: string;
ano: number;
cidade: string;
interesses: string[];
procuraEstagio: boolean;
};
// src/components/CartaoPerfil.tsx
import type { Perfil } from '../types';
type CartaoPerfilProps = {
perfil: Perfil;
};