input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
	
})
