sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == pizza) {
        info.changeScoreBy(1)
        pizza.setPosition(randint(10, 160), randint(10, 120))
        music.baDing.play()
    } else {
        info.changeScoreBy(2)
        mySprite.setStayInScreen(true)
        burger.setPosition(randint(10, 160), randint(20, 120))
        music.baDing.play()
    }
})
let projectile: Sprite = null
let burger: Sprite = null
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ddddddddddddddddddddd1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ddddddddddddddddddddddddddddd111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ddddddddddddddddddddddddddddddddddd11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111dddddddddd1111111111111111111dddddddddd111ffffffffffffffffffffffffffffffff111fffffff111fffffff111fff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff11ddddddddd111111111111111111111111111ddddddddd11fffffffffffffffffffffffffffff11111fffff11111fffff11111ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1dddddddd111111111111111111111111111111111dddddddd1ffffffffffffffffffffffffffff11111fffff11111fffff11111ff
    fffff111ffffffffffffffffffffffffffffffffffffffffffff11ddddddd1111111111111111111111111111111111111ddddddd11ffffffffffffffffffffffffff11111fffff11111fffff11111ff
    ffff11111ffffffffffffffffffffffffffffffffffffffffff1ddddddd11111111111111111111111111111111111111111ddddddd1fffffffffffffffffffffffff11111fffff11111fffff11111ff
    ffff111111fffffffffffffffffffffffffffffffffffffff11dddddd111111111111111111111111111111111111111111111dddddd11fffffffffffffffffffffff11111fffff11111fffff11111ff
    ffff1111111fffffffffffffffffffffffffffffffffffff1dddddd1111111111111111111111111111111111111111111111111dddddd1ffffffffffffffffffffff11111fffff11111fffff11111ff
    ffff11111111fffffffffffffffffffffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111dddddd1fffffffffffffffffffff11111fffff11111fffff11111ff
    ffff111111111ffffffffffffffffffffffffffffffff11ddddd1111111111111111111111111111111111111111111111111111111ddddd11fffffffffffffffffff11111fffff11111fffff11111ff
    ffff1111111111ffffffffffffffffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffffffff11111fffff11111fffff11111ff
    ffff11111111111ffffffffffffffffffffffffffff1dddddd11111111111111111111111111111111111111111111111111111111111dddddd1fffffffffffffffff11111fffff11111fffff11111ff
    ffff111111111111ffffffffffffffffffffffffff1dddddd1111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffffff11111fffff11111fffff11111ff
    ffff1111111111111ffffffffffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111111111111111dddddd1fffffffffffffff11111fffff11111fffff11111ff
    ffff11111111111111fffffffffffffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffffffff11111fffff11111fffff11111ff
    ffff111111111111111fffffffffffffffffffff1ddddd1111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffff11111fffff11111ff
    ffff1111111111111111fffffffffffffffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffffff11111fffff11111fffff11111ff
    ffff11111111111111111fffffffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffff11111fffff11111fffff11111ff
    ffff111111111111111111ffffffffffffffff1dddd1111111111111111111111111111111111111111111111111111111111111111111111111dddd1ffffffffffff1111111111111111111111111ff
    ffff1111111111111111111ffffffffffffff1ddddd1111111111111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffff1111111111111111111111111ff
    ffff11111111111111111111ffffffffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffff1111111111111111111111111ff
    ffff11111111111111111111ffffffffffff1dddd11111111111111111111111111111111111111111111111111111111111111111111111111111dddd1ffffffffff1111111111111111111111111ff
    ffff11111111111111111111fffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffff11111111111111111111111fff
    ffff11111111111111111111ffffffffff1ddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffffffff1ddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffffffffffff11111fffffffffff
    ffff1111111111111111111ffffffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffffffff11111fffffffffff
    ffff11111111111111111111fffffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffffffff11111fffffffffff
    ffff11111111111111111111fffffffff1dddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd1ffffffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffffff1dddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd1fffffffffffffffff11111fffffffffff
    ffff11111111111111111111fffffff1ddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffffff11111fffffffffff
    ffff1111111111111111111ffffffff1ddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffff11dddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd1ffffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1fffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd11ffffffffffffff11111fffffffffff
    ffff11111111111111111111ffffff1ddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd11ffffffffffffff11111fffffffffff
    ffff11111111111111111111fffff11dddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd11ffffffffffffff11111fffffffffff
    ffff1111111111111111111ffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111111111fffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111111111fffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111111111fffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111111111fffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111111111fffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff1111111111111111111ffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff1111111111111111111ffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff111111111111111111fffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111111ffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff1111111111111111fffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff111111111111111ffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111111fffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff1111111111111ffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff111111111111fffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111111ffffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff1111111111fffffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff111111111ffffffffffffffff1ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd1ffffffffffffff11111fffffffffff
    ffff11111111fffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffff11111fffffffffff
    ffff1111111ffffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffff11111fffffffffff
    ffff111111fffffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffff11ddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd11ffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffff1dddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd11ffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffff1dddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1fffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffff1dddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1fffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffff11dddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffff1dddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffff1ddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1ffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffff1dddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1fffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffff1ddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1fffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffff1dddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1ffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffff1ddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1ffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffff1ddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1ffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffff1ddddddd111111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1fffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffff1dddddddd1111111111111111111111111111111111111111111111111111111111111111111111111dddddddd1fffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffff1ddddddd1111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1ffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffff1ddddddd11111111111111111111111111111111111111111111111111111111111111111111111ddddddd1fffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffff1dddddddd111111111111111111111111111111111111111111111111111111111111111111111dddddddd1fffffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffffff1dddddddd1111111111111111111111111111111111111111111111111111111111111111111dddddddd1ffffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffffff1dddddddd11111111111111111111111111111111111111111111111111111111111111111dddddddd1fffffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffffff1ddddddddd111111111111111111111111111111111111111111111111111111111111111ddddddddd1fffffffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffffffff1ddddddddd1111111111111111111111111111111111111111111111111111111111111ddddddddd1ffffffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffffffff1ddddddddd11111111111111111111111111111111111111111111111111111111111ddddddddd1fffffffffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffffffffff1ddddddddd111111111111111111111111111111111111111111111111111111111ddddddddd1ffffffffffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffffffffff1dddddddddd1111111111111111111111111111111111111111111111111111111dddddddddd1ffffffffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffffffffff1ddddddddddd111111111111111111111111111111111111111111111111111ddddddddddd1fffffffffffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffffffffffff1ddddddddddd1111111111111111111111111111111111111111111111111ddddddddddd1ffffffffffffffffffffffffffff11111fffffffffff
    ffff11111fffffffffffffffffffffffffffffffffff1dddddddddddd111111111111111111111111111111111111111111111dddddddddddd1fffffffffffffffffffffffffffff11111fffffffffff
    ffff11111ffffffffffffffffffffffffffffffffffff11dddddddddddd11111111111111111111111111111111111111111dddddddddddd11fffffffffffffffffffffffffffffff111ffffffffffff
    ffff11111ffffffffffffffffffffffffffffffffffffff1ddddddddddddd1111111111111111111111111111111111111ddddddddddddd1fffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111ffffffffffffffffffffffffffffffffffffffff1dddddddddddddd111111111111111111111111111111111dddddddddddddd1ffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111fffffffffffffffffffffffffffffffffffffffff11ddddddddddddddd111111111111111111111111111ddddddddddddddd11fffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111fffffffffffffffffffffffffffffffffffffffffff1dddddddddddddddddd1111111111111111111dddddddddddddddddd1fffffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111ffffffffffffffffffffffffffffffffffffffffffff11ddddddddddddddddddddddddddddddddddddddddddddddddddd11ffffffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111ffffffffffffffffffffffffffffffffffffffffffffff1ddddddddddddddddddddddddddddddddddddddddddddddddd1ffffffffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111fffffffffffffffffffffffffffffffffffffffffffffff11ddddddddddddddddddddddddddddddddddddddddddddd11fffffffffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111fffffffffffffffffffffffffffffffffffffffffffffffff111ddddddddddddddddddddddddddddddddddddddd111fffffffffffffffffffffffffffffffffffffffffff111ffffffffffff
    fffff111ffffffffffffffffffffffffffffffffffffffffffffffffffff11ddddddddddddddddddddddddddddddddddd11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111ddddddddddddddddddddddddddddd111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ddddddddddddddddddddd1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Vitaj! Tvojou úlohou je zjesť čo najviac ovocia za časový limit 3 minúty. Vyhýbaj sa Fastfoodu!", DialogLayout.Center)
