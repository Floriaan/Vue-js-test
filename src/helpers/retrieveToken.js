export default () => {
  let token = "";
  const { cookie } = document;
  if (cookie) {
    const tokenParts = cookie.split(";");
    const cookies = tokenParts
      .map((cookie) => cookie.split("="))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      );
    if (cookies.token) {
      token = cookies.token;
    }
  }
  return token;
};
