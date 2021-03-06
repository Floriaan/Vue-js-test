<template>
  <div class="loading">
    <div class="loading__wrapper">
      <div class="loadingio-spinner-eclipse-wp17ddgo7oo">
        <div class="ldio-06amsvc9968r">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped lang="scss">
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;

  &__wrapper {
    width: 100%;
    height: 100%;
    background: rgba($color: #fff, $alpha: 0.85);
    position: relative;
  }
}

@keyframes ldio-06amsvc9968r {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-06amsvc9968r div {
  animation: ldio-06amsvc9968r 1s linear infinite;
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 3px 0 0 var(--bg-1);
}
.loadingio-spinner-eclipse-wp17ddgo7oo {
  display: inline-block;
  overflow: hidden;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 250px;
  transform: translateX(-50%);
}
.ldio-06amsvc9968r {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ldio-06amsvc9968r div {
  box-sizing: content-box;
}
</style>
