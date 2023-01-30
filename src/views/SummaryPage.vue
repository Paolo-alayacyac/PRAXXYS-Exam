<template>
    <ion-content class="ion-padding">
        <div class="header">
            <ion-button href="/Bagpage" class="backbutton"><img alt="menu button"
                    src="../../public/assets/icon/back.png" />
            </ion-button>
            <p style="font-size: 25px; margin-left: 16px;">Order Summary</p>
        </div>
        <div class="firstitem">
            <div>
                <p style="font-weight: 700; font-size: 16px;">Chou Tzuyu</p>
                <ion-label style="font-weight: 400; font-size: 12px; color: #6C757D;">
                    +63 912 345 6789<br />chou.tzu-yu@email.com
                </ion-label>
            </div>
        </div>
        <div class="firstitem">
            <div>
                <p style="font-weight: 700; font-size: 16px;">My Home Address</p>
                <ion-label style="font-weight: 400; font-size: 12px; color: #6C757D;">
                    No. 21 St. Agustin Street, Brgy. De Jose <br /> Delgado City 2234 Philippines
                </ion-label>
            </div>
        </div>
        <div class="firstitem">
            <div>
                <p style="font-weight: 700; font-size: 16px;">Work/Office</p>
                <ion-label style="font-weight: 400; font-size: 12px; color: #6C757D;">
                    3rd flr Anyeong Bldg. Seareal St. Joaqin<br />City 3456 Philippines
                </ion-label>
            </div>
        </div>

        <h2 style="font-weight: 700; margin-top: 25px;">Orders</h2>

        <div class="seconditem">
            <div class="flex1">
                <img alt="food1" src="../../public/assets/pngwing.png" style="width: 67px; height: 45px;" />
                <div style="margin-left: 18px;">
                    <p style="font-weight: 700; font-size: 16px;">Steak Fries Veggies</p>
                    <ion-label style="font-weight: 400; font-size: 12px;">
                        1x Tomato Sauce<br />1x Regular Coke<br />1x Fried Chicken
                    </ion-label>
                </div>
            </div>

            <hr class="hr" />
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                <p style="font-weight: 700; color: #D71921; font-size: 20px;">P 185</p>
                <div class="flex">
                    <ion-button class="add">-</ion-button>
                    <p style="margin-left: 19px; margin-right: 19px;">1</p>
                    <ion-button class="add">+</ion-button>
                </div>
            </div>
        </div>

        <h2 style="font-weight: 700; margin-top: 25px;">Payment Option</h2>
        <hr class="hr1" />

        <hr class="hr2" />
        
        <div class="thirditem">
            <div>
                <p style="font-weight: 700; font-size: 16px;">Loyalty Points<a style="color: #D71921;">(0 points)</a></p>
                <ion-label style="font-weight: 400; font-size: 12px; color: #6C757D; margin-top: 8px;">
                    Pay  using your earned loyalty points
                </ion-label>
            </div>
        </div>

        <div class="thirditem">
            <div style="display: flex; flex-direction: column;">
                <img style="height: 30px; width: 80px;" alt="food1" src="../../public/assets/PayPal.png" />
                <ion-label style="font-weight: 400; font-size: 12px; color: #6C757D; margin-top: 8px;">
                    A new tab will open to access your account
                </ion-label>
            </div>
        </div>

        <div class="thirditem">
            <div style="display: flex; flex-direction: column;">
                <img style="height: 30px; width: 80px;" alt="food1" src="../../public/assets/paynamic.png" />
                <ion-label style="font-weight: 400; font-size: 12px; color: #6C757D; margin-top: 8px;">
                    Choose paynamics services available from you
                </ion-label>
            </div>
        </div>

        <div style="display: flex; justify-content: space-between; height: max-content; margin-top: 20px;">
            <p style="font-weight: 700;">Subtotal</p>
            <p style="font-weight: 700;">P 185</p>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <p style="font-weight: 700;">Delivery Charge</p>
            <p style="font-weight: 700;">P 59</p>
        </div>

        <div class="flexert" style="justify-content: space-between;">
            <div>
                <p style="font-weight: 400;">
                    Grand Total
                </p>
                <p style="font-weight: 700; font-size: 16px;">
                    P 244
                </p>
            </div>
            <ion-button href="/Receivedpage" expand="block" class="placeorder">
                <p style="text-decoration: none; color: white;">Place Order</p>
            </ion-button>
        </div>

    </ion-content>
</template>

<script lang="ts">
import {
    IonContent,
    IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";


export default defineComponent({
    components: {
        IonContent,
        IonButton,
    },

});
</script>

<style scoped>
.add {
    --background: #DEE2E6;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    --border-radius: 15px;
    color: red;
    font-weight: 900;
}

.h1 {
    margin-top: 0px;
}

.hr1 {
    border-top: 1px solid #DEE2E6;
    margin-bottom: 16px;
}

.hr2 {
    border-top: 1px solid #DEE2E6;
    margin-top: 20px;
}

.hr {
    border-top: 1px solid #DEE2E6;
    margin-top: 16px;
    margin-bottom: 16px;
}

.firstitem {
    width: 100%;
    height: 100px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
}

.seconditem {
    width: 100%;
    height: 181px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
}

.thirditem {
    width: 100%;
    height: 79px;
    background: #E9ECEF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
}

.placeorder {
    display: flex;
    align-items: center;
    justify-content: center;
    --background: #D71921;
    --background-hover: #c21820;
    --background-activated: #c21820;
    --background-focused: #c21820;
    --color: white;
    --border-radius: 16px;
    height: 45px;
    width: 213px;
}

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

.flexert {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0%;
    background: #FFFFFF;
    width: 94%; 
    height: 83px;
    border-top: 1px solid #DEE2E6;
}

.flex1 {
    display: flex;
    align-items: center;
    padding-top: 16px;
}

.addbutton {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header {
    display: flex;
    align-items: center;
    width: 100%;
}

.backbutton {
    --background: #DEE2E6;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    --border-radius: 15px;
}
</style>
