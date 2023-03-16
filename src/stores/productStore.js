import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'bayam',
                price: 10.99,
                categoryId: 1,
                personId: 1
            },
            {
                id: 2,
                name: 'anggur',
                price: 9.99,
                categoryId: 2,
                personId: 3
            },
            {
                id: 4,
                name: 'rujak',
                price: 9.99,
                categoryId: 4,
                personId: 2
            },
            {
                id: 3,
                name: 'wortel',
                price: 15.99,
                categoryId: 1,
                personId: 4
            }
        ],
        categories: [
            {
                id: 1,
                name: 'sayur'
            },
            {
                id: 2,
                name: 'buah'
            },
            {
                id: 4,
                name: 'makanan'
            }
        ],
        persons: [
            {
                id: 1,
                name: 'Budi'
            },
            {
                id: 2,
                name: 'ali'
            },
            {
                id: 3,
                name: 'Topan'
            },
            {
                id: 4,
                name: 'irham'
            },
        ]
    }),
    actions: {
        getProductsWithCategories: (state) => {
            return state.products.map(product => {
                const category = state.categories.find(category => category.id === product.categoryId);
                return {
                    product,
                    category
                };
            });
        },
        getProductsWithPersonAndCategory: (state) => {
            return state.products.map(product => {
                const person = state.persons.find(person => person.id === product.personId);
                const category = state.categories.find(category => category.id === product.categoryId);
                return {
                    product,
                    person,
                    category
                };
            });
        }
    }
});