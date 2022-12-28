basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
let odleglosc = maqueen.Ultrasonic(PingUnit.Centimeters)
if (odleglosc > 5) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    odleglosc = maqueen.Ultrasonic(PingUnit.Centimeters)
    while (odleglosc > 5) {
        odleglosc = maqueen.Ultrasonic(PingUnit.Centimeters)
        basic.showNumber(odleglosc)
    }
    maqueen.motorStop(maqueen.Motors.All)
} else {
    basic.clearScreen()
    basic.showIcon(IconNames.No)
}
