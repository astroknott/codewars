// https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/train/javascript

function trafficLights(road, n) {
  let firstRow = road.split("");
  // get array of columns, fill empty spots with road "."
  let cols = firstRow.map((ltr) => {
    let arr = Array(n+1).fill(".");
    arr[0] = ltr;
    return arr;
  });

  // generates the column values for the light columns
  const genLightCol = (color) => {
    let lights = {
      R: { ct: 0, lim: false },
      G: { ct: 0, lim: false }
    }
    lights[color].ct = 1;
    let col = [color];

    // counting how many have been in sequence to cycle colors
    for(let i=0; i<n; i++) {
      if (col[i]==="O") {
	col.push("R");
	lights.R.ct = 1;
      } else if (col[i]==="R") {
	col.push(lights.R.lim ? "G" : "R")
	lights.R.ct = lights.R.lim ? 0 : lights.R.ct + 1;
	lights.G.ct = lights.R.lim ? 1 : lights.G.ct;
	lights.R.lim = lights.R.ct === 5;
      } else if (col[i]==="G") {
	col.push(lights.G.lim ? "O" : "G")
	lights.G.ct = lights.G.lim ? 0 : lights.G.ct + 1;
	lights.G.lim = lights.G.ct === 5;
      }
    }
    return col;
  }

  // generate column for each light
  cols.forEach((col,i)=>{
    if (col[0] === "R" || col[0] === "G" || col[0] === "O") {
      cols[i] = genLightCol(col[0]);
    }
  })
  
  const genCarPath = (cols) => {
    // convert array of columns to array of rows
    let rows = [];
    for (let y = 0; y <= n; y++) {
      rows.push([]);
      for (let x=0;x<cols.length;x++) {
	rows[y].push( cols[x][y] );
      }
    }
    let carPos = 0;
    rows[0][carPos] = "C";
    // places car checking ahead for the light color
    for (let i=1;i<rows.length;i++) {
      let front = rows[i][carPos + 1];
      let stopOn = "RO";
      carPos = stopOn.includes(front) ? carPos : carPos + 1;
      if (carPos < cols.length) {
	rows[i][carPos] = "C";
      }
    }
    
    return rows.map((row) => row.join(""));
  }
  
  return genCarPath(cols);
}


