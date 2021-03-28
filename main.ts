basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
