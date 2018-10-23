<template>
<FlexboxLayout>
  <!-- Shows the list item label in the default color and style. -->
  <Label flexGrow="1" :text="user.name" width="100" fontSize="20" marginBottom="5" marginTop="5"/>
  <Label flexGrow="1" width="40" text="456 some rd., another city, your state, 12345"/>
  <Label flexGrow="1" width="30" text="$0.97 kWh"/>
  <Button @tap="buy" :user="user" flexGrow="1" width="10" text="Buy!"/>
</FlexboxLayout>
</template>

<style scoped>
</style>

<script>
import BuyPage from "@/components/BuyPage";
export default {
    components: {
      BuyPage
    },
    props: ['user'],
    data() {
      return  {
        buyMode: false,
        buyPage: BuyPage
      }
    },
    methods: {
      buy(args) {
        //console.log(args.object)
        this.buyMode = true;
        this.$showModal(BuyPage, { props: { user: args.object.user }});
      }
    }
};
</script>

