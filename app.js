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
const paddle1 = new Paddle({
position:
{
    x: 10,
    y: 100
}})

const paddle2 = new Paddle({
position:
{
    x: cvs.width - 35,
    y: 100
}})

function animate()
{
    requestAnimationFrame(animate)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    paddle1.update()
    paddle2.update()
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