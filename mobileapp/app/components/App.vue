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
                <StackLayout height="95%">
                    <Label textWrap="true" height="70">
                        <FormattedString>
                            <Span text="Energy Producers" fontWeight="bold" fontSize="25" />
                        </FormattedString>
                    </Label>
                   <ListView for="user in users" borderRadius="12">
                        <v-template>
                            <!-- Shows the list item label in the default color and style. -->
                            <Label :text="user.name" fontSize="20" marginBottom="5" marginTop="5"/>
                        </v-template>
                    </ListView>
                </StackLayout>            
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
  import ProducerService from '@/services/ProducerService';

  export default {
    data() {
      return {
        msg: 'Power2Peer'
      }
    },
    computed: {
        usercount() {
            return this.$store.state.registeredusers.length
        },
        users() {
            return this.$store.state.registeredusers
        }
    },
    mounted() {
        this.producerService = new ProducerService();
        this.producerService.getProducers().then( producers => {
            console.log(JSON.stringify(producers))
            this.$store.commit('setregisteredusers', producers.data._embedded.registeredusers);
        }).catch(error => console.log(error));
    }
  }
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
        background-color:lavender;
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
