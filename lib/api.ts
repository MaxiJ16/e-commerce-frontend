export const BASE_URL = "https://e-commerce-backend-maxij16.vercel.app/api";

export async function fetchAPI(input: RequestInfo | URL, options?: any) {
  const url = BASE_URL + input;

  const newOptions: any = options || {};
  // Forma moderna -> si newOptions.headers tiene un valor dejalo como está y sinó que sea un objeto vacio.
  newOptions.headers ||= {};

  // Obtenemos el token del localStorage si lo tenemos
  const token = getSaveToken();

  if (token) {
    newOptions.headers.Authorization = `Bearer ${token}`;
  }

  newOptions.headers["Content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw {
      message: `Hubo un error`,
      status: res.status,
    };
  }
}

// Funciones para que la lógica no esté metida dentro del componente
export async function sendCode(email: string) {
  return fetchAPI("/auth", {
    method: "POST",
    body: { email },
  });
}

export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: {
      email,
      code: Number(code),
    },
  });

  // Guardamos el token que trae de la data
  saveToken(data.token);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getSaveToken() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth_token");
    return token;
  }
}

export function removeToken() {
  localStorage.removeItem("auth_token");
}

type userData = {
  username: string;
  address: string;
  phone: number;
};

export async function modifiedUserData(userData: userData) {
  const { username, address, phone } = userData;

  try {
    const data = await fetchAPI("/me", {
      method: "PATCH",
      body: {
        username,
        address,
        phone,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function getOrder(productId: string, address: string) {
  try {
    const data = await fetchAPI(`/order?productId=${productId}`, {
      method: "POST",
      body: {
        shippment_address: address,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
