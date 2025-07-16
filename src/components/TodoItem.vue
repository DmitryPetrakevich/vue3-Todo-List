!<template>
  <div class="todo-item"> 
    <div class="todo-item__container">
        <input 
        type="checkbox" 
        class="todo-item-input" 
        :checked="todo.complete"
        />
        <span class="todo-item-text"> {{ todo.title }}</span>
        <button type="button" class="todo-item-btn">×</button>
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

  // если задача завершена — зачёркиваем и делаем серой
//   .todo-item[complete='true'] & {
//     text-decoration: line-through;
//     color: #aaa;
//   }
}

.todo-item-btn {
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
    color: #000000; // чуть выразительнее
  }
}

</style>