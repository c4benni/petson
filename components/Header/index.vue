<template>
  <v-app-bar app elevate-on-scroll elevation="2" color="primary" height="80">
    <v-container class="flex items-center max-w-[1520px]">
      <h1 v-ripple class="rounded">
        <NuxtLink to="/" class="white--text flex items-center">
          <Logo class="mr-[13px] text-mdlg" />
          petson.
        </NuxtLink>
      </h1>

      <v-spacer />

      <div class="grid grid-flow-col gap-x-52">
        <template v-for="item in menuButtons">
          <div
            v-if="!item.to"
            :key="item.title"
            role="button"
            class="uppercase white--text inline-block rounded"
          >
            {{ item.title }}
            <VIcon class="white--text">{{ item.icon }}</VIcon>
          </div>

          <NuxtLink
            v-else
            :key="`${item.title}-link`"
            :to="item.to"
            class="uppercase white--text inline-block rounded"
          >
            {{ item.title }}
          </NuxtLink>
        </template>
      </div>

      <v-spacer />

      <HeaderActionBtn class="mr-[24px]" to="/cart">
        <v-icon left> mdi-cart </v-icon>
        Cart (0)
      </HeaderActionBtn>

      <HeaderProfileBtn />
    </v-container>
  </v-app-bar>
</template>

<script>
const menuButton = (title, to, icon) => ({ title, to, icon })

export default {
  name: 'Header',
  data: () => ({
    menuButtons: [
      menuButton('Products', null, 'mdi-chevron-down'),
      menuButton('Promotions', '#'),
      menuButton('Blog', '#'),
    ],
  }),
}
</script>
