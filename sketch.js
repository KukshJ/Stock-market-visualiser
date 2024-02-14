let stockData = {
  1995: 200,
  1996: 210,
  1997: 205,
  1998: 215,
  1999: 220,
  2000: 230,
  2001: 225,
  2002: 235,
  2003: 240,
  2004: 245,
  2005: 235,
  2006: 245,
  2007: 255,
  2008: 250,
  2009: 260,
  2010: 255,
  2011: 265,
  2012: 270,
  2013: 265,
  2014: 275,
  2015: 280,
  2016: 275,
  2017: 285,
  2018: 290,
  2019: 285,
  2020: 295,
  2021: 300,
  2022: 295,
  2023: 305,
  2024: 310,
};

let years = Object.keys(stockData);
let prices = Object.values(stockData);

function setup() {
  createCanvas(1200, 1080);
  noLoop();
  colorMode(HSB, 360, 100, 100); // Use HSB color mode
}

function draw() {
  background(0); // Black background
  let w = width / years.length;
  let x = 0;

  // Draw line graph
  stroke(255); // White line
  beginShape();
  for (let i = 0; i < years.length; i++) {
    let y = map(prices[i], 200, 310, height, 0); // Map stock price to y coordinate
    vertex(x + w / 2, y);
  }
  endShape();

  // Draw candles
  for (let i = 1; i < years.length; i++) {
    
    let yCurrent = map(prices[i], 200, 310, height, 0);
    let yPrevious = map(prices[i - 1], 200, 310, height, 0);
    let h = yCurrent - yPrevious; 
    if (prices[i] > prices[i - 1]) {
      fill("green");
    } else {
      fill("red");
    }
    rect(x, min(yCurrent, yPrevious), w, abs(h)); 
    fill(255);
    text(years[i], x, height - 10); 
    text(prices[i], x, yCurrent - 10); 
    x += w;
  }

  // Add labels 
  textSize(16);
  fill(255); // White text
  text("Year", width / 2, height - 30);
  push();
  translate(60, height / 2);
  rotate(-HALF_PI);
  text("Stock Price", 0, 0);
  pop();
}
