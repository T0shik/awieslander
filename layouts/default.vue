<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/projects">Projects</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container py-3 px-1>
      <v-content>
        <nuxt/>
      </v-content>
    </v-container>
    <v-footer class="justify-center pa-5">
      <span>&copy; {{new Date().getFullYear()}} Anton Wieslander. All Rights Reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Anton Wieslander'
    }
  }
}
</script>
