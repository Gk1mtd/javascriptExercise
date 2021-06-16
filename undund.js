//# Die Schleuse

"use strict"
// Wenn ein Boot ankommt, dann müssen erst beide Schleusentore geöffnet sein, damit das Boot durchfahren kann.

let schleusentor_is_open = false
let schleusentorLinks = true
let schleusentorRechts = true
let ampel = "rot"

//Schleuse
if (schleusentorLinks && schleusentorRechts)
{
    schleusentor_is_open=true
    console.log("Das Tor ist geöffnet")
}

//Ampel
if (!schleusentorLinks && !schleusentorRechts)
{
    ampel="Rot"
}
else if (schleusentorLinks && schleusentorRechts)
{
    ampel="Grün"
}
else if(schleusentorLinks || schleusentorRechts)
{
    ampel="Gelb"
}

console.log("Die Ampel steht auf " + ampel)