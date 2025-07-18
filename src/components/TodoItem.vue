!<template>
  <div class="todo-item"> 
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


      }


    }
};
</script>

<style lang="less">
.todo-item {
  // Ограничиваем максимальную ширину карточки задачи
  max-width: 600px; // чтобы не растягивалось на весь экран
  margin-bottom: 6px; // отступ между задачами
  padding: 10px 14px; // внутренние отступы — комфортная "подушка"
  border: 1px solid #ddd; // тонкая серая рамка — нейтрально отделяет блок
  border-radius: 8px; // мягкие скругления
  background-color: #fff; // белый фон — стандартно, сдержанно
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); // лёгкая тень для глубины
}

.todo-item__container {
  display: flex; // размещаем всё по горизонтали
  align-items: center; // вертикальное выравнивание по центру
  gap: 12px; // расстояние между элементами (чекбокс, текст, кнопка)
  justify-content: space-between; // выталкиваем крайние элементы по краям
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
  accent-color: #42b983; // делает чекбокс зелёным, как цвета Vue
  cursor: pointer; // чтобы чувствовалось, что это интерактивно
}

.todo-item-text {
  flex: 1; // берёт всё доступное пространство между чекбоксом и кнопкой
  font-size: 18px; // умеренный размер шрифта
  font-weight: 500; // немного жирнее обычного, но не слишком
  color: #333; // тёмно-серый — легче для глаз, чем чисто чёрный
  word-break: break-word; // если длинное слово — переносит
  transition: color 0.3s, text-decoration 0.3s; // плавные эффекты при смене состояния

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
  background-color: transparent; // без заливки
  color: #666; // нейтральный серый цвет
  border: 1px solid #ccc; // тонкая серая рамка
  border-radius: 50%; // круглая форма
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #eee; // светлый фон при наведении
    color: #ba0808; // чуть выразительнее
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


</style>