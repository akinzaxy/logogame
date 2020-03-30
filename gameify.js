var logo;

var eng, lautechbread, passa, nuesa, fpas, fet, cse, mee, eee;

// var alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var vowels = [a, e, i, o, u];
var consonants = [b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z];

// var entered = 
// database of logos
// logo
class logoType {
    constructor(str, addr) {
        this.str = str;
        this.addr = addr;
    }
}
    // establishing example logos
    cse = new logoType('cse', 'cse.png');
    // console.log(cse);
    var allLogos = [];
    allLogos.push(cse);
    // scramble string
    var toScramble = allLogos[0].str.split("");
    var scrambled = toScramble.sort(function(a, b){pickAtRandom()});
    console.log(scrambled.toString());
    // matchable string = original string
    // logo = cse[Math.random];

// does entered match datbase
    // add extra?
    function pickAtRandom(){
        return 0.5 - Math.random();
    };
    scrambled.push[vowels[pickAtRandom()]];
    scrambled.push[consonants[pickAtRandom()]];
    
    // present string
        // create boxes = str length
        
// it does you won
    // check matching
    // alert win
