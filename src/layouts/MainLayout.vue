<template>
  <q-layout view="lHh Lpr lFf" class="fit">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img
            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            alt="logo"
          />
        </q-avatar>
        <q-toolbar-title> 东数西算</q-toolbar-title>

        <q-tabs>
          <template v-for="route of routes" :key="route.to">
            <q-route-tab :label="route.label" :to="route.to" />
          </template>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="fit">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const routes: { label: string; to: string }[] = [
  {
    label: '首页',
    to: '/home',
  },
  {
    label: '调研工作室',
    to: '/research',
  },
  {
    label: '解读观察室',
    to: '/observe',
  },
  {
    label: '实践学习室',
    to: '/practice',
  },
  {
    label: '国际视角',
    to: '/display',
  },
];
</script>
