class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car Racing")
        title.position(130,0)
        var input=createInput("name")
        input.position(130,160)
        var Button=createButton('play')
        Button.position(250,200)
        var greeting=createElement('h3')
        Button.mousePressed(function(){
            input.hide()
            Button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+name)
            greeting.position(130,160)
        })
    }
}