mySprite = sprites.create(img`
    e . e e e e e . e . . . . . . . 
    e e 4 4 4 4 4 e e . . . . . . . 
    e 4 4 4 e e e e e . . . . . . . 
    e e e e e e e e e . . . . . . . 
    e f 4 4 4 f e e e . . . . . . . 
    e e f f f e e e e . . . . . . . 
    e e e f e e e e e . . . . . . . 
    e 2 e e e e 2 e e . e e . . . . 
    e e 2 2 2 2 e e e . . e . . . . 
    e e e e e e e e e . e e . . . . 
    e e 8 8 8 8 8 8 e . e e . . . . 
    f . 8 6 6 6 6 6 f e e . . . . . 
    f f . 8 8 8 8 8 f e . . . . . . 
    . . . e e . e e f . . . . . . . 
    . . . e e . e e . . . . . . . . 
    . . e e e . e e e . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    7 f 2 2 2 f 2 2 2 f 2 2 2 f 2 7 
    7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 
    7 2 2 f 2 2 2 f 2 2 f 2 2 2 2 7 
    7 2 2 2 2 2 2 2 2 2 2 2 2 f 2 7 
    7 7 f 2 2 f 2 2 2 f 2 2 2 2 7 7 
    . 7 7 2 2 2 2 2 2 2 2 2 f 7 7 . 
    . . 7 7 2 2 f 2 2 f 2 2 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
burger = sprites.create(img`
    . . . . . . . . . . . . . . . 7 
    . . . . . . . . . . . . . . . 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . 8 8 8 8 8 7 7 7 7 . 
    . . . . 8 8 8 c 8 a 8 7 7 7 . . 
    . . . 8 a 8 a a 8 c 8 8 8 8 . . 
    . . . 8 c 8 c a 8 8 8 a 8 8 a . 
    . . . a 8 8 8 8 a c 8 c a 8 8 . 
    . . . 8 c 8 a c a a 8 8 8 8 . . 
    . . . 8 a 8 a a 8 8 8 a c 8 8 . 
    . . . . 8 8 8 8 8 a 8 a 8 8 a . 
    . . . 8 c a 8 c 8 c 8 8 8 8 . . 
    . . . 8 8 c 8 a 8 8 8 8 a . . . 
    . . . . a 8 a 8 8 c a . . . . . 
    `, SpriteKind.Food)
info.setLife(3)
info.startCountdown(180)
music.playMelody("C5 B A G A B C5 G ", 130)
music.setVolume(20)
game.onUpdateInterval(3000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, randint(-100, 50), randint(100, 50))
})
