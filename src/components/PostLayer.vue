<template>
  <div class="row justify-center">
    <q-timeline-entry heading>{{Title}}</q-timeline-entry>
    <q-timeline-entry
      title="{{Probleme-title}}"
      subtitle="{{date}}"
      avatar="{{photo-profil}}"
    >
      <div>
        {{problem-description}}
         <q-img
          :src="{{}}"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
        />
      </div>
    </q-timeline-entry>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostLayer',
  props: {
    title: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
