<template>
  <q-timeline-entry :title="problem_title" :subtitle="date" :avatar="pp_url">
    <div>
      {{ description_problem }}
    </div>
  </q-timeline-entry>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostLayer',
  props: {
    problem_title: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      default: '',
    },

    description_problem: {
      type: String,
      default: '',
    },

    pp_profil: {
      type: String,
      default: '#',
    },
  },
});
</script>
