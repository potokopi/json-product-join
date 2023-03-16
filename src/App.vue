<template>
  <main>
    
      <!-- heading -->
      <header>
        <h4>* vue/pinia: json join product with category</h4>
      </header>
      
      <h5>product & category</h5>
      <div class="result">
        <ul>
        <li v-for="product in productCategory">
          product name is <span>{{ product.product.name }}</span> with category <span>{{ product.category.name }}</span>
        </li>
      </ul>
      </div>
    <h5>json</h5>
     <pre>
     {{ productCategory }}
     </pre>

     <h5>product & category & person </h5>
     <div class="result"> 
      <ul>
        <li v-for="product in productPersonCategory">
          product name is <span>{{ product.product.name }}</span> 
          with category <span>{{ product.category.name }}</span>,
           the buyer is <span>{{ product.person.name }}</span>
        </li>
      </ul>
     </div>
     
     <h5>json</h5>
      <pre>
        {{ productPersonCategory }}
      </pre>

</main>
</template>

<script>
  import { useProductStore } from './stores/productStore' 

  export default {
    setup() {
      const products = useProductStore();
    // Dapatkan produk dengan kategori yang terkait
      const productCategory = products.getProductsWithCategories(products);
      const productPersonCategory = products.getProductsWithPersonAndCategory(products);
      // const product = products.find(product => product.id === products.id);
      return {  productCategory, productPersonCategory }
    }
  }
</script>

<style> 
ul {
  padding: 0;
  margin:0;
}
ul li {
  list-style-type: none;
  margin:10px;
}
span {
  border-bottom: 2px solid #222;
  padding:2px;
  display: pointer;
}
span:hover {
  background-color: #222;
  color: white;
  display: pointer;
}
pre, .result {
  border: 1px solid #222;
  padding: 5px;
  margin:0;
  margin-bottom: 5px;
}
.result {
  border-color: #222;
  
}
h5 {
  border:1px solid #222;
  padding:10px;
  background-color: #222;
  color:white;
  margin:0;
}
</style>