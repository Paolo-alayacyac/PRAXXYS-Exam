<template>
    <ion-menu content-id="main-content">
        <ion-content>
            <div class="padding">
                <div class="header2">
                    <ion-avatar>
                        <img class="profile" alt="Profile pic" src="../../public/assets/profile.png" />
                    </ion-avatar>
                    <img class="crown2" alt="Crown" src="../../public/assets/crown.png" />
                    <ion-item href="/Loyaltypage">
                        <p>0 Points</p>
                    </ion-item>
                    <img class="arrow2" alt="Arrow" src="../../public/assets/arrow.png" />
                </div>
                <div>
                    <p class="title1">Chou Tzuyu</p>
                    <p class="number">+63 912 345 6789</p>
                </div>
            </div>
            <ion-list lines="none">
                <ion-item href="/home" class="itemzz">
                    <img alt="logo" src="../../public/assets/icon/logo1.png" />
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item href="/Orderpage" class="href">
                    <img alt="icon" src="../../public/assets/icon/Vector.png" />
                    <ion-label>Order now</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector2.png" />
                    <ion-label>Notification</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector3.png" />
                    <ion-label>Store Locator</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector4.png" />
                    <ion-label>FAQ's</ion-label>
                </ion-item>
                <hr class="hr" />
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector5.png" />
                    <ion-label>My Orders</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector6.png" />
                    <ion-label>My Account</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector7.png" />
                    <ion-label>My Favorites</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector8.png" />
                    <ion-label>Order Tracker</ion-label>
                </ion-item>
                <ion-item>
                    <img alt="icon" src="../../public/assets/icon/Vector9.png" />
                    <ion-label>Order History</ion-label>
                </ion-item>
            </ion-list>
            <div class="ion-padding">
                <ion-button class="logout">Logout</ion-button>
            </div>
        </ion-content>
    </ion-menu>

    <ion-page id="main-content">
        <ion-content>
            <div class="header">
                <ion-buttons slot="start">
                    <ion-menu-button><img alt="menu button" src="../../public/assets/burger.png" /></ion-menu-button>
                </ion-buttons>
                <p style="font-size: 25px; margin-left: 27px;">Loyalty Points</p>
            </div>

            <div class="ion-padding">

                <div class="flex">
                    <img alt="crown" src="../../public/assets/crown10.png" />
                    <div class="flex2">
                        <p style="font-size: 20px;">Beginner Tier</p>
                        <ion-button href="/orderpage"
                            style="font-size: 14px; margin-left: 60px; text-transform: lowercase;" fill="clear"
                            color="danger">View All</ion-button>
                    </div>
                </div>

                <p class="para">
                    Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.
                </p>
                <div class="circle">
                    <img class="profile" alt="Profile pic" src="../../public/assets/circle1.png" />
                    <p class="para2" style="position: absolute;">
                        0 / 160
                    </p>
                </div>

                <div class="flex3">
                    <p style="font-size: 25px;">Rewards</p>
                    <ion-button href="/orderpage" style="font-size: 14px; text-transform: lowercase;" fill="clear"
                        color="danger">How it Works</ion-button>
                </div>

                <div class="frame9">
                    <ion-buttons class="button2" size="small">All</ion-buttons>
                    <ion-buttons class="button3" size="small">Beginner</ion-buttons>
                    <ion-buttons class="button4" size="small">Intermediate</ion-buttons>
                    <ion-buttons class="button5" size="small">Loyal</ion-buttons>
                </div>
                <div class="seconditem3" style="margin-bottom: 300px;">
                    <img alt="food1" src="../../public/assets/pngwing.png" style="width: 89px; height:60px" />
                    <div style="margin-left: 10px;">
                        <p style="font-weight: 700; ">White Rice</p>
                        <p style="font-weight: 400; font-size: 12px;">sauce</p>
                        <div class="flex">
                            <img alt="Crown" src="../../public/assets/crown.png" />
                        <p style="font-weight: 700; color: #D71921; margin-left: 10px;">20 points</p>
                        </div>
                    </div>
                </div>

            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonButton, IonButtons,
    IonMenu,
    IonMenuButton,
    IonPage,

} from "@ionic/vue";
import { defineComponent } from "vue";


