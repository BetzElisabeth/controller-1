radio.setGroup(3)
let spielphase = "warten"
let schwieriegkeit = 1
let Platzhalter = input.acceleration(Dimension.X)
basic.forever(function () {
    if (spielphase == "warten") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (spielphase == "spielen") {
    	
    }
})
