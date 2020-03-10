const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Crea una nueva tarea',
        subtitulo: 'Tarea',
        tareas: [],
        nuevaTarea: ''
    },
    // Funciones
    methods: {
        agregarTarea () {
            this.tareas.push(this.nuevaTarea);
            // Limpiar inputluego de agregar tarea
            this.nuevaTarea = '';
        }
        
    }
});