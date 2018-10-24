<template>
    <StackLayout>
        <Label width="90%" flexGrow="1">
            <FormattedString>
                <Span text="Buying from : "/>
                <Span :text="user.name" fontWeight="bold" />

            </FormattedString>
        </Label>
        <TextField width="90%" :text="units + 'units'" 
                hint="Energy units to buy..." 
                v-model="units"
                borderColor="#ccccce"
                borderWidth="3"
                flexGrow="1"
        />
        <Button width="60%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                text="Proceed to Checkout" />  
        <Button width="60%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                text="Buy more" />  
        <Button width="60%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                @tap="$modal.close(units)" 
                text="Close" />  

    </StackLayout>
</template>

<script>
export default {
    props: ["user"],
    data() {
        return {
            units: 0
        }
    }
    
}
</script>

<style scoped>
.reloadbtn {
  background-color: dodgerblue;
}
</style>
