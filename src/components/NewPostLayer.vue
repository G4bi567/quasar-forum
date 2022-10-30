<template>
  <div>
    <q-timeline-entry
      style="
        margin: 0px 0px 10px 0px;
        background-color: black;
        border-radius: 20px;
        padding: 5px 10px;
      "
      color="grey"
      :title="problem_title"
      :subtitle="date"
      :avatar="pp_url"
    >
      <div>
        {{ description_problem }}
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

    description_problem: {
      type: String,
      default: '',
    },

    pp_profil: {
      type: String,
      default: '#',
    },

    pp_exemple: {
      type: String,
      default: '#',
    },

    pp_exemple_own: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
