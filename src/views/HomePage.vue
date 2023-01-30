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
      <ion-buttons class="order">
        <router-link to="/Orderpage" style="text-decoration: none; color: white;"> Order Now!</router-link>
      </ion-buttons>
      <ion-toolbar color="white" class="header">
        <ion-buttons slot="start">
          <ion-menu-button><img alt="menu button" src="../../public/assets/burger.png" /></ion-menu-button>
        </ion-buttons>
        <div class="header3">
          <div style="display:flex; margin-left: 50px;">
            <img class="crown" alt="Crown" src="../../public/assets/crown.png" />
            <ion-item href="/Loyaltypage">
              <p>0 Points</p>
            </ion-item>
            <img class="arrow" alt="Arrow" src="../../public/assets/arrow.png" />
          </div>
          <ion-avatar style="margin-top: 14px;">
            <img class="profile2" alt="Profile pic" src="../../public/assets/profile.png" />
          </ion-avatar>
        </div>
      </ion-toolbar>

      <div class="ion-padding">

        <div class="flex">
          <img alt="Logo" src="../../public/assets/homelogo.png" />
          <div class="homeleft">
            <p class="p1">Anneoyong, Chou!</p>
            <p class="p2">What do you want <br />to eat?</p>
          </div>
        </div>

        <ion-searchbar placeholder="try our new Steak Fries Veggies" class="custom"></ion-searchbar>
        <div class="flex special">
          <p style="font-size: 20px;">Special Offers!</p>
          <ion-button href="/orderpage" style="font-size: 14px;" fill="clear" color="danger">View
            All</ion-button>
        </div>

        <swiper :options="{ slidesPerView: true, loop: true }">
          <swiper-slide><img class="meal" alt="Meal" src="../../public/assets/meal1.png" /></swiper-slide>
          <swiper-slide><img class="meal" alt="Meal" src="../../public/assets/meal1.png" /></swiper-slide>
          <swiper-slide><img class="meal" alt="Meal" src="../../public/assets/meal1.png" /></swiper-slide>
          <swiper-slide><img class="meal" alt="Meal" src="../../public/assets/meal1.png" /></swiper-slide>
          <template v-slot:wrapper-start>
            <img class="meal" alt="Meal" src="../../public/assets/meal1.png" />
            <img class="meal" alt="Meal" src="../../public/assets/meal1.png" />
            <img class="meal" alt="Meal" src="../../public/assets/meal1.png" />
            <img class="meal" alt="Meal" src="../../public/assets/meal1.png" />
          </template>
        </swiper>

        <p style="font-size: 20px; margin-top: 16px;">Category</p>

        <ion-slides style="margin-top: 16px;" :options="{ loop: true, spaceBetween: -130 }">
          <ion-slide><img class="category" alt="Meal" src="../../public/assets/category1.png" /></ion-slide>
          <ion-slide><img class="category" alt="Meal" src="../../public/assets/category1.png" /></ion-slide>
          <ion-slide><img class="category" alt="Meal" src="../../public/assets/category1.png" /></ion-slide>
        </ion-slides>

        <p style="font-size: 20px; margin-top: 16px;">What's New?</p>
        <img class="new" alt="new" src="../../public/assets/new.png" />

        <p style="font-size: 20px; margin-top: 16px;">Most Popular</p>

        <div class="carditem">
        </div>

        <ion-grid style="margin-top: 8px; margin-bottom: 250px;">
          <ion-row>
            <ion-col>
              <ion-card class="card">
                <img class="cardimg" alt="Silhouette of mountains" src="../../public/assets/food1.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Steak Fries Veggies</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <p>Meat</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="Silhouette of mountains" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="card">
                <img class="cardimg2" alt="Silhouette of mountains" src="../../public/assets/food2.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Chicken Salad </ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>CHicken</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="Silhouette of mountains" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row style="margin-top: 20px;">
            <ion-col>
              <ion-card class="card">
                <img class="cardimg3" alt="Silhouette of mountains" src="../../public/assets/food3.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Sorvetes Primavera ..</ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>Dessert</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 185</p>
                    <img style="margin-left: 18px" alt="Silhouette of mountains" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="card">
                <img class="cardimg4" alt="Silhouette of mountains" src="../../public/assets/food4.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Fried Chiken</ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>Chicken</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="Silhouette of mountains" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';


export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonSearchbar,
    IonToolbar,
    Swiper,
    SwiperSlide,
  },


});
</script>

<style scoped>
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

.carditem {
  display: grid;
}

.card {
  background-color: #E9ECEF;
  border-radius: 16px;
  width: 162px;
  height: 273px;
  margin-right: 9px;
  box-shadow: none;
}

.cardheader {
  margin-left: 20px;
  display: flex;
  flex-flow: column-reverse;
}

.cardimg {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 42px;
  padding-bottom: 48px;
}

.cardimg2 {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 39px;
  padding-bottom: 45px;
}

.cardimg3 {
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 20px;
  padding-bottom: 26px;
}

.cardimg4 {
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 42px;
  padding-bottom: 45px;
}

.new {
  margin-top: 16px;
  height: 210px;
  width: 360px;
}

.swiper {
  margin-top: 8px;
}

.special {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}

.meal {
  margin-right: 10px;
  border-radius: 14px;
}

.category {
  margin-right: 10px;
  border-radius: 14px;
  width: 200px;
  height: 300px;
}

.custom {
  --background: #F8F9FA;
  --placeholder-color: black;
  --placeholder-background-color: #F8F9FA;
  --icon-color: red;
  --clear-button-color: #F8F9FA;
  --border-radius: 16px;
  --placeholder-opacity: 30%;
  --box-shadow: none;
  height: 60px;
  border: 1px solid #DEE2E6;
  border-radius: 16px;
  margin-top: 22px;
}

.homeleft {
  margin-left: 16px;
}

.p1 {
  font-size: 14px;
}

.p2 {
  font-size: 25px;
}

.flex {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
}

.header3 {
  display: flex;
  flex-grow: inherit;
  align-items: center;
  justify-content: space-between;
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

.itemzz {
  margin-top: 24px;
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

.header2 {
  display: flex;
  align-items: center;
  position: absolute;
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

.arrow2 {
  margin-left: 1px;
}

.title1 {
  font-size: 25px;
  margin-top: 83px;
}

.number {
  font-weight: 400;
  color: #6c757d;
}

ion-label {
  margin-left: 16px;
}
</style>
