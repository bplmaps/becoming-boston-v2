# Becoming Boston

Source repository for the Becoming Boston digital exhibition, initially launched January 2023.

* Astro 5.1.x
* TailwindCSS 3.4.x
* Openseadragon 5.0.x

## Version history

* January 2023 (V1): Launched as a Nuxt/Vue app based on Walk to the Sea codebase
* January 2025 (V2): Converted to an Astro site for consistency with other recent LMEC properties and updated dependencies

As part of the V2 migration to astro, all Vue components with the exception of those needed for object viewer embeds were converted to native Astro components.  All markup was preserved where possible using TailwindCSS for all styling.

The map viewer component (`OpenSeadragon.vue`), written in Vue, is built with Openseadragon and was ported directly from the V1 Nuxt app.  The Samvera Clover IIIF viewer was also explored as a candidate for replacing Openseadragon, however issues were encountered during development related to the parsing of LMEC manifest files (viewer would get stuck with "Loading" text and not proceed any further).  Samvera also provides a native javascript web component which was also tested and produced the same result.

## Local development

* Run `yarn` to install dependencies
* Run `yarn dev` to launch a live reload web server accessible at <http://localhost:4321>

## Staging 

* Continuous integration set up to Netlify at <https://becoming-boston-staging.netlify.app> on the `main` branch

## Production deployment

* No CI set up
* Manually run `yarn run generate` and manually copy to <https://leventhalmap.org/digital-exhibitions/becoming-boston>
