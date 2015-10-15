var Beer = function(){

};

Beer.prototype.verse = function(num,end){
  if(num === 2){
    return(num+ " bottles of beer on the wall, "+num+" bottles of beer.\nTake one down and pass it around, "+(num - 1)+" bottle of beer on the wall.\n");

  }else if(num === 1){
    return(num+ " bottle of beer on the wall, "+num+" bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n");

  }else if (num === 0){
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

  }else{

    return(num+ " bottles of beer on the wall, "+num+" bottles of beer.\nTake one down and pass it around, "+(num - 1)+" bottles of beer on the wall.\n");
  }
};

Beer.prototype.sing= function(start, last){
  if (!last){
    end = 0;
  }else {
    end = last;
  }
  var num = start;
  var string = [];

while(num >= end){
    console.log(Beer.prototype.verse(num));
    string.push(Beer.prototype.verse(num));
    num--;
  }
    return string.join("\n");
};

module.exports = Beer;
