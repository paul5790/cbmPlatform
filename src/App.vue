<template>
  <router-view />
</template>

<script setup>

</script>

<style scoped>
/* 기본 스타일을 설정합니다. 필요에 따라 수정할 수 있습니다. */
body {
  margin: 0;
  padding: 0;
}
</style>

<style>

.scroll {
  overflow-y: auto;
}
.scrollable-card {
  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE에 대한 스크롤바 숨김 */
}

.scrollable-card::-webkit-scrollbar {
  width: 0.2em; /* 스크롤바 너비 조절 */
}

.scrollable-card::-webkit-scrollbar-thumb {
  background-color: transparent; /* 스크롤바 썸 네일 배경색 투명으로 설정하여 숨김 */
}

.scrollable-card-1 {
  scrollbar-width: thin; /* Firefox에 대한 스크롤바 조절 */
  -ms-overflow-style: none; /* IE에 대한 스크롤바 숨김 */
}

.scrollable-card-1::-webkit-scrollbar {
  width: 3px; /* 스크롤바 너비 5px로 조절 */
}

.scrollable-card-1::-webkit-scrollbar-thumb {
  background-color: #ccc; /* 스크롤바 썸 네일 배경색 설정 (원하는 색상으로 변경 가능) */
  border-radius: 3px; /* 스크롤바 썸 네일의 모서리를 둥글게 조절 */
}
</style>
