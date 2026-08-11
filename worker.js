export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Keep the site on the canonical music subdomain.
    if (url.hostname === "blueberryfruitsy.com") {
      return Response.redirect("https://stream.blueberryfruitsy.com" + url.pathname + url.search, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
