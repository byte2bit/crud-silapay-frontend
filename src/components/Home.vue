<template>
  <NewProduct />

  <div class="bg-white p-4 rounded-lg shadow-md mt-7">
    <div class="flex justify-between items-center mb-4">
      <h2 class="my-12 text-3xl font-bold">Todos os Produtos</h2>
    </div>
    <EasyDataTable
      :key="storeDel.key"
      :headers="storeGet.headers"
      :items="storeGet.dados"
      table-class-name="customize-table"
      rowsPerPageMessage="linhas por página:"
      rowsOfPageSeparatorMessage="de"
      emptyMessage="Não há dados disponíveis"
      :buttons-pagination="true"
      @click-row="modal"
      update-page-items
      show-index
    >
    </EasyDataTable>
  </div>
  <Modal :registro="registro" :deleteItem="deleteItem" :editItem="editItem" @editItem="editItem" />
</template>

<script setup>
import Modal from "./Modal.vue";
import NewProduct from "./NewProduct.vue";
import { computed, onMounted, ref } from "vue";
import { useProductsGet } from "@/store/productStore";
import { useProductsDel } from "@/store/productStore";
import { useProductsPut } from "@/store/productStore";
import convertFloat from "@/utils/convertFloat";

const registro = ref({});

const modal = (item) => {
  var myModal = new bootstrap.Modal(document.getElementById("modalProd"), {});
  registro.value = item;
  myModal.show();
};

const storeGet = useProductsGet();
const storeDel = useProductsDel();
const storePut = useProductsPut();

let prices = computed(() => {
  return storeGet.dados.map((item) => convertFloat(item.price));
});

onMounted(() => {
  storeGet.fetchProducts();
});

const deleteItem = (item) => {
  if (!confirm("Deseja realmente excluir este produto?")) return;
  storeDel.deleteProduct(item.id);
};

const editItem = (dados) => {
   storePut.putProduct(dados); 
};
</script>

<style scoped>
.customize-table {
  --easy-table-header-background-color: #2d3a4f;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-font-size: 14px;
  --easy-table-body-row-font-size: 14px;
}
.operation-wrapper .operation-icon {
  width: 20px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
