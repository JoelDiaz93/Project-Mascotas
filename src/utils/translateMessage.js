const translateMessage = (code) => {
<<<<<<< HEAD
  const dictionary = {
    "auth/email-already-in-use": "El correo electrónico ya está en uso.",
    "auth/weak-password": "La clave debe contener al menos 6 caracteres",
    "auth/wrong-password": "Usuario o clave incorrectos",
    "auth/user-not-found": "Usuario o clave incorrectos",
  };

  return dictionary[code] || code;
};

export default translateMessage;
=======
    const dictionary = {
      "auth/email-already-in-use": "El correo electrónico ya está en uso.",
      "auth/weak-password": "La clave debe contener al menos 6 caracteres",
      "auth/wrong-password": "Usuario o clave incorrectos",
      "auth/user-not-found": "Usuario o clave incorrectos",
    };
  
    return dictionary[code] || code;
  };
  
  export default translateMessage;
>>>>>>> c295891b20c2e5ebfb1576090b5b33f1dc2218c3
