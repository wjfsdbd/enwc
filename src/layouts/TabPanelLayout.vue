<template>
  <q-page padding class="fit flex no-wrap">
    <q-tab-panels
      animated
      transition-prev="slide-down"
      transition-next="slide-up"
      v-model="currentTab"
      class="fit"
    >
      <template v-for="tab of tabs" :key="tab.name">
        <q-tab-panel :name="tab.name">
          <slot :name="tab.name" />
        </q-tab-panel>
      </template>
    </q-tab-panels>
    <q-tabs
      vertical
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      v-model="currentTab"
    >
      <template v-for="tab of tabs" :key="tab.name">
        <q-tab :label="tab.label" :name="tab.name" />
      </template>
    </q-tabs>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
export interface Tab {
  label: string;
  name: string;
}
const props = defineProps<{ tabs: Tab[] }>();
const currentTab = ref(props.tabs[0].name);
</script>

<style scoped lang="scss">
.q-tab-panel {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
}
</style>
