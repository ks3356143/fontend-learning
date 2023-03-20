<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot></slot>
            <slot></slot>
        </div>
        <div class="addition">
            <slot :name="name"></slot>
        </div>
    </div>
</template>

<script>

export default {
    props:["name"]
}
</script>

<style scoped>
body {
    padding: 0;
}

.nav-bar {
    display: flex;
}

.left,
.right
{
width: 80px;
background-color: red;
}
.addition {
    width: 80px;
    height: 80px;
    background-color: blueviolet;
}


.center {
    flex: 1;
    background-color: blue;
}

.left,
.right,
.center,
.addition {
    height: 80px;
}
</style>