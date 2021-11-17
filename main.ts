input.onButtonPressed(Button.A, function () {
    basic.showString("Devon was here")
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
basic.showString("Devon was here")
basic.forever(function () {
	
})
