"use strict"

let superman_power = 19
let superman_speed = 10
let flash_power = 5
let flash_speed = 600000000000

if (superman_power >= flash_power) 
{
  console.log("Superman hat gewonnen!")
  console.log(superman_power - flash_power)
  console.log("Superman kann " + (superman_power-flash_power) + "Tonnen mehr heben als Flash")
}
else
{
    console.log("Flash hat gewonnen!")
    console.log("Flash ist " + (flash_power-superman_power) + " Mal so schnell wie Superman")
}

