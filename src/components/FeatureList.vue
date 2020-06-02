<template>
  <div class="feature">
    <h5>{{feature.name}}</h5>
    <p>{{feature.description}}</p>
  </div>
</template>

<script>
export default {
  props: ["feature"]
};
</script>
