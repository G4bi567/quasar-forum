<template>
  <div
    texte-center
    style="margin: 20px"
    class="column justify-center align-center"
  >
    <q-timeline-entry heading> Récents </q-timeline-entry>
    <Post />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Post from 'components/PostLayer.vue';
</script>
