export const getData = (chave) => {
    const dados = localStorage.getItem(`${chave}`);
    if (dados) {
      return JSON.parse(dados);
    }
    return [];
}
