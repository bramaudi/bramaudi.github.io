import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import prism from "lume/plugins/prism.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import netlifyCMS from "lume/plugins/netlify_cms.ts";
import gpm from "https://deno.land/x/gpm@v0.4.1/mod.ts";

const site = lume({
  location: new URL("https://bramaudi.dev/"),
});

site
  .ignore("README.md")
  .copy("static")
  .use(postcss())
  .use(terser())
  .use(date())
  .use(prism())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .use(netlifyCMS({ netlifyIdentity: true }))
  // .addEventListener(
  //   "beforeBuild",
  //   () => gpm(["oom-components/searcher"], "js/vendor"),
  // );

export default site;
