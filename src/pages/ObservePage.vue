<template>
  <TabPanelLayout :tabs="tabs">
    <template #micro>
      <div class="fit row gap-md">
        <q-card class="col">
          <CostAnalyze />
        </q-card>
        <q-card class="col">
          <GlobalTemperature />
        </q-card>
      </div>
    </template>
    <template #macro>
      <div class="fit column gap-md">
        <q-card class="col">
          <CarbonEmit />
        </q-card>
        <div class="col row gap-md">
          <q-card class="col"> </q-card>
          <q-card class="col">
            <EastWest />
          </q-card>
          <q-card class="col"> </q-card>
        </div>
      </div>
    </template>
  </TabPanelLayout>
</template>

<script setup lang="ts">
import TabPanelLayout, { Tab } from 'layouts/TabPanelLayout.vue';
import CostAnalyze from 'components/CostAnalyze.vue';
import GlobalTemperature from 'components/GlobalTemperature.vue';
import CarbonEmit from 'components/CarbonEmit.vue';
import EastWest from 'components/EastWest.vue';

const tabs: Tab[] = [
  {
    label: '微观一瞥',
    name: 'micro',
  },
  {
    label: '宏观一览',
    name: 'macro',
  },
];
</script>

<style scoped></style>
