
<template>
  <div class="container py-4 px-3 mx-auto">
    <h1>Todo List App</h1>
    <form class="row g-3">
      <div class="col-auto">
          <input type="text" class="form-control" placeholder="...">
        </div>
        
        <div class="col-auto">
          <button class="btn btn-primary">Save</button>
        </div>
    </form>

    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action">A second button item</button>
      <button type="button" class="list-group-item list-group-item-action">A third button item</button>
      <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
      <button type="button" class="list-group-item list-group-item-action">A disabled button item</button>
    </div>
  </div>
</template>

<script>
 export default {
  data() {
    return {
      todos: null
    }
  },
  methods: {

  }
 }
</script>
