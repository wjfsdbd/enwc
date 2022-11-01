<template>
  <v-chart :option="option" autoresize></v-chart>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts';
import { ComposeOption, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components';
import { ref } from 'vue';

use([CanvasRenderer, TitleComponent, TooltipComponent, PieChart]);
type Option = ComposeOption<
  TitleComponentOption | TooltipComponentOption | PieSeriesOption
>;
const option = ref<Option>({
  title: {
    text: '成本分析图',
    left: 'center',
    top: 20,
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 20,
          name: 'A',
        },
        {
          value: 30,
          name: 'B',
        },
        {
          value: 40,
          name: 'C',
        },
      ],
    },
  ],
});
</script>

<style scoped></style>
