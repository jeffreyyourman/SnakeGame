var COLS = 26, ROWS = 26;

var EMPTY = 0, SNAKE = 1, FRUIT =2;

var grid = {
    width: null,
    height: null,
    _grid: null,

    init: function(d, c, r) {
      this.width = c;
      this.height = r;

      this._grid = [];

      for (var x = 0; x < c; x++) {
        this._grid.push([])
        for (var y = 0; y < r; y++) {
          this._grid[x].push(d);
        }
      }
    },

    set: function(val, x, y) {
      this._grid[x][y] = val;
    },

    get: function(x, y) {
      return this._grid[x][y];
    }
  }

  var snake = {
  direction: null,
  last: null,
  _queue:null,

  init: function(d,x,y) {
    this.direction = d;

    this._queue = [];
    this.insert(x,y);
  },

  insert: function(x,y){
    this._queue.unshift({x:x, y:y});
    this.last = this._queue[0];
  },
  remove: function() {
    return this._queue.pop();
  }
}

function setFood() {
  var empty = [];
    for (var x = 0; x < grid.width; x++) {
      for (var y = 0; y < array.length; y++) {
        if (grid.get(x,y) === EMPTY) {
          empty.push({x:x, y:y});
        }
      }
    }
    var randpos = empty[Math.floor(Math.random()* empty.length)];
    grid.set(FRUIT, randompos.y);
}


//Game objects
//ctx is context
var convas, ctx, keystate, frames;
function main(){
  convas = document.createElement('canvas');
  convas.width = COLS*20;
  convas.height = ROWS*20;
  ctx = convas.getCOntext('2d');
  document.body.appendChild(canvas);

  frames = 0;
  ketstate = {};

  init();
  loop();
}

function init(){
  grid.init(EMPTY, COLS, ROWS);
}

function update (){}

function draw (){}

main();
