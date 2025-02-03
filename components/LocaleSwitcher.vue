<script setup>
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

const switchLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<template>
  <select @change="switchLocale($event.target.value)" :value="locale">
    <option v-for="loc in availableLocales" :key="loc" :value="loc">
      {{ loc }}
    </option>
  </select>
</template> 