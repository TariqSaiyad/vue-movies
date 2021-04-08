<template>
  <div id="employee-table">
    <h3 v-if="employees.length == 0" class="empty">No employees</h3>
    <table v-else>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.name" />
          </td>
          <td v-else>{{ employee.name }}</td>
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.email" />
          </td>
          <td v-else>{{ employee.email }}</td>

          <td v-if="editing === employee.id">
            <button class="round-button shadow" @click="editEmployee(employee)">
              Save
            </button>
            <button class="muted-button" @click="cancelEdit(employee)">
              Cancel
            </button>
          </td>

          <td v-else>
            <button
              class="round-button warn shadow"
              @click="editMode(employee)"
            >
              Edit
            </button>
            <button
              class="round-button error shadow"
              @click="$emit('delete:employee', employee.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "employee-table",
  props: { employees: Array },
  data() {
    return {
      cachedEmployee: null,
      editing: null,
    };
  },
  methods: {
    editMode(employee) {
      this.cachedEmployee = Object.assign({}, employee);
      this.editing = employee.id;
    },
    editEmployee(employee) {
      if (employee.name === "" || employee.email === "") return;
      this.$emit("edit:employee", employee.id, employee);
      this.editing = null;
    },
    cancelEdit(employee) {
      Object.assign(employee, this.cachedEmployee);
      this.editing = null;
    },
  },
};
</script>

<style scoped>
#employee-table {
  background-color: burlywood;
}

button {
  margin: 1px;
  transition: all ease-in 50ms;
  border: none;
  outline: none;
}

.warn {
  background-color: rgb(236, 154, 0);
}

.shadow {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

button:active {
  box-shadow: none;
  transform: scale(0.95);
}

.error {
  background-color: rgb(255, 72, 72);
}
</style>