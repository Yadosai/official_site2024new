<template>
  <div>
    <header>
      <h1>PCスペック確認ページ</h1>
    </header>
    <div v-for="(specs, userName) in usersSpecs" :key="userName" class="user-card">
      <h2>{{ userName }}</h2>
      <ul>
        <li v-for="spec in specs" :key="spec.id">
          CPU: {{ spec.cpu }}, GPU: {{ spec.gpu }}, OS: {{ spec.os }}, Memory: {{ spec.memory_gb }}GB, SSD: {{ spec.ssd_gb }}GB
        </li>
      </ul>
    </div>
    <button @click="addPC">PC スペックを登録</button>
    <button @click="addUser">ユーザーを追加</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface PCSpecs {
  id: number;
  cpu: string;
  gpu: string;
  os: string;
  memory_gb: number;
  ssd_gb: number;
}

interface UsersSpecs {
  [key: string]: PCSpecs[];
}

const usersSpecs = ref<UsersSpecs>({});

const fetchItems = async () => {
  try {
    const response = await axios.get<UsersSpecs>('http://localhost:3000/api/users/pcs');
    usersSpecs.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

// ユーザー追加機能
const addUser = async () => {
  const name = prompt("ユーザー名を入力してください:");
  if (name) {
    try {
      await axios.post('http://localhost:3000/api/users', { name });
      fetchItems(); // データを再フェッチして更新
    } catch (error) {
      console.error(error);
    }
  }
};

// PCスペック追加機能
// PCスペック追加機能（ユーザー名に基づく）
const addPC = async () => {
  const userName = prompt("ユーザー名を入力してください:");
  const cpu = prompt("CPUを入力してください:");
  const gpu = prompt("GPUを入力してください:");
  const os = prompt("OSを入力してください:");
  const memory_gb_str = prompt("メモリGBを入力してください:");
  const ssd_gb_str = prompt("SSD容量GBを入力してください:");

  if (!userName || !cpu || !gpu || !os || !memory_gb_str || !ssd_gb_str) {
    alert("すべての情報を入力してください。");
    return;
  }

  const memory_gb = parseInt(memory_gb_str, 10);
  const ssd_gb = parseInt(ssd_gb_str, 10);

  if (isNaN(memory_gb) || isNaN(ssd_gb)) {
    alert("数値として解釈できる情報を入力してください。");
    return;
  }

  try {
    await axios.post('http://localhost:3000/api/items', { userName, cpu, gpu, os, memory_gb, ssd_gb });
    fetchItems(); // データを再フェッチして更新
  } catch (error) {
    console.error(error);
  }
};





onMounted(fetchItems);
</script>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.user-card {
  border: 1px solid #ccc;
  margin: 20px;
  padding: 10px;
}

button {
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
