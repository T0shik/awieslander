<template>
  <v-layout column>
    <v-card class="mb-3" v-for="p in projects" :key="p.title">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{p.title}}</h3>
          <div>{{p.description}}</div>
        </div>
        <div>
          <div v-for="tech in p.techStacks" :key="p.title + tech.type">
            <strong>{{tech.type}}:</strong>
            <v-chip
              v-for="s in tech.stack"
              :key="p.title + s.name"
              :class="{'green': s.active, 'error': !s.active, 'text-crossout': !s.active}"
            >{{s.name}}</v-chip>
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="primary">Read More</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  computed: {},
  data: () => ({
    projects: [
      {
        title: 'Tricking Royal',
        description: 'Social network for participating in tricking battles',
        longDescription: ['Paragraph 1', 'PAragraph 2'],
        techStacks: [
          {
            type: 'Backend',
            stack: [
              {
                name: 'ASP.NET Core',
                active: true,
                description: 'Microsoft .net server side development stack.',
                link: ''
              },
              {
                name: 'IdentityServer4',
                active: true,
                description:
                  'ASP.NET Core implementation of the OAuth2 & Oidc protocols.',
                link: 'https://identityserver4.readthedocs.io/en/latest/'
              },
              {
                name: 'SignalR',
                active: false,
                description: 'Microsoft library for real-time communication.',
                link: 'https://dotnet.microsoft.com/apps/aspnet/real-time'
              }
            ]
          },
          {
            type: 'Frontend',
            stack: [
              {
                name: 'Vue.js',
                active: true,
                description:
                  'Modern progressive javascript framework for frontend development.',
                link: 'https://vuejs.org/'
              },
              {
                name: 'Ionic + Angular',
                active: true,
                description:
                  'Modern mobile hybrid application development framework used with the Angular frontend framework.',
                link: 'https://ionicframework.com/'
              },
              {
                name: 'Cordova',
                active: true,
                description: 'Javascript API layer to access Native functions.',
                link: 'https://cordova.apache.org/'
              }
            ]
          },
          {
            type: 'External',
            stack: [
              {
                name: 'One Signal',
                active: true,
                description:
                  'Single point of access to distribute notifications to devices on multiple platforms.',
                link: 'https://onesignal.com/'
              },
              {
                name: 'Firebase',
                active: true,
                description:
                  'Using to distribute notifications to Android devices.',
                link: 'https://firebase.google.com/'
              },
              {
                name: 'Smartasp',
                active: true,
                description: 'ASP.NET Core shared hosting provider.',
                link: 'http://www.SmarterASP.NET/index?r=100760667'
              }
            ]
          }
        ]
      },
      {
        title: 'This website',
        description: 'Personal website to showcase my repertoire of work.',
        longDescription: ['Paragraph 1', 'PAragraph 2'],
        techStacks: [
          {
            type: 'Fronend',
            stack: [
              {
                name: 'Vue.js',
                active: true,
                description:
                  'Modern progressive javascript framework for frontend development.',
                link: 'https://vuejs.org/'
              },
              {
                name: 'Nuxt.js',
                active: true,
                description:
                  'Nuxt.js is a framework for creating Vue.js applications.',
                link: 'https://nuxtjs.org/'
              },
              {
                name: 'Vuetify.js',
                active: true,
                description: 'Modern vuejs material design framework.',
                link: 'https://vuetifyjs.com/en/'
              }
            ],
            external: [
              {
                name: 'Netlify',
                active: true,
                description:
                  'An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS. And that’s just the beginning.',
                link: 'https://www.netlify.com/'
              }
            ]
          }
        ]
      }
    ]
  })
}
</script>

<style>
.text-crossout {
  text-decoration: line-through;
}
</style>
