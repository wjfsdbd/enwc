<template>
  <v-chart :option="option" autoresize></v-chart>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts';
import chinaMap from 'assets/china.json';
import { ComposeOption, registerMap, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { MapChart, MapSeriesOption } from 'echarts/charts';
import {
  GeoComponentOption,
  LegendComponent,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components';
import { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes';
import { ref } from 'vue';

use([
  CanvasRenderer,
  MapChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
registerMap('china', chinaMap as GeoJSONSourceInput);
type Option = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | GeoComponentOption
  | MapSeriesOption
>;
const option = ref<Option>({
  title: {
    text: '中国目前数据中心分布',
    left: 'center',
    top: 20,
  },
  tooltip: {
    trigger: 'item',
  },
  geo: {
    map: 'china',
    bottom: '-25%',
    emphasis: {
      label: {
        show: true,
      },
      itemStyle: {
        areaColor: '#2a333d',
      },
    },
    itemStyle: {
      areaColor: '#323c48',
      borderColor: '#111',
    },
  },
  series: [],
});
</script>

<style scoped></style>
