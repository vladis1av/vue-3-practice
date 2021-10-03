<template>
  <button class="btn" :disabled="disabled" :class="className">
    <div>
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    red: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        'btn--border': this.border,
        'btn--primary-outline': this.outline,
        'btn--secondary': this.secondary,
        'btn--transparent': this.transparent,
        'btn--red': this.red,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 3px;
  border-radius: 8px;
  border: none;
  color: #000;
  padding: 15px;
  background-color: #fff;
}

.btn--border {
  font-weight: 600;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.05),
    0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.1),
    1px 0 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 4px 7px rgba(0, 0, 0, 0.05),
      0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05),
      1px 0 0 rgba(0, 0, 0, 0.05);
  }
  &:active div {
    margin-top: 5px;
  }
}

.btn--primary-outline {
  background-color: transparent;
  color: #595959;
  max-width: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
}

.btn--secondary {
  color: white;
  background-color: #4683d9;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(70, 131, 217, 0.48),
    inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #437cce;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}

.btn--red {
  background-color: #dd283d;
  color: white;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 15px;
  border: 0;
  outline: 0;
  height: 34px;
  line-height: 34px;
}

.btn--transparent {
  background: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  height: unset;
}
</style>
