<template>
  <div
    texte-center
    style="margin: 20px"
    class="column justify-center align-center"
  >
    <q-timeline-entry heading> Récents </q-timeline-entry>
    <Post
      v-for="problem in postList"
      :key="problem.problem_title"
      v-bind="problem"
    />
  </div>
</template>

<script>
import PostLayer from 'components/PostLayer.vue';
import { defineComponent, ref } from 'vue';

const postList = [
  {
    problem_title: 'probleme de maths',
    date: '29 octobre 2022',
    description_problem: 'Bonjour, je comprendss pas ca',
    pp_profil:
      'https://th.bing.com/th/id/R.5a537e0b861eb2177ae056f26c87c097?rik=OaqK6FPDWti%2f4g&riu=http%3a%2f%2fwww.magicalmaths.org%2fwp-content%2fuploads%2f2012%2f11%2fmaths_image.jpg&ehk=Ef%2fTZg08YV4z5c1PxaQy1rYcsmjGbiEAxH3L6ifAk3o%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
  },
];

export default defineComponent({
  name: 'IndexPage',

  components: {
    PostLayer,
  },

  setup() {
    return {
      postList: postList,
    };
  },
});
</script>
