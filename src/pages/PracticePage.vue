<template>
  <q-page padding class="column">
    <q-timeline layout="loose" class="fit">
      <q-timeline-entry heading>成功案例</q-timeline-entry>
      <template v-for="n of 10" :key="n">
        <q-timeline-entry
          subtitle="案例"
          :side="n % 2 === 0 ? 'left' : 'right'"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </q-card-section>
          </q-card>
        </q-timeline-entry>
      </template>
    </q-timeline>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped></style>
