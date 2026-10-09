# Early Projects
 
A collection of some of my first hands-on projects while learning web development.
Each one was built to practice a specific framework or concept. They're not
polished production apps, but they mark real progress along the way.
 
## What's inside
 
| Project | Description | Stack |
|---|---|---|
| [`amazon-astro`](./amazon-astro) | A clone of Amazon's fashion storefront. Product data is pulled from the [Fake Store API](https://fakestoreapi.com/) and rendered statically, with a dynamic page per product and animated page transitions. | Astro, TypeScript, Bootstrap |
| [`marvel-astro`](./marvel-astro) | A layout clone of Marvel's website: responsive header and footer, promotional banners, and a login modal built with the native HTML `<dialog>` element. | Astro, Bootstrap |
| [`shopping-cart`](./shopping-cart) | A command-line shopping cart simulation built to practice object-oriented design: products, users with roles, a cart, and invoice generation. | TypeScript, Node.js |
 
## Highlights
 
- **`amazon-astro`**: static site generation with `getStaticPaths()`, a script that
  fetches and caches API data locally, and view transitions between pages.
- **`marvel-astro`**: component-based layout with Astro, plus responsive design
  for mobile and tablet.
- **`shopping-cart`**: OOP in TypeScript with models, services, encapsulation,
  and an in-memory invoice system.
## Running a project locally
 
Each project is self-contained. From inside its folder:
 
```bash
npm install
npm run dev
```
 
## Note
 
These were learning exercises, kept here to show progress rather than as
polished portfolio pieces. For more complete, documented work, see my
[`jscamp-bootcamp`](https://github.com/stalindlcruz/jscamp-bootcamp) repo.