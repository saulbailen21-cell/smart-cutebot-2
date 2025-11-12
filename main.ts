let obstacle = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    obstacle = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (obstacle < 15) {
        cuteBot.stopcar()
    }
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(100, 400)
    basic.pause(100)
    cuteBot.forward()
    basic.pause(2000)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(40, 100)
    basic.pause(200)
    cuteBot.forward()
    basic.pause(1000)
})
