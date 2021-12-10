input.onButtonPressed(Button.A, function () {
    while (true) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showLeds(`
                . . . # .
                # # # . .
                . . # . .
                # . # . .
                . . . . .
                `)
        } else if (input.pinIsPressed(TouchPin.P1)) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . . .
                . # . . .
                . . . . .
                `)
        } else if (input.pinIsPressed(TouchPin.P2)) {
        	
        } else {
        	
        }
    }
})
