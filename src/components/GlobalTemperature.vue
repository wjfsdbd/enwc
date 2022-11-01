<template>
  <v-chart :option="option" autoresize></v-chart>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts';
import { ComposeOption, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { ref } from 'vue';

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LineChart,
  GridComponent,
]);
type Option = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LineSeriesOption
  | GridComponentOption
>;
const option = ref<Option>({
  title: {
    text: '折线图',
    left: 'center',
    top: 20,
  },
  grid: {
    bottom: 40,
  },
  tooltip: {
    trigger: 'item',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {},
  series: [
    {
      data: [10, 11, 12, 11, 9, 13],
      type: 'line',
    },
  ],
});
</script>

<style scoped></style>
