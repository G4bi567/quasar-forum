<template>
  <div
    texte-center
    style="margin: 20px"
    class="column justify-center align-center"
  >
    <q-timeline-entry heading> Récents </q-timeline-entry>
    <Post v-for="link in essentialLinks" :key="link.title" v-bind="link" />
  </div>
</template>

<script setup>
import Post from 'components/PostLayer.vue';

import { defineComponent, ref } from 'vue';

const post = [
  {
    problem_title: 'Docs',
    description_problem: 'quasar.dev',
    date: 'school',
    pp_profil: 'https://quasar.dev',
  },
  {
    problem_title: 'Docs',
    description_problem: 'quasar.dev',
    date: 'school',
    pp_profil: 'https://quasar.dev',
  },
  {
    problem_title: 'Docs',
    description_problem: 'quasar.dev',
    date: 'school',
    pp_profil: 'https://quasar.dev',
  },
  {
    problem_title: 'Docs',
    description_problem: 'quasar.dev',
    date: 'school',
    pp_profil: 'https://quasar.dev',
  },
  {
    problem_title: 'Docs',
    description_problem: 'quasar.dev',
    date: 'school',
    pp_profil: 'https://quasar.dev',
  },
];
</script>
