<template>
    <!-- directive -->
    <!-- <div v-text="tags"></div> -->
    <div v-if="!tags.length">You have no any tags</div>
    <div v-for="tag in tags">{{ tag }}</div>

    <hr>

    <!-- interpolation -->
    <div>{{ tags }}</div>

    <input type="text" v-bind:value="newTag" value="nuxt"/>

    <!-- <div>{{ tags.length }}</div> -->
</template>

<script>
export default {
    data: () => ({
        tags: ["Vue", "React", "Angular"],
        newTag: "Next"
    })
}
</script>