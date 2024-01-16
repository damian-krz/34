<template>
    <div>
        <nav class="navigation">
            <ul class="navigation--list">
                <li class="navigation--item">
                    <RouterLink :to="{ name: 'HomeView' }">hejas</RouterLink>
                </li>
                <li class="navigation--item">
                    <RouterLink :to="{ name: 'HomeView' }">hejas</RouterLink>
                </li>
                <li class="navigation--item">
                    <RouterLink :to="{ name: 'HomeView' }">hejas</RouterLink>
                </li>
            </ul>
                <RouterLink :to="{ name: 'HomeView' }" class="navigation--logo">
                    <img class="logo" src="../assets/graphics/logo.svg">
                </RouterLink>
        </nav>
    </div>
</template>

<style scoped lang="scss">
        .navigation {
            background: rgb(31,34,34);
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 2;
            font-size: 1rem;
            min-height: 8rem;
            padding: 6rem 0rem;

            &--list {
                list-style: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 50%;
            }

            &--item {
                a {
                    font-family: Sarpanch-Regular;
                    font-size: 1.2rem;
                    color: red;
                    text-decoration: none;
                }
            }
        }

        .logo { 
            width: 30%;
            
        }

</style>


<script>
    export default {
        name: 'Navigation'
    }
</script>