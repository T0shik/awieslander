<template>
  <v-layout column align-center>
    <v-card class="mb-3" v-for="p in projects" :key="p.title" max-width="600px" width="100%">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0" >{{p.title}}</h3>
          <div>{{p.description}}</div>
          <a class="markdown--link" flat :href="p.link" target="_blank">
            {{p.link}}
            <v-icon small>open_in_new</v-icon>
          </a>
        </div>
      </v-card-title>
      <v-card-text>
        <div v-for="tech in p.techStacks" :key="p.title + tech.type">
          <strong>{{tech.type}}:</strong>
          <v-menu
            class="d-inline"
            v-for="s in tech.stack"
            :key="p.title + s.name"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
          >
            <template v-slot:activator="{ on }">
              <v-chip
                dark
                v-on="on"
                :class="{'green': s.active, 'error': !s.active, 'text-crossout': !s.active}"
              >{{s.name}}</v-chip>
            </template>

            <v-card :color="(!s.active ? 'error' : '')" max-width="400">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{s.name}}</h3>
                  <div>{{s.description}}</div>
                </div>
              </v-card-title>
              <v-card-text class="py-0" v-if="!s.active">{{s.usecase}}</v-card-text>
              <v-card-actions>
                <v-btn flat color="primary" :href="s.link" target="_blank">visit site</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn flat color="primary">read more</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import { projects } from '../data/projects'

export default {
  computed: {},
  data: () => ({
    menu: false,
    projects: projects
  })
}
</script>

<style>
.text-crossout {
  text-decoration: line-through;
}
</style>
