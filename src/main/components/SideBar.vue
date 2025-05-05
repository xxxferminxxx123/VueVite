<template>
    <aside :class="`${ esEspansible && 'es-Espansible'}`">
        <div class="logo">
            <img src="@/assets/restaurante.svg" alt="Vue">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/mesa">
                <span class="material-icons">person</span>
                <span class="text">Mesa</span>
            </router-link>
            <router-link class="button" to="/cliente">
                <span class="material-icons">person</span>
                <span class="text">Cliente</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">visibility</span>
                <span class="text">Pais</span>
            </router-link>
        </div>

        <div class="flex"></div>
        <div class="menu">
            <router-link class="button" to="/salir">
                <span class="material-icons">settings</span>
                <span class="text">Salir</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>

import { ref } from 'vue';

const esEspansible = ref(localStorage.getItem("es-Espansible")==="true");

const ToggleMenu = () => {
    esEspansible.value = !esEspansible.value

    localStorage.setItem("es-Espansible",esEspansible.value)
};

</script>

<style lang="scss" scoped>
    aside{
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;

        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;
        
        .flex{
                flex: 1;
        }
        
        .logo{
            
            margin-bottom: 1rem;

        }
        .menu-toggle-wrap{
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position: relative;
            top:0;
            transition:0.2 ease-out;
            
            .menu-toggle{
                transition: 0.2 ease-out;
                margin-bottom: 1rem;

                .material-icons{
                    font-size: 2rem;
                    color:var(--light);
                    transition: 0.2 ea;
                }
                
                &:hover {
                    .material-icons{
                        color: var(--primary);
                        transform:translateX();
                    }
                }
            }

        }

        h3, .button .text{
            opacity: 0;
            transition: 0.3s ease-out;
        }
        .menu{
            margin: 0 -1rem;
            .button{
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                transition: 0.2 ease-out;

                .material-icons{
                    font-size:2rem;
                    color: var(--light);
                    margin-right: 1rem;
                    transition: 0.2 ease-out;
                }
                .text{
                    color: var(--light);
                    transition: 0.2 ease-out;
                }
                &:hover , &.router-link-exact-active {
                    background-color:var(--dark-alt);
                    .material-icons{
                        color: var(--primary);
                    }
                }
                &.router-link-exact-active{
                    border-right: 5px solid var(--primary);
                }
            }
        }
        h3{
            color: var(--grey);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }


        &.es-Espansible{
            width: var(--sidebar-width);

            .menu-toggle-wrap{
                top: 3rem;
                .menu-toggle{
                    transform: rotate(-180deg);
                }
            }
            h3, .button .text{
            opacity: 1;
            }
            .button{
                .material-icons{
                    margin-right: 1rem;
                }

            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }
</style>