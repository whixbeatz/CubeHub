<template>
  <v-btn
    color="primary"
    v-on="$listeners"
    :disabled="disabled"
    :loading="loading"
    depressed
    rounded
    :block="block"
    :outlined="outlined"
    class="text-capitalize"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    color: {
      type: String,
      default: "primary",
    },
    outlined: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    block: {
      type: Boolean,
      default: false
    },
    hasIcon:{
      type: Boolean
    }
  },
};
</script>

<style lang="scss">
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  opacity: 0.5;
  background-color: #c4c4c4 !important;
  color: #ffffff !important;
}
</style>
