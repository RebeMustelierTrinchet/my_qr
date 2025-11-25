// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Crear sitemap
const sitemap = new SitemapStream({ hostname: 'https://www.101qrfree.com' });

// Ruta del archivo sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const writeStream = createWriteStream(sitemapPath);
sitemap.pipe(writeStream);

// Agregamos las URLs de tu web
sitemap.write({ url: '/', changefreq: 'daily', priority: 0.9 }); // Home
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.7 }); // About
sitemap.write({ url: '/generator', changefreq: 'daily', priority: 1.0 }); // Generator (la más importante)

// Cierra el sitemap
sitemap.end();

// Cuando termine
streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generado correctamente en public/sitemap.xml'))
  .catch((err) => console.error(err));
