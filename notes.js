"use strict"

const courses = [
  ["Christian", "Annika", "Peter", "Fox", "Hans"], // Kurs 1 mit 2 Teilnehmern
  ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
]
console.log(getSmallestCourse(courses))
// 1a) Ergänze die Funktion, die ermittelt, welcher Kurs
//     bisher am wenigsten Teilnehmer hat. 
//     
//     Wenn 2 Kurse genau gleich viele Teilnehmer haben, ist
//     es egal, welcher Index zurückgegeben wird.
// 
//     Beispiel (für die Variable "courses" von oben): 
//      >> console.log(getSmallestCourse()) 
//      >> Rückgabewert: 0, weil der 1. Kurs (Kurs mit Index 0) am 
//                       wenigsten Teilnehmer hat

function getSmallestCourse(courses) {
    let smallerCourse = courses[0]  

    for (let element of courses) {
        if (element.length < smallerCourse.length)
        {
            smallerCourse = element
        }
      }

    return smallerCourse
}