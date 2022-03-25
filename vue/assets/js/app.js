const app = Vue.createApp({ // hacemos una variable  llamado app
    data() { // funcion llamada app
        return { //regresa valores
            nombre: 'Victor Hugo', // message
            apellido: ' Chavez C.', // nombre
            email: 'victorchavez99.vc@gmail.com',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/75.jpg' //api de random fotos
                //boleta: '2014110239', // boleta
                //escuela: 'ESIME ZACATENCO' // escuela
        }
    },
    methods: {
        async cambiarUsuario() {
            const res = await fetch('https://randomuser.me/api/');
            const { results } = await res.json();

            console.log(results)

            this.nombre = results[0].name.first // message
            this.apellido = results[0].name.last // nombre
            this.email = results[0].email
            this.genero = results[0].gender
            this.foto = results[0].picture.large
        }
    }
})

app.mount('#app'); // adjunta lo valores