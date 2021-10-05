class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

}
class UI {
    addProduct(producto) {
        const ProductList=document.getElementById('product-list');
        const element= document.createElement('div');
        element.innerHTML=`
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>:${producto.name}
                    <strong>Price</strong>:${producto.price}
                    <strong>Year</strong>:${producto.year} 
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        ProductList.appendChild(element);
        this.showMessage("Product Added","success");
    }
    deleteProduct(element) {
        if(element.name==='delete'){
            console.log(element.parentElement.parentElement.parentElement.remove());
        this.showMessage("Product Added","danger");

        }else{

        }
    }
    showMessage(message,estilo) {
        const mensaje=document.createElement('div');
        mensaje.className=`alert alert-${estilo} mensaje `;
        mensaje.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        console.log(container);
        const app=document.querySelector('#app');
        container.insertBefore(mensaje,app);
        setTimeout(function(){
            mensaje.remove();
        }, 3000);
    }
}

document.getElementById('product-list').addEventListener('click',function (e){
 const ui=new UI();
 ui.deleteProduct(e.target);

})

// DOM EVENT
document.getElementById('product-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const interfaz =new UI();
      const producto = new Product(name, price, year);
      if(name==''||year==''||price==''){
        interfaz.showMessage("Please fill all the filds","warning");
        return
      }
    interfaz.addProduct(producto)
    console.log(producto);
    e.preventDefault();
});