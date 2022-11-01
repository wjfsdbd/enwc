<template>
  <v-chart :option="option" autoresize></v-chart>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts';
import { ComposeOption, graphic, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { ScatterChart, ScatterSeriesOption } from 'echarts/charts';
import {
  GridComponent,
  GridComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components';
import { ref } from 'vue';

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  ScatterChart,
  GridComponent,
]);
type Option = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | ScatterSeriesOption
  | GridComponentOption
>;
const seriesData = [
  [44056, 81.8, 23968973, 'Australia', 2015],
  [43294, 81.7, 35939927, 'Canada', 2015],
  [13334, 76.9, 1376048943, 'China', 2015],
  [21291, 78.5, 11389562, 'Cuba', 2015],
  [38923, 80.8, 5503457, 'Finland', 2015],
  [37599, 81.9, 64395345, 'France', 2015],
  [44053, 81.1, 80688545, 'Germany', 2015],
  [42182, 82.8, 329425, 'Iceland', 2015],
  [5903, 66.8, 1311050527, 'India', 2015],
  [36162, 83.5, 126573481, 'Japan', 2015],
  [1390, 71.4, 25155317, 'North Korea', 2015],
  [34644, 80.7, 50293439, 'South Korea', 2015],
  [34186, 80.6, 4528526, 'New Zealand', 2015],
  [64304, 81.6, 5210967, 'Norway', 2015],
  [24787, 77.3, 38611794, 'Poland', 2015],
  [23038, 73.13, 143456918, 'Russia', 2015],
  [19360, 76.5, 78665830, 'Turkey', 2015],
  [38225, 81.4, 64715810, 'United Kingdom', 2015],
  [53354, 79.1, 321773631, 'United States', 2015],
];
const option = ref<Option>({
  title: {
    text: '气泡图',
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
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
    scale: true,
  },
  series: [
    {
      name: '2015',
      data: seriesData,
      type: 'scatter',
      symbolSize: (raw) => {
        return Math.sqrt(raw[2]) / 5e2;
      },
      emphasis: {
        label: {
          show: true,
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(129, 227, 238)',
          },
          {
            offset: 1,
            color: 'rgb(25, 183, 207)',
          },
        ]),
      },
    },
  ],
});
</script>

<style scoped></style>
