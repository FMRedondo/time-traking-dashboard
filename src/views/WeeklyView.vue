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
                    "current": 32,
                    "previous": 36,
                    "icon": "work"
                },
                {
                    "title": 'Play',
                    "current": 10,
                    "previous": 8,
                    "icon": "play"
                },
                {
                    "title": 'Study',
                    "current": 4,
                    "previous": 7,
                    "icon": "study"
                },
                {
                    "title": 'Exercise',
                    "current": 4,
                    "previous": 5,
                    "icon": "exercise"
                },
                {
                    "title": 'Social',
                    "current": 5,
                    "previous": 10,
                    "icon": "social"
                },
                {
                    "title": 'Self Care',
                    "current": 2,
                    "previous": 2,
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