<template>
    <div>
        <TimeComponent v-for="(task, index) in this.data" :key="index"  :title="task.title" :current="task.current" :previous="task.previous" :icon="task.icon"/>
    </div>
</template>

<script>
import TimeComponent from '../components/TimeComponent.vue';

export default {
    data() {
        return {
            data: [
                {
                    "title": 'Work',
                    "current": 103,
                    "previous": 128,
                    "icon": "work"
                },
                {
                    "title": 'Play',
                    "current": 23,
                    "previous": 29,
                    "icon": "play"
                },
                {
                    "title": 'Study',
                    "current": 13,
                    "previous": 19,
                    "icon": "study"
                },
                {
                    "title": 'Exercise',
                    "current": 11,
                    "previous": 18,
                    "icon": "exercise"
                },
                {
                    "title": 'Social',
                    "current": 21,
                    "previous": 23,
                    "icon": "social"
                },
                {
                    "title": 'Self Care',
                    "current": 7,
                    "previous": 11,
                    "icon": "self-care"
                }
            ]
        }
    },
    components: {
        TimeComponent
    }
}
</script>