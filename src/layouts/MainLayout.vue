<template>
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
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>

          Forum Csud
        </q-toolbar-title>
        <q-input
          rounded
          outlined
          color="black"
          bg-color="white"
          v-model="text"
          label="Rounded outlined"
        />

        <q-fab
          v-model="fab2"
          label="Actions"
          external-label
          vertical-actions-align="left"
          color="purple"
          icon="keyboard_arrow_down"
          direction="down"
          :hide-label="hideLabels"
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
      <!-- drawer content -->
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      behavior="desktop"
      elevated
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
