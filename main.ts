function Spielen () {
    led.toggle(LED_x, LED_x)
    LED_x += pins.map(
    input.acceleration(Dimension.X) * schwierigkeit,
    -1023,
    1023,
    0,
    5
    )
    LED_x += pins.map(
    input.acceleration(Dimension.X) * schwierigkeit,
    -1023,
    1023,
    0,
    5
    )
    led.plot(LED_x, LED_x)
    basic.setLedColor(0x00ff00)
    if (LED_x < 0 || LED_x > 0 || (LED_x < 0 || LED_x > 0)) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.turnRgbLedOff()
        spielphase = "warten"
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "spielen") {
        spielphase = "spielen"
    } else if (receivedString == "leicht") {
        schwierigkeit = 1
    } else if (receivedString == "mittel") {
        schwierigkeit = 3
    } else if (receivedString == "schwer") {
        schwierigkeit = 5
    }
})
let schwierigkeit = 0
let LED_x = 0
let spielphase = ""
radio.setGroup(3)
spielphase = "warten"
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
