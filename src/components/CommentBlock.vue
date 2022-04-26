<template>
    <div class="comment-block">
        <span class="comment-block-title">Comment</span>
        <span class="comment-block-counter">({{ selected.comment.length }}/{{ MAX_COMMENT_LENGTH }})</span>
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

        display: grid;
        grid-template: auto 1fr / 1fr 1fr;
        /* max-width: 64em; */
    }

    .comment-block-counter {
        text-align: right;
    }

    .comment-block-textarea {
        grid-column: span 2;
        line-height: 2ex;
        height: 8ex;
        resize: none;
        min-height: 3em;
    }
</style>
