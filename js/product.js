for (let i = 0; i < ds.length; i++) {
    document.getElementById("show").innerHTML +=
    `
    <div class="col3 m3">
        <img src="images/${ds[i].hinh}" alt="">
        <h3>${ds[i].ten} </h3>
            <h2>Giá: ${ds[i].gia}</h2>
            <p>${ds[i].mota}</p>
            <button onclick='detail(${i})'  value=${ds.id}>Mua Ngay</button>
    </div>
    `
    
}

let dm = ["CaPhe","Nuocep","Tra"];

let CaPhe = ds.filter(item => item.loai=="CaPhe");   
 for (let i = 0; i < CaPhe.length; i++) {
    document.getElementById("CaPhe").innerHTML +=
    `
    <div class="col3 m3">
        <img src="images/${CaPhe[i].hinh}" alt="">
        <h3>${CaPhe[i].ten} </h3>
            <h2>Giá: ${ds[i].gia}</h2>
            <p>${CaPhe[i].mota}</p>
            <button>Mua Ngay</button>
    </div>
    `
    
}

let Nuocep = ds.filter(item => item.loai=="Nuocep");   
 for (let i = 0; i < Nuocep.length; i++) {
    document.getElementById("Nuocep").innerHTML +=
    `
    <div class="col3 m3">
        <img src="images/${Nuocep[i].hinh}" alt="">
        <h3>${Nuocep[i].ten} </h3>
            <h2>Giá: ${ds[i].gia}</h2>
            <p>${Nuocep[i].mota}</p>
            <button>Mua Ngay</button>
    </div>
    `
    
}


let Tra = ds.filter(item => item.loai=="Tra");   
 for (let i = 0; i < Tra.length; i++) {
    document.getElementById("Tra").innerHTML +=
    `
    <div class="col3 m3">
        <img src="images/${Tra[i].hinh}" alt="">
        <h3>${Tra[i].ten} </h3>
            <h2>Giá: ${ds[i].gia}</h2>
            <p>${Tra[i].mota}</p>
            <button>Mua Ngay</button>
    </div>
    `
    
}