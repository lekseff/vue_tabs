<template>
  <div class="onenews">
    <div class="form">
      <input type="text">
    </div>
    <h2>Первая новость</h2>
    <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, minima.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur.</li>
      <li>Lorem ipsum dolor sit.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppNewsOne",
}
</script>

<style scoped>
ul {
  list-style: none;
}
.onenews {
  background: #aebba8;
  border: 1px solid gray;
  border-radius: 10px;
}

.form {
  margin-top: 20px;
}
</style>
