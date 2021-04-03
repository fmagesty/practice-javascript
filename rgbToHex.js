// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3



const rgb = (r ,g ,b) => {
    let toHex = (x) => {
        if (x >= 0 && x <= 255) {
            x = (Number(x).toString(16).toUpperCase());
        }
        if (x.length < 2) {
            x = '0' + x;
        }
        if (x > 255) {
            x = 'FF'
        }
        if (x < 0) {
            x = '00'
        }
        return x;
    }

    let red = toHex(r);
    let green = toHex(g);
    let blue = toHex(b);

    console.log(red+green+blue);
    return (red+green+blue);
}

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3