<template>
    <ion-content class="ion-padding">
        <div class="header">
            <ion-button href="/Orderpage" class="backbutton"><img alt="menu button"
                    src="../../public/assets/icon/back.png" />
            </ion-button>
            <p style="font-size: 25px; margin-left: 16px;">Meat</p>
            <img style="margin-left: 206px;" alt="Profile Pic" src="../../public/assets/bag.png" />
        </div>
        <div class="item1">
            <img alt="food1" src="../../public/assets/pngwing.png" />
        </div>
        <div>
            <p class="p1">Steak Fries Veggies</p>
            <img alt="rating" src="../../public/assets/Rating.png" />
            <p class="p2">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu
                aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.
            </p>
        </div>
        <div class="addbutton">
            <h1 style="font-size: 25px; font-weight: 700; color: #D71921;">P 172</h1>
            <div class="flex">
                <ion-button class="add">-</ion-button>
                <p style="margin-left: 19px; margin-right: 19px;">1</p>
                <ion-button class="add">+</ion-button>
            </div>
        </div>
        <ion-searchbar placeholder="try our new Beef Bibimbowl" class="custom"></ion-searchbar>
        <h2 style="font-weight: 700; margin-top: 25px;">Beverages</h2>
        <div class="selection">
            <ion-button class="b1">Regular</ion-button>
            <ion-button class="b2">Large</ion-button>
            <ion-button class="b2">X-Large</ion-button>
        </div>
        <div class="seconditem">
            <img alt="food1" src="../../public/assets/sauce.png" />
            <div class="">
                <h6 style="font-weight: 700; ">Tomato Sauce</h6>
                <ion-label style="font-weight: 400; font-size: 12px;">sauce</ion-label>
                <h3 style="font-weight: 700; color: #D71921;">P 49</h3>
            </div>

            <div class="seconditem2">
                <ion-radio-group title="radio" value="custom-checked" placeholder="">
                    <ion-radio title="radio" style="display: none;" placeholder=""></ion-radio>
                    <ion-radio title="radio" value="custom-checked" placeholder=""></ion-radio>
                </ion-radio-group>
                <div class="flex">
                    <ion-button class="add">-</ion-button>
                    <p style="margin-left: 19px; margin-right: 19px;">1</p>
                    <ion-button class="add">+</ion-button>
                </div>
            </div>
        </div>

        <div class="seconditem3" style="margin-bottom: 300px;">
            <img alt="food1" src="../../public/assets/food20.png" />
            <div style="margin-right: 20px;">
                <h6 style="font-weight: 700; ">White Rice</h6>
                <ion-label style="font-weight: 400; font-size: 12px;">sauce</ion-label>
                <h3 style="font-weight: 700; color: #D71921;">P 25</h3>
            </div>

            <div class="seconditem2">
                <ion-radio-group title="radio" value="custom-checked" placeholder="">
                    <ion-radio title="radio" style="display: none;" placeholder=""></ion-radio>
                    <ion-radio title="radio" value="custom" placeholder=""></ion-radio>
                </ion-radio-group>
                <div class="flex">
                    <ion-button class="add">-</ion-button>
                    <p style="margin-left: 19px; margin-right: 19px;">1</p>
                    <ion-button class="add">+</ion-button>
                </div>
            </div>
        </div>
        <ion-button href="/SummaryPage" expand="block" class="addtocart">
            <p style="text-decoration: none; color: white;"> Order Now!</p>
        </ion-button>

        
    </ion-content>
</template>

<script lang="ts">
import {
    IonContent,
    IonRadio,
    IonRadioGroup,
    IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";


export default defineComponent({
    components: {
        IonContent,
        IonRadio, IonRadioGroup,

        IonButton,
    },

});
</script>

<style scoped>
.addtocart {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 90%;
    --background: #D71921;
  --background-hover: #c21820;
  --background-activated: #c21820;
  --background-focused: #c21820;
  --color: white;
  --border-radius: 16px;
    height: 60px;
    width: 92%;
}

.seconditem2 {
    display: grid;
    place-content: end;
    place-items: end;
}

ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;
    --color: #ddd;
    --color-checked: #FFC02E;
}

.seconditem {
    width: 100%;
    height: 100px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
}

.seconditem3 {
    width: 100%;
    height: 100px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    padding-left: 5px;
    padding-right: 16px;
}

.b1 {
    --background: #FFC02E;
    --border-radius: 14px;
    color: white;
    --box-shadow: none;
}

.b2 {
    --background: none;
    --border-radius: 14px;
    --border-style: solid;
    --border-color: #DEE2E6;
    color: #000;
    --box-shadow: none;
}

.selection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
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

.flex {
    display: flex;
    align-items: center;
}

.addbutton {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p1 {
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
    margin-top: 16px;
    margin-bottom: 18px;
}

.p2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #6C757D;
    margin-top: 18px;
}

.header {
    display: flex;
    align-items: center;
    width: 100%;
}

.item1 {
    width: 100%;
    height: 239px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
}

.backbutton {
    --background: #DEE2E6;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    --border-radius: 15px;
}

.add {
    --background: #DEE2E6;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    --border-radius: 15px;
    color: red;
    font-weight: 900;
}
</style>
