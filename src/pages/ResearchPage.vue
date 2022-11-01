<template>
  <TabPanelLayout :tabs="tabs">
    <template #current>
      <div class="fit row gap-md">
        <q-card class="col">
          <CurrentCentres />
        </q-card>
        <div class="col column gap-md">
          <q-card class="col">
            <q-scroll-area class="fit">
              <template v-for="n in 20" :key="n">
                <div>一段内容</div>
              </template>
            </q-scroll-area>
          </q-card>
          <q-card class="col">
            <CalcDevelop />
          </q-card>
        </div>
      </div>
    </template>
    <template #future>
      <q-card class="fit">
        <FutureCentres />
      </q-card>
    </template>
  </TabPanelLayout>
</template>

<script setup lang="ts">
import CurrentCentres from 'components/CurrentCentres.vue';
import FutureCentres from 'components/FutureCentres.vue';
import CalcDevelop from 'components/CalcDevelop.vue';
import TabPanelLayout, { Tab } from 'layouts/TabPanelLayout.vue';

const tabs: Tab[] = [
  {
    label: '现状分析',
    name: 'current',
  },
  {
    label: '蓝图规划',
    name: 'future',
  },
];
</script>

<style scoped lang="scss"></style>
