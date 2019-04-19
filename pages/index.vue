<template>
  <div v-resize="onResize">
    <v-img
      :src="'https://cdn.trickingroyal.com/image/static/main_full.png'"
      :height="windowSize.y - 64"
      :width="windowSize.x"
      aspect-ratio="1"
    >
      <v-container fill-height>
        <v-layout column justify-center align-center>
          <div max-width="500" width="100%">
            <h1 class="headline font-weight-bold">Full Stack</h1>
            <h1 class="display-1 font-weight-bold">Web Development</h1>
            <h1 class="display-1 font-weight-bold">& Mobile Apps</h1>
            <v-divider></v-divider>
            <h1 class="title text-xs-right">by Anton Wieslander, {{data[0]}} - {{data[1]}}</h1>
          </div>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  computed: {},
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    data: []
  }),
  mounted() {
    this.onResize()

    fetch('https://aw-api.azurewebsites.net/api/values')
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.data = data
      })
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>

