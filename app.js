const App = {
    data () {
        return {
            cidades: [],
            cidade:'',
            estados:[],
            estado:'',
        }
    },
    watch: {
        estado:function(id){
            fetch("https://raw.githubusercontent.com/wgenial/br-cidades-estados-json/master/cidades/"+ id +".json")
        .then(response => response.json())
        .then(data => {
            this.cidades = data.cidades
        })
        }
    },

    mounted () {
        fetch("https://raw.githubusercontent.com/wgenial/br-cidades-estados-json/master/estados.json")
        .then(response => response.json())
        .then(data => {
            this.estados = data.estados
        })
    }
};

Vue.createApp(App).mount('#app');