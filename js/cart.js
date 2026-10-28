ds=ds.slice(0,8); // CHỈ SHOW 8 SP
for (let i = 0; i < ds.length; i++) {
    document.getElementById('productAll').innerHTML +=
        `<div class="col3 m3">
            <img src="images/${ds[i].hinh}" alt="">
            <h3 style="color:black">${ds[i].ten}</h3>
            <h2>Giá: ${ds[i].gia}</h2>
            <p>${ds[i].mota}</p>
            <button class="fm1" onclick="addCart(${i},${ds[i].id})">Mua ngay</button>
        </div>`
}
// Trường hợp tạo biến dùng localStorage
let giohang = JSON.parse(localStorage.getItem('giohang_Storage')) || [];
function addCart(index,ID) {
    if (giohang.length==0) {
        alert("Thêm vào giỏ hàng thành công");
        ds[index].sl=1;
        giohang.push(ds[index]);
    } else{
        for (var i = 0; i < giohang.length; i++) {
            // trường hợp 1 trùng id => tăng số lượng +1
            if (giohang[i].id==ID) {
                giohang[i].sl++;
                break;
               
            }
        }
            // trường hợp 2 ko trùng id => thêm 1 dòng sp
            if (i==giohang.length) {
                ds[index].sl = 1;
                giohang.push(ds[index]);
            }
        
    }
     // gán giỏ hàng vào localStorage
     localStorage.setItem("giohang_Storage", JSON.stringify(giohang)); 
     console.log(JSON.stringify(giohang));
     viewCart();
}
   
function viewCart() {
    let thanhtien =0;
    let tongtien=0;
    let kq;
    for (let i = 0; i < giohang.length; i++) {
        thanhtien = giohang[i].gia*giohang[i].sl;
        tongtien += thanhtien;
        kq +=
       `
       <tr>
            <td>${i+1}</td>
            <td>${giohang[i].ten}</td>
            <td><img src="images/${giohang[i].hinh}" alt="" style="width:100px"></td>
            <td>${giohang[i].sl}</td>
            <td>${giohang[i].gia}</td>
            <td>${thanhtien}</td>
            <td><button class="remove_button fm" type="text" onclick="remove(${i})">Xóa</button></td>
        </tr>
       `
    }
    document.getElementById("addCart").innerHTML = kq;
    document.getElementById("tongtien").innerText = tongtien;
}
function remove(i){
    giohang.splice(i,1); // tiến hành xóa trong màng giohang
    
    // cập nhật lại giỏ hàng vào local
    localStorage.setItem("giohang_Storage", JSON.stringify(giohang)); 

    viewCart(); // hiện thị lại gio hàng đã xóa
}

viewCart();