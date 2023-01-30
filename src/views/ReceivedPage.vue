<template>
    <ion-content class="ion-padding">
        <div class="flex">
            <img style="" alt="Like" src="../../public/assets/positive.png" />
            <h1>
                Order Received!
            </h1>
            <p class="order">Your order <a style="color:crimson">No. 19049585</a> has successfully take and <br />now
                being processed. Kindly wait for our
                notification <br /> regarding your order.</p>
        </div>

        <div class="buttons">
            <ion-button href="/Home" expand="block" class="trackorder">
                <p style="text-decoration: none; color: white;">Track Order</p>
            </ion-button>
            <ion-button fill="clear" class="button2">Back to Home</ion-button>
        </div>
    </ion-content>
</template>

<script lang="ts">
import {
    IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";


export default defineComponent({
    components: {
        IonContent,
    },
});
</script>

<style scoped>
.trackorder {
    height: 60px;
    --background: #D71921;
    --border-radius: 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
}

.button2 {
    text-decoration: none;
    color: #D71921;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    --background-activated: none;
    --background-activated-opacity: none;
    --background-focused: none;
    --color-activated: none;
}

.buttons {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0%;
    background: #FFFFFF;
    width: 92%;
    margin-bottom: 16px;
}

h1 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 120%;
    text-align: center;
    color: #000000;
    margin-top: 47px;
}

.order {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #6C757D;
    margin-top: 16px;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 103px;
}
</style>