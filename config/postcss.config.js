const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [ './hugo_stats.json' ],
      extractors: [
        {
          extractor: (content) => {
            const { tags, classes, ids } = JSON.parse(content).htmlElements;

            return tags.concat(classes, ids);
          },
          extensions: ['json']
        }
      ],
      dynamicAttributes: [
        'aria-expanded',
        'data-bs-popper',
        'data-bs-target',
        'data-bs-theme',
        'data-dark-mode',
        'data-global-alert',
        'data-pane',
        'data-popper-placement',
        'data-sizes',
        'data-toggle-tab',
        'id',
        'size',
        'type'
      ],
      safelist: [
        'active',
        'btn-clipboard',
        'clipboard',
        'disabled',
        'hidden',
        'modal-backdrop',
        'selected',
        'show',
        'img-fluid',
        'blur-up',
        'lazyload',
        'lazyloaded',
        'alert-link',
        'container-fw ',
        'container-lg',
        'container-fluid',
        'offcanvas-backdrop',
        'figcaption',
        'dt',
        'dd',
        'showing',
        'hiding',
        'page-item',
        'page-link',
        ...whitelister([
          './assets/scss/**/*.scss',
          './node_modules/@hyas/doks-core/assets/scss/components/_code.scss',
          './node_modules/@hyas/doks-core/assets/scss/components/_expressive-code.scss',
          './node_modules/@hyas/doks-core/assets/scss/common/_syntax.scss'
        ])
      ]
    })
  ]
};