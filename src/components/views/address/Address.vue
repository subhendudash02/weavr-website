<template>
  <div class="tag is-primary is-medium is-clickable has-radius-lg">
    <a :href="`${explorer}/address/${value}`" target="_blank" rel="noopener" class="has-text-white">
      <span class="is-family-monospace" v-bind:title="address">
      {{
        address.substring(0, 8) + "..." + address.substring(address.length - 4)
      }}
    </span>
    <span v-on:click="copy" >
      <unicon class="ml-3" name="arrow-up-right" fill="white" width="16" height="16"></unicon>    
    </span> 
    </a>
  </div>
</template>

<script>
import { CONTRACTS, NETWORK } from '../../../services/constants';

export default {
  name: "Address",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      address: "",
    };
  },
  computed: {
    explorer() {
      return NETWORK.explorer
    }
  },
  created() {
    this.address = this.value;
  },
  /**  
   * ToDo Abstrucked 
   * Restyle the component to have bot GoToChainExplorer 
   * and CopyAddress functionality
  */
  copy() {
      navigator.clipboard.writeText(this.address).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    },
};
</script>

<style scoped lang="scss">
.tag {
  transition: all 150ms;
  text-decoration: none !important;
  &:hover {
    filter: contrast(120%);
  }
}
</style>