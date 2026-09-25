const notas = [8, 12, 15];
console.log(
    notas.filter(n => n >= 10)
        .map(n => n + 1)
);
