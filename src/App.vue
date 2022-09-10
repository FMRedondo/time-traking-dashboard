<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section>
    <div class="container">
      <div class="user">
        <div class="info">
          <img src="./assets/images/image-jeremy.png" alt="jeremy">
          <div>
            <span class="report">Repory for</span>
            <h2 class="name">Jeremy <span>Robson</span></h2>
          </div>
        </div>
        <div class="menu">
          <router-link :to="{name: 'daily'}">Daily</router-link>
          <router-link :to="{name: 'weekly'}">Weekly</router-link>
          <router-link :to="{name: 'monthly'}">Monthly</router-link>
        </div>
      </div>
        <RouterView transition="fade" class="dashboard"/>
    </div>
  </section>
</template>

<style>
    #app{
      width: 100%;
      min-height: 100vh;
      background: var(--very-dark-blue);
      display: flex;
      align-items: center;
      justify-content: center;
    }

     #app section{
      width: 100%;
     }

    .router-link-active{
      color: white !important;
    }

    .container{
      width: 70% !important;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }

    .user{
      width: 18em;
      overflow: hidden;
      background: var(--dark-blue);
      border-radius: 20px;
    }

    .info, .menu{
      padding: 2em;
    }

    .info{
      background: var(--blue);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: left;
    }

    .info img{
      border: 3px solid white;
      border-radius: 50%;
      width: 6em;
      margin-bottom: 2.5em;
    }

    .report{
      font-weight: 300;
      color: var(--pale-blue);
      font-size: 12px;
    }

    .name{
      font-weight: 300;
      color: white;
      font-size: 32px;
      margin-bottom: 1.5em;
    }

    .menu{
      background: var(--dark-blue);
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    .menu a{
      color: var(--pale-blue);
      text-decoration: none;
    }

    .dashboard{
      width: calc(100% - 18em);
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
      padding-left: 2em;
    }

    /* RESPONSIVE */

    @media (max-width: 1080px){
      .container{
        flex-direction: column;
        width: 90% !important;
      }
      .container  div{
        width: 100%;
        margin: 0 auto
      }
      .dashboard{
        padding: 0;
        margin: 1em 0 3em 0!important;
      }

      .user{
        margin: 2em 0px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .info{
        flex-direction: row;
        justify-content: center;
        height: 8em;
        
      }

      .menu{
        flex-direction: row;
        justify-content: center;
      }

      .info{
        align-items: center;
        padding-bottom: 0 !important;
      }

      .info img{
        width: 4em;
        height: 4em;
        margin-right: 1em;
        margin-bottom: 1.5em;
      }

      .name{
        font-size: 20px;
      }

      .info, .menu{
      padding: 1.5em;
    }
  }


</style>
