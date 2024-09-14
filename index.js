//import Mirador from 'mirador/dist/es/src/index';
//import examplePlugin from './plugins/example_plugin';

const config = {
  id: 'mirador-viewer',
  translations: {
    en: {
      "currentItem_1/2": "Right",
      "currentItem_2/2": "Left"
    }

  },
  theme: { direction: 'rtl' },
  selectedTheme: "dark",
  window: {
    sideBarPanel: "info",
    defaultView:'book',
      views: [
        {key:"single",behaviors:["individuals","paged"]}, 
        {key:"book",behaviors:["individuals"]}, 
        {key:"gallery"} 
      ],
  },
  windows: [
    {
      manifestId: 'http://M84H.github.io/Tekagami-jo/2666.json',
    }
  ],
};

const plugins = [];

Mirador.viewer(config, plugins);
