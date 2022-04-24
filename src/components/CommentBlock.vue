<template>
    <div class="comment-block">
        <h2>Comment ({{ selected.comment.length }}/{{ MAX_COMMENT_LENGTH }})</h2>
        <textarea class="comment-block-textarea" v-model="selected.comment" :maxlength="MAX_COMMENT_LENGTH">

        </textarea>
    </div>
</template>

<script>
    export default {
        name: 'comment-block',
        data: () => ({
        }),
        props: {
            selected: Object
        }
    };
</script>

<style>
    .comment-block {
        grid-area: comment;

        margin: 0px 24px 16px 16px;
        display: flex;
        flex-direction: column;
    }

    .comment-block-textarea {
        width: 100%;
        height: 100%;
        resize: none;
        min-height: 3em;
    }
</style>
