class Character {
    constructor(name, totalCoins = 0, status = "Small", hasStar = false, gameActive = true){
        //this everything?
        this.name = ""//Can I set it equal to a function?
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }
    //functions go here
    setName(namePicked){
        //make the randomInteger func global?
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          //how do I get the name from this into the name thing up there?
        if(randomInteger === 0){
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
    gotHit(){
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        if(this.hasStar === true){
            console.log("Your star protected you!")
            this.hasStar = false;
            return;
        }
        if(randomInteger === 0 && status === "Powered Up"){
            this.status = "Big"
        }else if(randomInteger === 0 && status === "Big"){
            this.status = "Small"
        }else if(randomInteger === 0 && status === "Small"){
            this.status = "Dead"
            this.gameActive = false;
            return;
        }

    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
        }else if(this.status === "Powered Up"){
            this.hasStar = true;
        }

    }
    addCoin(){
        totalCoins++;
    }
    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nCoins: ${this.totalCoins}`)
    }
}

new Character

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }