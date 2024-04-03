import * as SQLite from "expo-sqlite";
import { Places } from "../modals/places";
const db = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    db.transaction((txt) => {
      // Changed `database` to `db` here
      txt.executeSql(
        `CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL)`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    db.transaction((txt) => {
      // Changed `database` to `db` here
      txt.executeSql(
        `INSERT INTO places( title ,imageUri , address ,lat ,lng ) VALUES(?,?,?,?,?)`,
        [
          place.title,
          place.image,
          place.address,
          place.location.lat,
          place.location.lng,
        ],

        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    db.transaction((txt) => {
      txt.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          const place = [];
          for (const dp of result.rows._array) {
            place.push(
              new Places(
                dp.title,
                dp.imageUri,
                {
                  address: dp.address,
                  lat: dp.lat,
                  lng: dp.lng,
                },
                dp.id
              )
            );
          }
          resolve(place);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
