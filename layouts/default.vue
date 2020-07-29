<template>
  <div class="hidden">
    <vs-sidebar v-model="active" absolute hover-expand reduce open>
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home" vs-sidebar-item:to="/">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="github">
        <template #icon>
          <i class="bx bxl-github"></i>
        </template>
        Github
      </vs-sidebar-item>
      <vs-sidebar-item id="email">
        <template #icon>
          <i class="bx bx-envelope"></i>
        </template>
        Email
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-music"></i>
            </template>
            Music
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item id="spotify">
          <template #icon>
            <i class="bx bxl-spotify"></i>
          </template>
          Spotify
        </vs-sidebar-item>
        <vs-sidebar-item id="ituns">
          <template #icon>
            <i class="bx bxl-apple"></i>
          </template>
          Apple Music
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-chat"></i>
            </template>
            Communication
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord"></i>
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="slack">
          <template #icon>
            <i class="bx bxl-slack"></i>
          </template>
          Slack
        </vs-sidebar-item>
      </vs-sidebar-group>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge>
              28
            </template>
          </vs-avatar>

          <!-- <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar> -->
        </vs-row>
      </template>
    </vs-sidebar>
    <nuxt />
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'home',
  }),
  // watch: {
  //   active: (val) => {
  //     let destPath = val
  //     if (val === 'home') {
  //       destPath = '/'
  //     }
  //     this.$router.push({
  //       path: destPath,
  //     })
  //   },
  // },
}
</script>
