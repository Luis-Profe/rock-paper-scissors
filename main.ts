let mano = 0
input.onGesture(Gesture.Shake, function () {
    mano = randint(0, 2)
    if (mano == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else {
        if (mano == 1) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . #
                # # . # .
                # . # . .
                # # . # .
                . . . . #
                `)
        }
    }
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
