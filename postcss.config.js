// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
      'src/index.html',
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
  
    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
  
      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
  
      return broadMatches.concat(innerMatches)
    }
  })

  
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),  
        ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
}