<template>
     <Label dock="left" textWrap="true" height="40" 
        backgroundImage="~/assets/images/birds.jpg">
            <FormattedString>
                Name: {{ anitem.name }}
            </FormattedString>
        </Label>
           
</template>

<script>
export default {
    props: ["item"],
    data() {
        return {
            anitem: this.item
        }
    }
}
</script>

<style>

</style>
