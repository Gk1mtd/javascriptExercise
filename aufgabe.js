"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
function howManyLaunchesInYear(data, year){
  let launches = 0
  let launch_success = 0
  let successfulPayload = 0
  for (const element of data){
    if (element["launch_year"] === year.toString()){
      launches++
      //1a)
      if (element["launch_success"]){
        launch_success++
        //2)
        for (const payload of element["rocket"]["second_stage"]["payloads"]){
          successfulPayload+=payload["payload_mass_kg"]
        }
      }
    }
  }
  return  "\nNumber of launches in " + year + ": " + launches + 
          "\nSuccessful: " + launch_success + 
          "\nUnsuccessful: " + (launches-launch_success) +//1b)
          "\nPayload: " + successfulPayload + "kg"
}
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
console.log(howManyLaunchesInYear(launches, 2018)); // 21 wurden ausgegeben
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 
//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

