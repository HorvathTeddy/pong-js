const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')

cvs.width = innerWidth
cvs.height = innerHeight


class Paddle
{
    constructor({position})
    {
        this.position = position
        this.velocity = 
        {
            x: 0,
            y: 0
        }
        this.width = 10
        this.height = 100
    }
    draw()
    {
        ctx.fillStyle = 'white'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update()
    {
        this.draw()

        if(this.position.y + this.velocity.y > 0 && this.position.y + this.height + this.velocity.y < cvs.height)
        this.position.y += this.velocity.y 
    }

}

class Ball
{
    constructor({position})
    {
        this.position = position
        this.width = 15
        this.height = 15
        this.velocity = 
        {
            x: 0,
            y: 0
        }
    }
    draw()
    {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update()
    {
        
        this.draw()
    }
}
const paddle1 = new Paddle({
position:
{
    x: 10,
    y: cvs.height/2
}})

const paddle2 = new Paddle({
position:
{
    x: cvs.width - 35,
    y: cvs.height/2
}})

const ball = new Ball({position:
{
    x: cvs.width/2,
    y: cvs.height/2
}})



function animate()
{
    ctx.fillStyle = 'black'
    requestAnimationFrame(animate)
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    paddle1.update()
    paddle2.update()
    ball.update()
}

animate()

addEventListener('keydown', ({key}) => 
{
switch (key)
{
    case 'w':
        paddle2.velocity.y = -10
        break
    case 's':
        paddle2.velocity.y = 10
        break
}})

addEventListener('keyup', ({key}) => 
{
switch (key)
{
    case 'w':
        paddle2.velocity.y = 0
        break
    case 's':
        paddle2.velocity.y = 0
        break
}})