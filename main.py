Lives = 0

def on_button_pressed_a():
    global Lives
    Lives = 3
    while Lives:
        basic.show_number(0)
        if input.pin_is_pressed(TouchPin.P0):
            music.play_tone(880, music.beat(BeatFraction.DOUBLE))
            Lives += -1
            basic.show_string("" + str((Lives)))
        elif input.pin_is_pressed(TouchPin.P1):
            pass
        elif input.pin_is_pressed(TouchPin.P2):
            pass
        else:
            if Lives == 0:
                music.play_tone(262, music.beat(BeatFraction.BREVE))
                basic.show_icon(IconNames.HEART)
                basic.pause(100)
                basic.show_icon(IconNames.SMALL_HEART)
                basic.pause(100)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . # . .
                                        . . . . .
                                        . . . . .
                """)
                basic.pause(100)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                """)
                break
input.on_button_pressed(Button.A, on_button_pressed_a)
