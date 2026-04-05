<script lang="ts" setup>
import { computed } from 'vue';

import { AuthPageLayout } from '@mamba/layouts';
import { preferences } from '@mamba/preferences';

import { $t } from '#/locales';

const appName = computed(() => preferences.app.name);
const logo = computed(() => preferences.logo.source);
const logoDark = computed(() => preferences.logo.sourceDark);
const sloganImage = '/static/admin_slogan.png';
</script>

<template>
  <AuthPageLayout
    :app-name="appName"
    :copyright="false"
    :logo="logo"
    :logo-dark="logoDark"
    :slogan-image="sloganImage"
    :toolbar="false"
    :toolbar-list="['color', 'layout', 'theme']"
    :page-description="$t('authentication.pageDesc')"
    :page-title="$t('authentication.pageTitle')"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </AuthPageLayout>
</template>
