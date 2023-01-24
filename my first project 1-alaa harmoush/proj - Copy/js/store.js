var addItemId = 0;

function addToCart(item){
    addItemId += 1
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc,);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var lable = document.createElement('div');
    lable.innerText = item.children[2].children[0];
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1];
    lable.append(select);
    var dlbtn = document.createElement('button');
    dlbtn.innerText = "Delete"
    dlbtn.setAttribute('onclick', 'del('+addItemId+')');
    var cartItems = document.getElementById('titlee');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(dlbtn);
    cartItems.append(selectedItem);

}

function del(item){
    document.getElementById(item).remove();
}