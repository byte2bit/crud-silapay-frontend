<template>
  <!--***** Modal ********-->
  <div
    class="modal fade"
    id="modalProd"
    tabindex="-1"
    aria-labelledby="modalProd"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-zinc-700 text-white">
          <h1 class="modal-title fs-5" id="modalProd">Detalhes do Produto</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="@/icons/close.svg" alt="fechar" />
          </button>
        </div>

        <div class="modal-body bg-zinc-200">
          <h2 v-show="view" class="text-center">{{ registro.name }}</h2>
          <div class="flex justify-center ms-2" v-show="!view">
            <h5>Nome do Produto:</h5>
            <input
              v-model="registro.name"
              type="text"
              name="name"
              id="name"
              class="w-full"
              placeholder="Insira o nome do produto"
            />
          </div>
          <div class="flex mt-4">
            <div
              class="w-1/2 bg-white p-4 m-2 justify-center flex items-center rounded-lg"
            >
              <img class="w-60" src="@/icons/box.svg" alt="" />
            </div>
            <div
              class="w-1/2 bg-white p-4 m-2 flex justify-between flex-col rounded-lg"
            >
              <div>
                <h5>Descrição:</h5>
                <p v-show="view">{{ registro.description }}</p>
                <textarea
                  class="w-full"
                  v-show="!view"
                  type="text"
                  name="description"
                  id="description"
                  v-model="registro.description"
                  rows="4"
                  placeholder="Insira a descrição do produto"
                ></textarea>
              </div>

              <div class="flex items-end flex-col">
                <h5>Preço:</h5>
                <p v-show="view" class="font-bold text-4xl mb-0">
                  R$ {{ registro.price }}
                </p>
                <input
                  class="w-full"
                  v-show="!view"
                  v-model="registro.price"
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Insira o preço do produto"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">

          <button 
          v-if="view"
          type="button" 
          class="botao edit" 
          @click="viewModal()"
          >
            <img class="w-4" src="@/icons/edit.svg" alt="" />
            <p>Editar produto</p>
          </button>

          <button
          v-if="view"
            type="button"
            class="botao delete"
            @click="deleteItem(registro)"
          >
            <img class="w-4" src="@/icons/trash.svg" alt="" />
            <p>Excluir produto</p>
          </button>

          <button 
          v-if="view"
          type="button" 
          class="botao" 
          data-bs-dismiss="modal"
          >
            <img class="w-4" src="@/icons/close.svg" alt="" />
            <p>Fechar</p>
          </button>

          <button 
          v-if="!view"
          type="button" 
          class="botao"
          @click="$emit('editItem', registro)"
          >
            <img class="w-6" src="@/icons/check.svg" alt="" />
            <p>Enviar</p>
          </button>

        </div>
      </div>
    </div>
  </div>
  <!--***** /Modal ********-->
</template>

<script setup>
import { ref, toRefs } from "vue";

defineEmits(["editItem"]);

const props = defineProps({
  registro: Object,
  deleteItem: Function,
  editItem: Function,
});

const send = () => {
  console.log("send");
};

let view = ref(true);

let { registro } = toRefs(props);
let { deleteItem } = toRefs(props);

function viewModal() {
  view.value = !view.value;
  console.log("view: " + view.value);
}
</script>

<style scss scoped>
.modal-footer {
  justify-content: space-between !important;
  button {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  p {
    margin: 0 0 0 10px;
  }
}
</style>
