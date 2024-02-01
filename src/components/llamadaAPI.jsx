const consumirApi = async () => {
  const resp = await axios.get(
    "https://proyecto-5-aplicacion-de-comercio.onrender.com/api/notas"
  );
  return resp;
};

export { consumirApi };
