let Lives = 0
input.onButtonPressed(Button.A, function () {
    Lives = 3
    while (true) {
        if (input.pinIsPressed(TouchPin.P0)) {
            music.playTone(880, music.beat(BeatFraction.Double))
            Lives += -1
            basic.showString("" + (Lives))
        } else if (input.pinIsPressed(TouchPin.P1)) {
        	
        } else if (input.pinIsPressed(TouchPin.P2)) {
        	
        } else {
            if (Lives == 0) {
                music.playTone(262, music.beat(BeatFraction.Breve))
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.showIcon(IconNames.SmallHeart)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(100)
                break;
            }
        }
    }
})
