const url = "http://localhost:8000/api/";

export const request = (
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  params: any,
  dispatch: any
) => {
  const fetchInit: any = {
    method
    // body: JSON.stringify(params)
  };

  if (method !== "GET") {
    fetchInit.body = JSON.stringify(params);
  }

  fetch(`${url}${path}`, fetchInit)
    .then(response => response.json())
    .then(response => dispatch(response));
};
