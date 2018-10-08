<template>
<FlexboxLayout>
  <!-- Shows the list item label in the default color and style. -->
  <Label flexGrow="1" :text="user.name" width="100" fontSize="20" marginBottom="5" marginTop="5"/>
  <Label flexGrow="1" width="100" text="$0.97 kWh"/>
  <Button flexGrow="1" width="90" text="Buy!"/>
</FlexboxLayout>
</template>

<style scoped>
</style>

<script>
export default {
    props: ['user']
};
</script>

