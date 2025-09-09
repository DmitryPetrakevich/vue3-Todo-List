<template>
  <div class="settings-note">
    <div class="settings-panel">
      <button class="settings-item" @click="format('bold')"> Ж </button>
      <button class="settings-item" @click="format('italic')"> К </button>
      <button class="settings-item" @click="format('underline')"> Ч </button>
      <button class="settings-item" @click="format('strikeThrough')"> З </button>
    </div>
  </div>
</template>

<script setup>
function format(command) {
  document.execCommand(command, false, null);
}
</script>

<style scoped lang="less">
.settings-note {
  padding-left: 20px;
  margin-top: 10px;
}

.settings-panel {
  display: flex;
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
  width: fit-content;
}

.settings-item {
  flex: 1;
  padding: 8px 16px;
  font-size: 16px;
  font-family: monospace;
  color: #777;
  background: white;
  border: none;
  border-right: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.2s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: #f5f5f5;
  }
}
</style>
