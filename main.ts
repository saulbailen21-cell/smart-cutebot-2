let obstacle = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    obstacle = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (obstacle < 15) {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(100, 400)
        basic.pause(200)
        cuteBot.forward()
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(40, 100)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
    } else {
    	
    }
})
