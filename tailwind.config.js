module.exports = {
  purge: {
    enabled: true,
    content: [
      {
        raw: '<html><body><div class="app"></div></body></html>',
        extension: 'html'
      },
      'src/components/about/about.tsx',
      'src/components/app-burger/app-burger.tsx',
      'src/components/app-icon/app-icon.tsx',
      'src/components/banner/banner.tsx',
      'src/components/blog-component/blog-component.tsx',
      'src/components/landing-page/landing-page.tsx',
      'src/components/notfound-page/notfound-page.tsx',
      'src/components/product-page/product-page.tsx',
      'src/components/resources-page/resources-page.tsx',
      'src/components/site-menu/site-menu.tsx',
      'src/components/site-header/site-header.tsx'
    ],
    css: [
      {
        raw: 'body { margin: 0 }'
      },
      'src/global/style/app.css'
    ],
    keyframes: true,
    whitelist: ['random', 'yep', 'button'],
    rejected: true,
    variables: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
