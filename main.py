def on_button_pressed_a():
    while True:
        if input.pin_is_pressed(TouchPin.P0):
            pass
        elif input.pin_is_pressed(TouchPin.P1):
            pass
        elif input.pin_is_pressed(TouchPin.P2):
            pass
        else:
            pass
input.on_button_pressed(Button.A, on_button_pressed_a)
