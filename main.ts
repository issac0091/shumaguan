let itme = TM1637.create(
DigitalPin.P13,
DigitalPin.P14,
1,
4
)
let time = 0
let min = 0
basic.forever(function () {
    itme.intensity(8)
    itme.showbit(Math.trunc(min / 10), 0)
    itme.showbit(min % 10, 1)
    itme.showbit(Math.trunc(time / 10), 2)
    itme.showbit(time % 10, 3)
    itme.showDP(1, true)
    basic.pause(1000)
    time = time + 1
    if (time == 60) {
        time = 0
        min = min + 1
    }
    if (min == 99) {
        time = 0
        min = 0
    }
})
basic.forever(function () {
	
})
