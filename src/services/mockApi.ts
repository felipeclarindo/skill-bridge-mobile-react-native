const mockUsers = [
  {
    id: "1",
    name: "Felipe Clarindo",
    email: "felipe@teste.com",
    password: "123456",
  },
];

export async function mockLogin(email: string, password: string) {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) reject("Credenciais inválidas");
      else resolve({ id: user.id, name: user.name, email: user.email });
    }, 900);
  });
}

export async function mockSignup(
  name: string,
  email: string,
  password: string
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = {
        id: String(Date.now()),
        name,
        email,
      };
      mockUsers.push({ ...newUser, password });
      resolve(newUser);
    }, 900);
  });
}
