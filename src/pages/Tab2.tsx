import React from 'react';
import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';

// setting jwt publicly accessible is save when exp date and orgin is set
var jwt = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRYNVBVQ05aVjQifQ.eyJpc3MiOiI5N1I4NDg5RzdRIiwiaWF0IjoxNTkwMDAwMDAyLCJleHAiOjE2MDkzNzI4MDB9.3JLt5v00_o0HKieoum-9mVdLMcGPFjkWdUKHvQ1KnVu7Kc0v3E2qq1e540vrHgNL8N9kCyDpNEvXIDXhxV1Clw";

const Tab2: React.FC = () => {
  useIonViewWillEnter(() => {
    mapkit.init({
      authorizationCallback: function(done) {
          done(jwt);
      },
      language: "de"
    })

    var MarkerAnnotation = mapkit.MarkerAnnotation,
            clickAnnotation;

    var zaiss = new mapkit.Coordinate(48.7840, 9.2606),
        warth = new mapkit.Coordinate(48.7852, 9.2662),
        currle = new mapkit.Coordinate(48.774850, 9.284673);

    var zaissAnnotation = new MarkerAnnotation(zaiss, { color: "#f4a56d", title: "Zaiß" });
    var warthAnnotation = new MarkerAnnotation(warth, { color: "#f4a56d", title: "Warth" });
    var currleAnnotation = new MarkerAnnotation(currle, { color: "#f4a56d", title: "Currle" });

    /*var Stuttgart = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(48.7841, 9.2610),
      new mapkit.CoordinateSpan(0.0550, 0.0150)
    );*/
    var map = new mapkit.Map("map");
    map.showsMapTypeControl = true;
    map.showsPointsOfInterest = true;
    map.showsUserLocation = true;
    map.showsUserLocationControl = true;
    //map.region = Stuttgart;
    map.showItems([zaissAnnotation, warthAnnotation, currleAnnotation]);
  });
  
  return (
    <IonPage>
      <IonContent>
        <div id="map"></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
