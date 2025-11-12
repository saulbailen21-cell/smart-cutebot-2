basic.forever(function () {
    let obstacle = 0
    if (obstacle < 15) {
        cuteBot.stopcar()
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0080)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(100, 400)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(40, 100)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
    }
})
