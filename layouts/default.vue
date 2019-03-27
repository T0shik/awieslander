<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="link in links" :to="link.to" :key="link.name">{{link.name}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
    <v-footer class="pa-5">
      <v-layout column align-center justify-center>
        <div>&copy; {{new Date().getFullYear()}} Anton Wieslander. All Rights Reserved.</div>
        <div>
          <v-btn flat icon color="primary">
            <!-- <fa :icon="['fab', 'instagram']"/> -->
            <v-icon>fab fa-instagram</v-icon>
          </v-btn>
        </div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: '/',
          name: 'Home'
        },
        {
          to: '/projects',
          name: 'Projects'
        },
        {
          to: '/expertise',
          name: 'Expertise'
        }
      ]
    }
  }
}
</script>
