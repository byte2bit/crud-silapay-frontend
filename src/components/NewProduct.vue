<template>
  <div class="p-4 rounded-lg shadow-md mt-7 bg-white">
  <div class="flex justify-between items-center mb-7">
    <h2 class="text-3xl font-bold">Inserir Produto</h2>
  </div>

  <form @submit.prevent="submitForm">
    <div class="flex gap-4 w-full">
      <div class="flex flex-col w-[50%]">
        <div class="w-[95%]">
          <label class="text-zinc-950" for="name">Nome</label>
          <input
            class="w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Insira o nome"
            v-model="name"
          />
        </div>
        <div class="mt-5 w-[95%]">
          <label class="text-zinc-950" for="price">Preço</label>
          <input
            class="w-full"
            type="text"
            name="price"
            id="price"
            placeholder="Insira o preço"
            v-model="price"
          />
        </div>
      </div>
      <div class="w-[50%]">
        <label class="text-zinc-950" for="description">Descrição</label>
        <textarea
          class="w-full h-40"
          placeholder="Insira a descrição"
          name="description"
          id="description"
          v-model="description"
        ></textarea>
      </div>
    </div>
    <button class="botao mt-3 w-40 float-end" type="submit">Enviar</button>

  </form>
</div>
  <div v-if="store.error">
    <p>Error: {{ store.error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductsPost } from "../store/productStore";
import convertFloatInv from "../utils/convertFloatInv";

const store = useProductsPost();

let name = ref("");
let price = ref("");
let description = ref("");

const submitForm = () => {
  store.postProducts({
    name: name.value, 
    price: convertFloatInv(price.value), 
    description: description.value
  });
};
</script>

<style lang="scss" scoped></style>
