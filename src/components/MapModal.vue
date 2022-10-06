<template>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <SearchingItem :item="item" :enableButton="true"></SearchingItem>
        <p>{{ item?.details?.description }}</p>
        <div class="images-list">
          <li v-for="(image, index) in item?.images" :key="index">
            <div>
              <img v-if="image" class="image-item" v-bind:src="image" alt="image index" />
            </div>
          </li>
        </div>
      </div>
    </div>
  </template>
  <script>
  import SearchingItem from "@/components/SearchingItem.vue";
  
  export default {
    name: "MapModal",
    components: {
      SearchingItem,
    },
    props: ["item"],
    methods: {
      closeModal() {
        this.$emit("closed-modal");
      },
    },
  };
  </script>
  <style scoped>
  .modal {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    left: 50%;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    border: 1px solid #888;
    width: 420px;
    height: auto;
  }
  
  p {
    padding: 10px;
    font-size: 13px;
  }
  
  .images-list {
    width: 100%;
    height: 31%;
    display: flex;
    padding: 2px;
  }
  .image-item {
    width: 131px;
    height: 100%;
    padding: 4px;
  }
  
  .close {
    color: hsl(0, 0%, 100%);
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    right: 20px;
    top: 10px
  }
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>