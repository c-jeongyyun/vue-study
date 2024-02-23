<template>
  <div class="circle"></div>
</template>

<script setup lang="ts">
// *prop

/** prop
 * * 굵기
 * * 시작 퍼센트
 * * 종료 퍼센트
 * * 끝 부분 동그랗게 할지말지
 * * 애니메이션 할지 말지
 *
 */
</script>

<style scoped lang="scss">
.circle {
  position: relative;
  // background: purple;

  width: 300px;
  height: 300px;
  border-radius: 50%;

  border: 1px solid black;

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: conic-gradient(hotpink 90%, transparent 0);
    mask: radial-gradient(closest-side, transparent 80%, white 80% 100%);
  }
}
</style>
