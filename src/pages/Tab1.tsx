import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Restaurants from '../components/Restaurants';
import './Tab1.css'; 

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div id="indexContainer">
          <h1 style={{ color: "white"}}>STUTTGARTER WEINSAFARI</h1>
          <br/>
          15. und 16. September 2020
          <br/><br/><br/><br/>
          Auch dieses Jahr findet wieder die Wein-Safari statt, eine Wein-Entdeckungsreise rund um den Württemberg in Stuttgart-Untertürkheim.
          <br/><br/><br/>
          <h3>Liste der teilnehmenden Besen</h3>
        </div>
        <Restaurants  name="Weinhof Zaiß" street="Württembergstraße 48" />
        <Restaurants  name="Weingut Warth" street="Württembergstraße 48" />
        <Restaurants  name="Familie Currle" street="Württembergstraße 48" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