export default defineComponent({
    components: {
        IonContent,
        IonButton,
        IonButtons,

        IonMenu,
        IonMenuButton,
        IonPage,

    },
});
</script>

<style scoped>
.flex {
    display: flex;
    align-items: center;
}

.seconditem3 {
    width: 100%;
    height: 100px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding-left: 5px;
    padding-right: 16px;
}
.seconditem2 {
    display: grid;
    place-content: end;
    place-items: end;
}


.circle {
    margin-top: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item {
    --color-activated: transparent;
}

.points2 {
    color: black;
    text-decoration: none;
}

.href {
    --ion-item-background-activated: red;
    --ion-item-background-hover: red;
}

.order {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 16px;
    top: 80%;
    background: #D71921;
    --background-hover: #c21820;
    --background-activated: #c21820;
    --background-focused: #c21820;
    color: white;
    border-radius: 16px;
    width: 161px;
    height: 60px;
}


.logout {
    --background: #D71921;
    --background-hover: #c21820;
    --background-activated: #c21820;
    --background-focused: #c21820;
    --color: white;
    --border-radius: 16px;
    width: 165px;
    height: 45px;
    margin-top: 50px;
}


.hr {
    border-top: 1px solid #DEE2E6;
    margin: 16px;
}

.padding {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
}

.profile {
    border-radius: 100%;
}

.profile2 {
    border-radius: 100%;
    width: 46px;
    height: 46px;
}

.crown {

    margin-right: 10px;
    height: 32px;
    margin-top: 8px
}

.crown2 {
    margin-left: 20px
}

.arrow {
    height: 32px;
    margin-top: 8px;
}


.title1 {
    font-size: 25px;
    margin-top: 83px;
}

.number {
    font-weight: 400;
    color: #6c757d;
}

.ion-label2 {
    margin-left: 16px;
}

ion-label {
    margin-left: 16px;
}

.itemzz {
    margin-top: 24px;
}

.profile2 {
    border-radius: 100%;
    width: 46px;
    height: 46px;
}

.header2 {
    display: flex;
    align-items: center;
    position: absolute;
}

.frame9 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    margin-top: 16px;
}

.button2 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D71921;
    --background-hover: #c21820;
    --background-activated: #c21820;
    --background-focused: #c21820;
    color: white;
    border-radius: 16px;
    width: 50px;
    height: 43px;
    text-transform: lowercase;
}

.button3 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DEE2E6;
    --background-hover: #DEE2E6;
    --background-activated: #DEE2E6;
    --background-focused: #DEE2E6;
    color: #6C757D;
    border-radius: 16px;
    width: 94px;
    height: 43px;
    text-transform: lowercase;
}

.button4 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DEE2E6;
    --background-hover: #DEE2E6;
    --background-activated: #DEE2E6;
    --background-focused: #DEE2E6;
    color: #6C757D;
    border-radius: 16px;

    width: 120px;
    height: 43px;
    text-transform: lowercase;
}

.button5 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DEE2E6;
    --background-hover: #DEE2E6;
    --background-activated: #DEE2E6;
    --background-focused: #DEE2E6;
    color: #6C757D;
    border-radius: 16px;
    width: 67px;
    height: 43px;
    text-transform: lowercase;
}

.arrow2 {
    margin-left: 1px;
}

.crown {

    margin-right: 10px;
    height: 32px;
    margin-top: 8px
}

.para {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #6C757D;
    margin-top: 18px;
}

.para2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 120%;
}

.flex {
    display: flex;
    align-items: center;
}

.flex2 {
    display: flex;
    align-items: center;
    margin-left: 18px;
}

.flex3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 45px;
}

.img2 {
    margin-top: 5px;
}

.header {
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-top: 16px;
}
</style>