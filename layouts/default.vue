<template>
  <div class="hidden">
    <vs-sidebar v-model="active" absolute hover-expand reduce open>
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
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
      <vs-sidebar-item id="Email">
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
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
