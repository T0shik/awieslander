<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-container py-3 px-1>
      <v-content>
        <nuxt/>
      </v-content>
    </v-container>
    <v-footer>
      <span>&copy; 2019</span>
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
