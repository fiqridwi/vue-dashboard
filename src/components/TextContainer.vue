<template>
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
      fuga, dolorem corrupti porro debitis magnam! Laudantium earum nobis
      corporis perferendis facilis maiores, et, quam vero quo vel, libero hic
      magnam. Test Ref.
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    submit() {
      console.log(this.$refs.input.value);
    },
  },
};
</script>
