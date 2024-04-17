<template>
    <header>
        <div class="headerTitle">
            <NuxtLink to="/top">ヤドカリ祭</NuxtLink>
        </div>
        <div id="hamburger" @click="toggleMenu" :class="{ closed: isMenuOpen }">
            <div class="icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <nav class="sm" v-if="isMenuOpen">
            <ul>
                <li>
                    <NuxtLink to="/mogiten" class="menuItem">模擬店</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/kikaku" class="menuItem">企画</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sinkan" class="menuItem">新歓</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/thanks" class="menuItem">協賛団体様</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/performer" class="menuItem">出演団体</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="menuItem">about</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/QA" class="menuItem">Q&A</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/other" class="menuItem">その他</NuxtLink>
                </li>
            </ul>
        </nav>
        <nav class="pc">
            <ul>
                <li>
                    <NuxtLink to="/mogiten" class="menuItem">模擬店</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/kikaku" class="menuItem">企画</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sinkan" class="menuItem">新歓</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/thanks" class="menuItem">協賛団体様</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/performer" class="menuItem">出演団体</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="menuItem">about</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/QA" class="menuItem">Q&A</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/other" class="menuItem">その他</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isMenuOpen = ref(false);

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        return { isMenuOpen, toggleMenu };
    }
}
</script>

<style lang="scss">
header {
    height: 60px;
    width: calc(100vw - 30px);
    padding: 0 15px;
    background-color: $primary-color;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
}

.headerTitle a {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    color: $secondary-color;
    text-decoration: none;
    font-size: 25px;
}

nav.pc,
nav.sm {
    margin-left: auto;
}

ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-direction: row;
}

nav.sm ul {
    flex-direction: column;
}

.menuItem {
    color: #ffffff;
    text-decoration: none;
    display: block;
    line-height: 60px;
    padding: 0 20px;
}

nav.sm.menuItem {
    text-align: center;
    border-top: solid 0.5px rgba(255, 255, 255, 0.6);
}

nav.sm {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgba(34, 49, 52, 0.9);
}

#hamburger {
    display: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    height: 60px;
    width: 60px;
    margin-left: auto;
}

.icon span {
    position: absolute;
    left: 15px;
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 8px;
    transition: all 0.75s ease;
}

.icon span:nth-of-type(1) {
    top: 16px;
}

.icon span:nth-of-type(2) {
    top: 28px;
}

.icon span:nth-of-type(3) {
    top: 40px;
}

@media (max-width: 950px) {
    nav.pc {
        display: none;
    }

    nav.sm,
    #hamburger {
        display: block;
    }

    #hamburger.closed .icon span:nth-of-type(1),
    #hamburger.closed .icon span:nth-of-type(3) {
        top: 28px;
    }

    #hamburger.closed .icon span:nth-of-type(1) {
        transform: rotate(45deg);
    }

    #hamburger.closed .icon span:nth-of-type(2) {
        opacity: 0;
    }

    #hamburger.closed .icon span:nth-of-type(3) {
        transform: rotate(-45deg);
    }
}
</style>