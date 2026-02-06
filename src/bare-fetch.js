export async function bare_fetch(request, client) {
  let inputs = await request_to_bare(request);
  return () => client.fetch(inputs...); 
}

export async function request_to_bare(request) {
  const cloned = await request.clone();

  let url = request.url;
  let headers_json = Object.fromEntries(request.headers);

  let config = {
    request,
    headers_json,
    cloned,

    method: request.method,
    headers: headers_json,
    body: await cloned.arrayBuffer(),
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    signal: request.signal,
    referrer: request.referrer
  };

  return [url, config];
}
