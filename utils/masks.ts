
export function applyMask(value: string, type: 'cpf' | 'cnpj' | 'date') {
  const v = value.replace(/\D/g, '');

  if (type === 'cpf') {
    return v
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  if (type === 'cnpj') {
    return v
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }

  if (type === 'date') {
    return v
      .replace(/\D/g, "")
     .replace(/(\d{2})(\d)/, "$1/$2")
     .replace(/(\d{2})(\d)/, "$1/$2")
     .replace(/(\d{4})(\d)/, "$1");
  }

  return value;
}

