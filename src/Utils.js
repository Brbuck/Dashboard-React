export function soNumero(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
  
    e.currentTarget.value = value;
    return e;
  }
  
  // Função para formatar entrada do input em moeda
  
  export function formatarMoeda(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  
    e.currentTarget.value = value;
    return e;
  }
