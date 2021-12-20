let accounts = [
  {
    status: "Pendiente",
    puntoo: "Bogota",
    puntod: "Medellin",
    distancia: 50000,
    valor_km: 5000,
    valor_ruta: 250000000,
    description:
      "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card",
  },
  {
    status: "Despachada",
    puntoo: "Cúcuta",
    puntod: "Bucaramanga",
    distancia: 10000,
    valor_km: 2000,
    valor_ruta: 20000000,
    description:
      "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card",
  },
  {
    status: "Finalizada",
    puntoo: "Cartagena",
    puntod: "Santa marta",
    distancia: 3000,
    valor_km: 1000,
    valor_ruta: 3000000,
    description:
      "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card",
  },
  {
    status: "Cancelada",
    puntoo: "Cali",
    puntod: "Buga",
    distancia: 2500,
    valor_km: 1200,
    valor_ruta: 3000000,
    description:
      "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card",
  },

];

export function getAccounts() {
  return accounts;
}

export function getAccount(status) {
  return accounts.find((account) => account.status === status);
}

export function deleteAccounts(cc) {
  accounts = accounts.filter((account) => account.cc !== cc);
}
