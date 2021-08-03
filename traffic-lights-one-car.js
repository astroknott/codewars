function trafficLights(road, n) {
  let firstRow = road.split("");
  let cols = firstRow.map((ltr) => [ltr]);

  const genLightCol = (color) => {
    let lights = {
      R: { ct: 0, lim: false },
      G: { ct: 0, lim: false }
    }
    lights[color].ct = 1;
    let col = [color];

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
  
  cols.forEach((col,i)=>{
    if (col[0] === "R" || col[0] === "G" || col[0] === "O") {
      cols[i] = genLightCol(col[0]);
    } else {
      for(let j=0; j<n; j++) {
	      cols[i][j] = ".";
      }
    }
  })

  console.log(cols)
  
  const genCarPath = (cols) => {
    let rows;
    for (let x=0;x<cols.length;x++) {
      for (let y = 0; y < n; y++) {
	rows[x][y] = cols[x][y];
      }
    }
    let carPos = 0;
    for (let i=0;i<rows.length;i++) {
      carPos = rows[i][carPos + 1] === "R" ? carPos : carPos + 1;
      rows[i][carPos] = "C";
    }
    
    return rows.map((row) => row.join(""));
  }
  
  return genCarPath(cols);
}


