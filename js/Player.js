class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;

    this.ranking = 0;
    this.score = 0;
    this.fuel = 185;
    this.life = 185;
  }

  
  getCount(){
    var getCountRef = database.ref("playerCount");
    getCountRef.on("value", function(data){
      playerCount = data.val();
    })
  }


  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }


  addPlayer(){
    var playerIndex = "players/player" + this.index;
    if (this.index == 1) {
      this.positionX = width/2 - 100
    } else {
      this.positionX = width/2 + 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      ranking: this.ranking,
      score: this.score
    })
  }


  static getPlayerInfo(){
    var getPlayerRef = database.ref("players");
    getPlayerRef.on("value", function(data){
      allPlayers = data.val();
    })
  }


  update(){
    var playerIndex = "players/player" + this.index;

    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      ranking: this.ranking,
      score: this.score,
      life: this.life
    })
  }

  getDistance(){
    var getDistanceRef = database.ref("players/player" + this.index);
    getDistanceRef.on("value", data=>{
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    })
  }


  getCarsAtEnd(){
    database.ref("carsAtEnd").on("value", data=>{
      this.ranking = data.val();
    })
  }


  static updateCarsAtEnd(ranking){
    database.ref("/").update({
      carsAtEnd: ranking
    })
  }

}
