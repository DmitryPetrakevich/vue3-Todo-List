<template>
  <div class="update-todos">
    <svg
      class="update-todos-img"
      fill="currentColor"
      width="30px"
      height="30px"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      @click="$emit('update-todos')"
    >
      <path
        d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.update-todos {
  position: relative;
  display: inline-block;
}

.update-todos-img {
  position: relative;
  top: 5px;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: rgb(187, 0, 0);
    transform: scale(1.1);
  }
}
</style>