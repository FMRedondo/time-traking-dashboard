<template>
    <div class="task">
       <div :class="`header ${icon}`">
            <img :src="`/src/assets/images/icon-${icon}.svg`" :alt="icon">
       </div>
       <div class="body">
        <div class="card-info">
            <p>{{title}}</p>
            <span>...</span>
        </div>
        <div class="hours">
            <h3>{{current}}hrs</h3>
            <p class="last">Last week - {{previous}}hrs</p>
        </div>
       </div>
    </div>
</template>

<style scoped>
    .task{
        width: 30%;
        border-radius: 20px;
        overflow: hidden;
    }

    .header{
        height: 4em;
        display: flex;
        justify-content: end;
        padding-right: 1.5em;
    }

    .body{
        background: var(--dark-blue);
        height: calc(100% - 2em);
        transform: translateY(-1em);
        border-radius: 20px;
        padding: 2em;
    }

    .card-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
    }

    .card-info p{
        font-weight: 300;
        color: white;
    }

    .card-info span{
        color: var(--pale-blue);
        font-weight: bold;
        letter-spacing: 3px;
        line-height: 12px;
    }


    h3{
        font-size: 45px;
        font-weight: 300;
        margin-bottom: 0.2em;
    }

    .hours{
        display: flex;
        flex-direction: column;
    }

    .last{
        font-size: 14px;
        color: var(--pale-blue);
        font-weight: 300;
    }
    /*
        colores de las tarjetas
    */

    .work{
        background: var(--light-orange);
    }

    .play{
        background: var(--soft-blue);
    }

    .study{
        background: var(--light-red);
    }
    .exercise{
        background: var(--lime-green);
    }

    .social{
        background: var(--violet);
    }

    .self-care{
        background: var(--soft-orange);
    }

    @media (max-width: 1080px){
      .task{
        width: 100%;
        margin: 0 auto;
      }

      .hours{
        flex-direction: row;
        width: 100%;
        align-content: space-between !important;
        align-items: center;
        gap: 2em;
      }
    }


</style>


<script>
    export default{
        props:{
            title: String,
            current: Number,
            previous: Number,
            icon: String
        }
    }
</script>