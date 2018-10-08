<template>
    <Page>
        <ActionBar title="Power2Peer Blockchain Enabled Trading!" android:flat="true"/>
        <TabView android:tabBackgroundColor="#53ba82"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffffff">
            <TabViewItem title="Battery">
                <GridLayout colums="*" rows="*">
                    <Label class="message" :text="msg" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Community">
                <ProducerList/>          
            </TabViewItem>
            <TabViewItem title="Forum">
                <GridLayout colums="*" rows="*">
                    <Label class="message" text="Tab 3 Content" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import ProducerList from "@/components/ProducerList";

export default {
  components: {
    ProducerList
  },
  data() {
    return {
      msg: "Power2Peer"
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
ActionBar {
  background-color: rgba(47, 95, 141, 0.467);
  color: #ffffff;
}

StackLayout {
  background-color: whitesmoke;
}

ListView {
  background-color: lavender;
  padding-bottom: 10;
  vertical-align: center;
  font-size: 10;
  border-width: 0;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 30;
  color: #333333;
}
</style>
