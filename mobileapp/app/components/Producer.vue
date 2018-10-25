<template>
    <FlexboxLayout>
    <!-- Shows the list item label in the default color and style. -->
      <Label flexGrow="1" :text="user.name" width="100" fontSize="10" marginBottom="5" marginTop="5"/>
      <Label flexGrow="1" width="30" fontSize="10"  text="addr"/>
      <Label flexGrow="1" width="30" fontSize="10" :text="user.tokensAvailable"/>
      <Label flexGrow="1" width="20" fontSize="10" text="$0.97"/>
      <Button @tap="buy" :user="user" fontSize="10" flexGrow="1" width="10" text="Buy!"/>
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
        this.$showModal(BuyPage, { 
          props: { user: args.object.user }
        }).then(data => {
          // once modal is closed we get this data
          console.log(data);
        });
      }
    }
};
</script>

