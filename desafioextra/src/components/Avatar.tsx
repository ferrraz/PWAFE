type AvatarProps = {
  nome: string
}

export default function Avatar({ nome }: AvatarProps) {
    return (
        <img
            src={"https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/14872092246392.webp?w=1190&h=794"}
            alt={`Fotografia de ${nome}`}
            // shrink-0 para impedir que a imagem encolha em telas menores
            className="h-28 w-28 shrink-0 rounded-full object-cover"
          />
    );

}
