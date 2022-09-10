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
                    "current": 5,
                    "previous": 7,
                    "icon": "work"
                },
                {
                    "title": 'Play',
                    "current": 1,
                    "previous": 2,
                    "icon": "play"
                },
                {
                    "title": 'Study',
                    "current": 0,
                    "previous": 1,
                    "icon": "study"
                },
                {
                    "title": 'Exercise',
                    "current": 1,
                    "previous": 1,
                    "icon": "exercise"
                },
                {
                    "title": 'Social',
                    "current": 1,
                    "previous": 3,
                    "icon": "social"
                },
                {
                    "title": 'Self Care',
                    "current": 0,
                    "previous": 1,
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