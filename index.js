//import Mirador from 'mirador/dist/es/src/index';
//import examplePlugin from './plugins/example_plugin';

const config = {
  id: 'mirador-viewer',
  translations: {
    en: {
      "currentItem_1/2": "Right",
      "currentItem_2/2": "Left"
    },
    ja: {
      "currentItem_1/2": "右",
      "currentItem_2/2": "左"
    }
  },
  theme: { 
    direction: 'ltr',
    typography: {
      body1:{
        fontSize: "1rem",
        letterSpacing:"0em",
        lineHeight:"1.6em",
      },
      subtitle2:{
        fontSize:"0.878em",
        letterSpacing:"0.02em",
        lineHeight:"1.75em",
        fontWeight:700,
      },
    }, 
  },
  selectedTheme: "dark",
  language: 'en',
  availableLanguages: {
    en: 'English',
    ja:'日本語',
  },
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
      manifestId: 'https://M84H.github.io/Tekagami-jo/2666.json',
    }
  ],
};

const plugins = [];

Mirador.viewer(config, plugins);
