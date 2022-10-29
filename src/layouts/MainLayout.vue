<template style="box-sizing: border-box">
  <q-layout view="hhh LpR fff">
    <q-header
      reveal
      elevated
      class="bg-black text-white"
      height-hint="98"
      style="padding: 5px 10px"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-tabs align="left">
          <q-route-tab to="/" label="Home page" />
          <q-route-tab to="/One" label="Page One" />
          <q-route-tab to="/Two" label="Page Two" />
          <q-route-tab to="/Three" label="Page Three" />
        </q-tabs>

        <q-toolbar-title>
          <img
            bg-color="white"
            vertical-middle
            style="height: 30px; background-color: white
            radius-border: 20px;"
            class="logo"
            src="~assets/logo_variante.png"
          />
          Forum Csud
        </q-toolbar-title>
        <q-btn
          @click="turnmode"
          color="secondary"
          icon-right="mail"
          label="On Right"
        />
        <q-input
          dark
          dense
          standout
          v-model="text"
          input-class="text-right"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>

        <q-fab
          v-model="fab2"
          label="Actions"
          external-label
          vertical-actions-align="left"
          color="none"
          icon="none"
          direction="down"
          :hide-label="hideLabels"
          style="background-image: url('~assets/upscale-245339439045212.png')"
        >
          <q-fab-action
            :hide-label="hideLabels"
            external-label
            color="primary"
            @click="onClick"
            icon="mail"
            label="Email"
          />
          <q-fab-action
            :hide-label="hideLabels"
            external-label
            color="secondary"
            @click="onClick"
            icon="alarm"
            label="Alarm"
          />
          <q-fab-action
            :hide-label="hideLabels"
            external-label
            color="orange"
            @click="onClick"
            icon="airplay"
            label="Airplay"
          />
          <q-fab-action
            :hide-label="hideLabels"
            external-label
            color="accent"
            @click="onClick"
            icon="room"
            label="Map"
          />
        </q-fab>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
          style="margin-left: 20px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
    >
      <q-list>
        <q-item-label header>hahahaahah</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      behavior="desktop"
      elevated
    >
    </q-drawer>

    <q-page-container style="background-color: grey">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style>
.logo {
  height: 30px;
}
</style>
<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const modeView = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      turnmode() {
        modeView.value != modeView.value;
        console.log(modeView);
      },
    };
  },
});
</script>
