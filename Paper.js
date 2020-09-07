class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.4,
			friction:0.5,
			density:1.7

			
			}
			
		this.x = x;
		this.y = y;
		this.r = r
		this.image = loadImage("/sprites/paper.png");
		this.height = 100;
		this.width = 70;
		this.body = Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos = this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(0);
			fill(255,255,255)
			imageMode(CENTER);
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}

}