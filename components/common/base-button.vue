<template>
  <button class="base-button" :style="{ width: props.width ? `${props.width}px` : '100%', height: props.height ? `${props.height}px` : 'auto' }">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  width?: number
  height?: number
  type?: 'button' | 'submit' | 'reset'
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'button'
})
</script>

<style scoped lang="scss">
.base-button {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;


  &:disabled {
    cursor: not-allowed;
    background: #cccccc;
    color: #888888;
    opacity: 0.6;
  }
  
  &--primary {
    background: #DB4444;
    color: #FAFAFA;

    &:hover {
      &:not(:disabled) {
        background: #E07575;
      }
    }
  }

  &--secondary {
    border: 1px solid #00000080;
    background: transparent;
    color: #000000;

    &:hover {
      &:not(:disabled) {
        color: #7D8184;
      }
    }
  }

}
</style>