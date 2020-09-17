//This is my hero blueprint. 
class Hero {
    constructor(totalCoins = 0, status = "Small", hasStar = false, gameActive = true){
        this.name = ""
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }
    setName(){
        if(randomInteger() === 0){
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
    gotHit(){
        if(this.hasStar === true){
            console.log("Your star protected you!")
            this.hasStar = false;
            return;
        }
        if(this.status === "Powered Up"){
            this.status = "Big"
            console.log("Oof! You took a hit and aren't powered up!")
        }else if(this.status === "Big"){
            this.status = "Small"
            console.log("Yeeeouch! You took a big hit!")
        }else if(this.status === "Small"){
            this.status = "Dead"
            console.log("You're dead!")
            this.gameActive = false;
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
            console.log("You ate a mushroom and now you're big!")
        }else if(this.status === "Big"){
            this.status = "Powered Up"
            console.log("Now you're powered up!")
        }else if(this.status === "Powered Up"){
            console.log("You got a star!")
            this.hasStar = true;
            
        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nCoins: ${this.totalCoins}`)
    }
}

function randomInteger() {
    return Math.round(Math.random());
}

const hero = new Hero()

hero.setName();

let running = setInterval(function(){
    if(hero.gameActive !=false){
        if(randomInteger() === 0){
            hero.gotHit();
        }else if(randomInteger() === 1){
            hero.gotPowerup();
        }else{
            hero.addCoin();
        }
        hero.print();
    }else{
        clearInterval(running)
    }
}, 750);

//TO DO
//Make sure the global randomizer is available everywhere and that it works
