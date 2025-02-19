<template>
    <!-- directive -->
    <!-- <div v-text="tags"></div> -->
    <div v-if="!tags.length">You have no any tags</div>
    <!-- <div v-for="tag in tags">{{ tag }}</div> -->

    <!-- <hr> -->

    <!-- interpolation -->
    <div>{{ tags }}</div>

    <pre>{{ newTag }}</pre>

    <input
        type="text"
        v-model.trim="newTag"
        @keydown.enter="tags.push(newTag)"
        @keydown.tab.prevent="tags.push(newTag)"
    />

    <div>{{ tags.length }}</div>
</template>

<script>
export default {
    data: () => ({
        tags: ["Vue", "React", "Angular"],
        newTag: "Next"
    })
}
</script>