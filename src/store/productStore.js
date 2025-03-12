import { defineStore } from 'pinia'

import api from '@/services/api'
import convertFloat from "@/utils/convertFloat";
import convertFloatInv from "@/utils/convertFloatInv";

/**
 * GET TODOS OS PRODUTOS
 */
export const useProductsGet = defineStore('prodGet', {
    state: () => {
        return {
            dados: [],
            headers: [
                // { text: "Remover", value: "operation", width: 70 },
                { text: "Nome", value: "name" },
                { text: "Preço", value: "price" },
                { text: "Descrição", value: "description" },
            ],
        }
    },
    getters: {
        getProducts(state) {
            return state.dados
        }

    },
    actions: {
        format(x) {
            x.map((dados) => {
                dados.price = convertFloat(dados.price);
                return dados;
            })
        },
        async fetchProducts() {
            try {
                const data = await api.get('/product')
                this.dados = data.data
                this.format(this.dados)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
    },
})

/**
 * POST PRODUTOS
 */
export const useProductsPost = defineStore('prodPost', {
    state: () => {
        return {
            dadosProd: {},
            message: '',
        }
    },

    actions: {
        async postProducts(dados) {

            await api.post('/product', dados)
                .then(window.location.reload())
                .catch(error => {
                    this.message = error.response.data.message;
                    this.error = error.response.data.error;
                    alert(this.message, this.error);
                });
        },
    },
})

/**
 * EDIT PRODUTOS
 */
export const useProductsPut = defineStore('prodPatch', {
    state: () => {
        return {
            name: '',
            price: '',
            description: '',
            id: '',
            message: '',
        }
    },

    actions: {
        async putProduct(dados) {
            let { id, name, price, description } = dados;
            price = convertFloatInv(price)

            await api.put(`/product/${id}`, { id, name, price, description })
                .then(console.log('Produto editado com sucesso!'))
                .catch(error => {
                    this.message = error.response.data.message;
                    this.error = error.response.data.error;
                    alert(this.message, this.error)
                });
            window.location.reload();
        },
    },
})

/**
 * Delete produtos
 */
export const useProductsDel = defineStore('prodDel', {
    actions: {
        async deleteProduct(id) {
            await api.delete(`/product/${id}`)
                .then(console.log('Produto deletado com sucesso!'))
                .catch(error => {
                    this.message = error.response.data.message;
                    alert(this.message)
                });
            window.location.reload();
        },
    },
})

