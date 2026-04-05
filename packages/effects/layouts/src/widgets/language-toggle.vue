<script setup lang="ts">
import type { SupportedLanguagesType } from '@mamba/locales';

import { SUPPORT_LANGUAGES } from '@mamba/constants';
import { Languages } from '@mamba/icons';
import { loadLocaleMessages } from '@mamba/locales';
import { preferences, updatePreferences } from '@mamba/preferences';

import { VbenDropdownRadioMenu, VbenIconButton } from '@mamba-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string | undefined) {
  if (!value) return;
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <VbenDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <VbenIconButton class="hover:animate-[shrink_0.3s_ease-in-out]">
        <Languages class="size-4 text-foreground" />
      </VbenIconButton>
    </VbenDropdownRadioMenu>
  </div>
</template>
