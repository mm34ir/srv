export async function onRequest({ request }) {
  // Parse the incoming request URL
  const url = new URL(request.url);
  
  // Modify the URL to proxy to the target host
  url.hostname = "miraji.mine.bz";
  url.protocol = "https";
  
  // Create a new Request object using the modified URL and the original request details
  const modifiedRequest = new Request(url, request);
  
  // Forward the request and return the fetched response
  return fetch(modifiedRequest);
}
