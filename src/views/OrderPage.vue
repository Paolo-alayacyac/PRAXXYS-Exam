<template>
  <ion-menu content-id="main-content">
    <ion-content>
      <div class="padding">
        <div class="header2">
          <img class="profile" alt="Profile pic" src="../../public/assets/profile.png" />
          <img class="crown" alt="Crown" src="../../public/assets/crown.png" />
          <ion-item href="/Loyaltypage">
              <p>0 Points</p>
          </ion-item>
          <img class="arrow" alt="Arrow" src="../../public/assets/arrow.png" />
        </div>
        <div class="title">
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
      <ion-toolbar color="white" style="padding-left: 10px; margin-top: 8px;">
        <ion-buttons slot="start">
          <ion-menu-button><img alt="menu button" src="../../public/assets/burger.png" /></ion-menu-button>
        </ion-buttons>
        <div class="header3">
          <p class="font1">Our Foods</p>
          <img alt="Profile Pic" src="../../public/assets/bag.png" />
        </div>
      </ion-toolbar>
      <div class="ion-padding">
        <ion-searchbar placeholder="try our new Beef Bibimbowl" class="custom"></ion-searchbar>
        <div class="frame9">
          <ion-buttons class="button2" size="small">All</ion-buttons>
          <ion-buttons class="button3" size="small">Breakfast</ion-buttons>
          <ion-buttons class="button4" size="small">Chicken</ion-buttons>
          <ion-buttons class="button5" size="small">Seafood</ion-buttons>
        </div>

        <ion-grid style="margin-top: 16px;" >
          <ion-row>
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card href="/Bagpage" class="card">
                <img class="cardimg" alt="food" src="../../public/assets/food1.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Steak Fries Veggies</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <p>Meat</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="rating" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg2" alt="food" src="../../public/assets/food2.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Chicken Salad </ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>CHicken</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="food" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg3" alt="food" src="../../public/assets/food3.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Sorvetes Primavera ..</ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>Dessert</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 185</p>
                    <img style="margin-left: 18px" alt="food" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg4" alt="food" src="../../public/assets/food4.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Fried Chiken</ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>Chicken</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 15px" alt="food" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg" alt="food" src="../../public/assets/food1.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Steak Fries Veggies</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <p>Meat</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="food" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg2" alt="food" src="../../public/assets/food2.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Chicken Salad </ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>CHicken</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 18px" alt="food" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg3" alt="food" src="../../public/assets/food3.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Sorvetes Primavera ..</ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>Dessert</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 185</p>
                    <img style="margin-left: 18px" alt="food" src="../../public/assets/Rating.png" />
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6" size-md="4" size-lg="2">
              <ion-card class="card">
                <img class="cardimg4" alt="food" src="../../public/assets/food4.png" />
                <ion-card-header class="cardheader">
                  <ion-card-title style="font-size: 14px;">Fried Chiken</ion-card-title>

                </ion-card-header>

                <ion-card-content>
                  <p>Chicken</p>
                  <div class="flex" style="margin-top: 8px;">
                    <p style="font-size: 16px; color: red;">P 175</p>
                    <img style="margin-left: 15px" alt="food" src="../../public/assets/Rating.png" />
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
  IonToolbar,
  IonSearchbar,
} from "@ionic/vue";
import { defineComponent } from "vue";


export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonToolbar,
    IonSearchbar,
  },


});
</script>

<style scoped>

.card {
  background-color: #E9ECEF;
  border-radius: 16px;
  width: 162px;
  height: 273px;
  box-shadow: none;
  margin-top: 10px;
}

.flex {
  display: flex;
  align-items: center;
}

.cardheader {
  margin-left: 15px;
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

  width: 84px;
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
  width: 86px;
  height: 43px;
  text-transform: lowercase;
}

.font1 {
  font-size: 25px;
  margin-left: 27px;
}

.header3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
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
}


.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-top: 14px;
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
  margin-left: 53px;
}

.header2 {
  display: flex;
  align-items: center;
  position: absolute;
}

.crown {
  margin-left: 14px;
  margin-right: 24px;
}

.arrow {
  margin-left: 14.38px;
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
