let accounts = [
  {
    name: "Santiago Urrego",
    cc: 1995,
    contact: "+57 300 333 0000",
    due: "12/05/1995",
    rol: "Usuario interno",
    job: "Front-end developer",
    description:
      "Aquí dejamos una breve descripción de la persona relacionada.",
  },
  {
    name: "Camilo Contreras",
    cc: 2000,
    contact: "+57 300 333 0000",
    due: "10/31/2000",
    rol: "Supervisor",
    job: "Front-end developer",
    description:
      "Aquí dejamos una breve descripción de la persona relacionada.",
  },
  {
    name: "Jeison Martinez",
    cc: 2003,
    contact: "+57 300 333 0000",
    due: "07/22/2003",
    rol: "Usuario interno",
    job: "Full Stack developer",
    description:
      "Aquí dejamos una breve descripción de la persona relacionada.",
  },
  {
    name: "Brayan Duque",
    cc: 1997,
    contact: "+57 300 333 0000",
    due: "09/01/1997",
    rol: "Usuario interno",
    job: "Databases developer",
    description:
      "Aquí dejamos una breve descripción de la persona relacionada.",
  },
  {
    name: "Andres Dickson",
    cc: 1998,
    contact: "+57 300 333 0000",
    due: "01/27/1998",
    rol: "Usuario interno",
    job: "Back-end developer",
    description:
      "Aquí dejamos una breve descripción de la persona relacionada.",
  },
];

export function getAccounts() {
  return accounts;
}

export function getAccount(cc) {
  return accounts.find((account) => account.cc === cc);
}

export function deleteAccounts(cc) {
  accounts = accounts.filter((account) => account.cc !== cc);
}
