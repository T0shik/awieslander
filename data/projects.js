var stacks = {
  dotnetcore: {
    name: 'ASP.NET Core',
    description: 'Microsoft .net server side development stack.',
    link: 'https://dotnet.github.io/'
  },
  is4: {
    name: 'IdentityServer4',
    description:
      'ASP.NET Core framework for OAuth2 & OpenID Connect specifications.',
    link: 'https://identityserver4.readthedocs.io/en/latest/'
  },
  signalr: {
    name: 'SignalR',
    description: 'Microsoft library for real-time communication.',
    link: 'https://dotnet.microsoft.com/apps/aspnet/real-time'
  },
  vuejs: {
    name: 'Vue.js',
    description:
      'Modern progressive javascript framework for frontend development.',
    link: 'https://vuejs.org/'
  },
  bulma: {
    name: 'Bulma',
    description: 'Modern CSS Framework based on flexbox.',
    link: 'https://bulma.io/documentation/'
  },
  ionicA: {
    name: 'Ionic + Angular',
    description:
      'Modern mobile hybrid application development framework used with the Angular frontend framework.',
    link: 'https://ionicframework.com/'
  },
  cordova: {
    name: 'Cordova',
    description: 'Javascript API layer to access Native functions.',
    link: 'https://cordova.apache.org/'
  },
  oneSignal: {
    name: 'One Signal',
    description:
      'Single point of access to distribute notifications to devices on multiple platforms.',
    link: 'https://onesignal.com/'
  },
  firebase: {
    name: 'Firebase',
    description: 'Using to distribute notifications to Android devices.',
    link: 'https://firebase.google.com/'
  },
  smartasp: {
    name: 'Smartasp',
    description: 'ASP.NET Core shared hosting provider.',
    link: 'http://www.SmarterASP.NET/index?r=100760667'
  },
  azure: {
    name: 'Azure',
    description: 'Microsoft Cloud Service',
    link: 'https://azure.microsoft.com/en-gb/'
  },
  nuxtjs: {
    name: 'Nuxt.js',
    description: 'Nuxt.js is a framework for creating Vue.js applications.',
    link: 'https://nuxtjs.org/'
  },
  vuetifyjs: {
    name: 'Vuetify.js',
    description: 'Modern vuejs material design framework.',
    link: 'https://vuetifyjs.com/en/'
  },
  netlify: {
    name: 'Netlify',
    description:
      'An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS. And that’s just the beginning.',
    link: 'https://www.netlify.com/'
  }
}

export const projects = [
  {
    title: 'Tricking Royal',
    description: 'Social network for participating and competing in tricking battles',
    link: 'https://www.trickingroyal.com',
    longDescription: ['Paragraph 1', 'PAragraph 2'],
    scoial: [
      { icon: 'fab fa-facebook', link: '' },
      { icon: 'fab fa-instagram', link: '' },
      { icon: 'fab fa-patreon', link: '' }
    ],
    techStacks: [
      {
        type: 'Backend',
        stack: [
          {
            ...stacks.dotnetcore,
            active: true
          },
          {
            ...stacks.is4,
            active: true
          },
          {
            ...stacks.signalr,
            active: false,
            usecase:
              'Deprecated due to budget hosting performance impact and increasing complexity of server and frontend, for small trade off of real time updates.'
          }
        ]
      },
      {
        type: 'Frontend',
        stack: [
          {
            ...stacks.vuejs,
            active: true
          },
          {
            ...stacks.bulma,
            active: true
          },
          {
            ...stacks.ionicA,
            active: true
          },
          {
            ...stacks.cordova,
            active: true
          }
        ]
      },
      {
        type: 'External',
        stack: [
          {
            ...stacks.oneSignal,
            active: true
          },
          {
            ...stacks.firebase,
            active: true
          },
          {
            ...stacks.smartasp,
            active: true
          },
          {
            ...stacks.azure,
            active: false,
            usecase: 'Deprecated due to high costs.'
          }
        ]
      }
    ]
  },
  {
    title: 'This Website',
    description: 'Personal website to showcase the repertoire of my work.',
    link: 'https://awieslander.co.uk',
    longDescription: ['Paragraph 1', 'PAragraph 2'],
    techStacks: [
      {
        type: 'Fronend',
        stack: [
          {
            ...stacks.vuejs,
            active: true
          },
          {
            ...stacks.nuxtjs,
            active: true
          },
          {
            ...stacks.vuetifyjs,
            active: true
          }
        ]
      },
      {
        type: 'External',
        stack: [
          {
            ...stacks.netlify,
            active: true
          }
        ]
      }
    ]
  }
]
