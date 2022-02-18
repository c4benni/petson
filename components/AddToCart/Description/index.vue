<template>
  <v-row class="max-w-[1114px] mx-auto mb-[204px]">
    <v-row v-for="section in sections" :key="section.title">
      <v-col cols="12">
        <AnimateInView>
          <UiText tag="h5" variant="subtitle-1" :label="section.title" />
        </AnimateInView>
      </v-col>

      <v-col v-if="section.body">
        <AnimateInView>
          <UiText tag="h6" opacity="secondary" :label="section.body" />
        </AnimateInView>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'AddToCart',
  data: () => ({
    sections: [
      {
        title: `Hypoallergenic superpremium complete feed for dogs. lamb & rice formula
        for adult dogs of medium breeds (10 - 25 kg).`,
      },
      {
        title: `Composition:`,
        body: `lamb meat meal (38%), rice (37%), chicken fat, dried apple pulp, salmon oil (2%), chicken liver hydrolyzed, brewer's yeast, glucosamine sulphate (260 mg/kg), chondroitine sulphate (160 mg/kg), mannan-oligosaccharides (150 mg/kg), fructo-oligosaccharides (100 mg/kg), yucca Mojave (100 mg/kg), inulin (90 mg/kg), dried milk thistle (75 mg/kg), dried rosemary (50 mg/kg), dried cloves (50 mg/kg), dried citrus (50mg/kg), dried curcuma (50 mg/kg).`,
      },
      {
        title: `Analytical ingredients:`,
        body: `crude protein 26.0%, crude fat 16.0%, moisture 10.0%, crude ash 7.0%, crude fibre 2.9%, calcium 1.6%, phosphorus 1.3%, sodium 0.2%.`,
      },
      {
        title: `Nutritional composition:`,
        body: `vitamin A (3a672a) 20,000 I.U., vitamin D3 (3a671) 1,500 I.U., vitamin E (3a700) 500 mg, vitamin C (3a312) 200 mg, choline chloride (3a890) 1,800 mg, biotin  (3a880) 0.6 mg, vitamin B1 (3a821) 5 mg, vitamin B2 (3a825i) 6 mg, niacinamide (3a315) 22 mg, calcium-D-pantothenate (3a841) 15 mg, vitamin B6 (3a831) 5 mg, folic acid (3a316) 0.6 mg, vitamin B12 0.05 mg, zinc (3b606) 80 mg, iron (3b106) 70 mg, manganese (3b504) 35 mg, iodine (3b201) 0.65 mg, copper (3b406) 15 mg, selenium (3b810) 0.2 mg. Contains natural antioxidants: tocopherol extracts from vegetable oil (1b306(i)), ascorbyl palmitate (1b304) & rosemary extract.`,
      },
      {
        title: `Metabolizable energy:`,
        body: `3,820 kcal/kg. Omega 3:  0.36 %, Omega 6:  1.90 %.`,
      },
    ],
  }),
}
</script>

<style></style>
