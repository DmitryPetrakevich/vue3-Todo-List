!<template>
  <div class="todo-item" :class="priority"> 
    <div class="todo-item__container">
        <input 
        type="checkbox" 
        class="todo-item-input" 
        :checked="todo.completed"
        @change="handleToggle"
        />
        <span 
        v-if="!isEditing"
        class="todo-item-text"
        :class="{completed : todo.completed}"
        > 
        {{ todo.title }}
      </span>
      <input
      v-else
      type="text"
      class="todo-edit-input"
      v-model="editInput"
      ref="editInput"
      @blur="finishEditing"
      @keyup.enter="finishEditing"
      />

      <div class="priority-flag-wrapper"> 
        <div
        class="priority-flag"
        :class="priority"
        @click="togglePriorityMenu"
        >
        </div>

        <div
          class="priority-menu"
          v-if="showPriorityMenu"
          @click.stop
        >
        
          <div
          v-for="color in priorityOptions"
          :key="color"
          class="priority-option"
          :class="color"
          @click="setPriority(color)"
          >
          </div>
        </div>
      </div>


        <button
        @click="startEditing"
        type="button"
        class="edit-btn"
        >
        ✏️
        </button>

        <button 
        @click="$emit('delete-todo', todo.id)"
        type="button" 
        class="delete-btn"
        >
        ×
      </button>
    </div>

  </div>
</template>

<script>
export default {
    props: [
        'todo',
    ],

    data() {
        return {
          isEditing: false,
          editInput: this.todo.title,
          priority: this.todo.priority || 'green',
          showPriorityMenu: false,
          priorityOptions: ['green', 'orange', 'red']
        }
    },

    methods: {
      handleToggle() {
        this.$emit('toggle-completed', this.todo.id)
      },

      startEditing() {
        this.isEditing = true;
        this.editInput = this.todo.title;
        this.$nextTick(() => {
          if(this.$refs.editInput) {
            this.$refs.editInput.focus();
          }
        });
      },

      finishEditing() {
        this.isEditing = false;
        const trimed = this.editInput.trim();
        if(trimed) {
          this.$emit('edit-todo', {
            id: this.todo.id,
            newTitle: trimed,
          })
        }
      },

      togglePriorityMenu() {
        this.showPriorityMenu = !this.showPriorityMenu;
      },
      
      setPriority(color) {
        this.priority = color;
        this.showPriorityMenu = false,
        this.$emit('update-priority', {id: this.todo.id, priority: color})
      },

      closePriorityMenuOnClickOutside(event) {
          // Проверяем, что клик был ВНЕ priority-flag-wrapper
          const menuWrapper = this.$el.querySelector('.priority-flag-wrapper');
          if (menuWrapper && !menuWrapper.contains(event.target)) {
            this.showPriorityMenu = false;
          }
        }
    },

    computed: {
      priority() {
        return this.todo.priority;
      }
    },

    // watch: {
    //   todo: {
    //     immediate: true,
    //     handler(newTodo) {
    //       this.priority = newTodo.priority || 'green';
    //     }
    //   }
    // },

    mounted() {
      document.addEventListener('click', this.closePriorityMenuOnClickOutside);
    },

    beforeUnmount() {
      document.removeEventListener('click', this.closePriorityMenuOnClickOutside);
    }
};
</script>

<style scoped lang="less">
.todo-item {

  max-width: 700px; 
  margin-bottom: 6px; 
  padding: 10px 14px; 
  border: 1px solid #ddd; 
  border-radius: 8px; 
  background-color: #fff; 
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); 
}

.todo-item.green {
  border: 2px solid #4caf50; 
}

.todo-item.orange {
  border: 2px solid #ff9800; 
}

.todo-item.red {
  border: 2px solid #f44336; 
}

.todo-item__container {
  display: flex; 
  align-items: center; 
  gap: 12px; 
  justify-content: space-between; 
}

.todo-edit-input {
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.todo-item-input {
  width: 22px;
  height: 22px;
  accent-color: #42b983; // делает чекбокс зелёным
  cursor: pointer; 
}

.todo-item-text {
  flex: 1; 
  font-size: 18px; 
  font-weight: 500; 
  color: #333; 
  word-break: break-word; 
  transition: color 0.3s, text-decoration 0.3s; 

  &.completed {
    text-decoration: line-through;
    color: #aaa;
  }
}

.delete-btn {
  width: 26px;
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: transparent; 
  color: #666; 
  border: 1px solid #ccc; 
  border-radius: 50%; 
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #eee; 
    color: #ba0808;
  }
}

.edit-btn {
  width: 26px;
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    background-color: #eee;
    color: #000;
  }
}

.priority-flag-wrapper {
  position: relative;
}

.priority-flag {
  width: 20px;
  height: 24px;
  position: relative;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 2px 2px 0 0; 
}

/* Создаём треугольную "вырезку" снизу */
.priority-flag::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 8px solid currentColor; 
}

.priority-flag.green {
  background-color: #2ecc71;;
  color: #2ecc71;;
}

.priority-flag.orange {
  background-color: #f39c12;
  color: #f39c12;
}

.priority-flag.red {
  background-color: #e74c3c;
  color: #e74c3c;
}

.priority-menu {
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  gap: 6px;
  padding: 6px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.priority-option {
  width: 24px;
  height: 24px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #aaa;
}

.priority-option.green {
  background-color: #2ecc71;
}

.priority-option.orange {
  background-color: #f39c12;
}

.priority-option.red {
  background-color: #e74c3c;
}
</style>