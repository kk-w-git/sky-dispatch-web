<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@mamba/common-ui';
import { LOGIN_PATH } from '@mamba/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
