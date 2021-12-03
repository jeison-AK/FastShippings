let accounts = [
    {
      name: "Santiago Urrego",
      cc: 1995,
      contact: "+57 300 333 0000",
      due: "12/05/1995",
      description: "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card"
    },
    {
      name: "Camilo Contreras",
      cc: 2000,
      contact: "+57 300 333 0000",
      due: "10/31/2000",
      description: "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card"
    },
    {
      name: "Jeison Martinez",
      cc: 2003,
      contact: "+57 300 333 0000",
      due: "07/22/2003",
      description: "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card"
    },
    {
      name: "Brayan Duque",
      cc: 1997,
      contact: "+57 300 333 0000",
      due: "09/01/1997",
      description: "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card"
    },
    {
      name: "Andres Dickson",
      cc: 1998,
      contact: "+57 300 333 0000",
      due: "01/27/2998",
      description: "Aquí dejamos una breve descripción de la persona relacionada poder mostrar en el 'perfil' que mostraremos al lado derecho de la página posterior al darle click a la card"
    }
  ];
  
  export function getAccounts() {
    return accounts;
  }
  
  export function getAccount(cc) {
    return accounts.find(
      account => account.cc === cc
    );
  }

  export function deleteAccounts(cc) {
    accounts = accounts.filter(
        account => account.cc !== cc
      );
    }