enum RadioMessage {
    message1 = 49434,
    progA = 15793,
    progB = 10390,
    progC = 23451,
    testreq = 61214,
    testreq2 = 32222
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
})
radio.onReceivedMessage(RadioMessage.progA, function () {
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedMessage(RadioMessage.progC, function () {
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedMessage(RadioMessage.testreq, function () {
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendMessage(RadioMessage.testreq2)
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendMessage(RadioMessage.progA)
})
radio.onReceivedMessage(RadioMessage.testreq2, function () {
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
radio.onReceivedMessage(RadioMessage.progB, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendMessage(RadioMessage.progB)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    radio.sendMessage(RadioMessage.testreq)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendMessage(RadioMessage.progC)
})
radio.setFrequencyBand(15)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
radio.sendNumber(918)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
})
