<script setup lang="ts">
import type { Product } from '../../model/products';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProduct, createProduct } from '../../model/products';
import { addMessage, useSession } from '../../model/session';

    const session = useSession();
    const route = useRoute();

    const product = ref<Product>({} as Product);

    getProduct(+route.params.id).then((data) => {
        product.value = data.data ?? {} as Product;
        console.log(product.value);
    })

    function save() {
        if(product.value.id) {
            console.log('update')
        }
        else {
            createProduct(product.value).then((data) => {
                console.log(data)
                addMessage('Product created', 'success')
            })
        }
    }
    
</script>

<template>
    <form class="admin-product-edit" @submit.prevent= "save()">
        <h1 class="title" v-if="product.id">Edit Product</h1>
        <h1 class="title" v-else>Add New Product</h1>

        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input type="text" class="input" placeholder="Title" v-modle="product.title">
            </div>
        </div>

        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea type="text" class="input" placeholder="Description" v-modle="product.description"></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input type="number" class="input" placeholder="Price" v-modle="product.price">
            </div>
        </div>

        <div class="field">
            <label class="label">Category</label>
            <div class="control">
                <input type="text" class="input" placeholder="Category" v-modle="product.category">
            </div>
        </div>

        <div class="field">
            <label class="label">Brand</label>
            <div class="control">
                <input type="text" class="input" placeholder="Brand" v-modle="product.brand">
            </div>
        </div>

        <div class="field">
            <label class="label">Stock</label>
            <div class="control">
                <input type="number" class="input" placeholder="Stock" v-modle="product.stock">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>
    </form>
</template>



<style scoped>

</style>