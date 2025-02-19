<template>
    <!-- directive -->
    <!-- <div v-text="tags"></div> -->
    <div v-if="!tags.length">You have no any tags</div>
    <!-- <div v-for="tag in tags">{{ tag }}</div> -->

    <!-- <hr> -->

    <!-- interpolation -->
    <div>{{ tags }}</div>

    <input
        type="text"
        v-bind:value="newTag"
        @keydown.enter="tags.push($event.target.value)"
        @keydown.tab.prevent="tags.push($event.target.value)"
    />

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