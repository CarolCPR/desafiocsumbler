<script>
  from axios import 'axios'

  export default {
    name: 'dadosenviados',
    data: function () {
        var requestTime =  new Date();
      return requestTime;
    },
    methods: {
      enviar: function () {
        var this_ = this
        axios({
          url: "/app.js", method: "POST", { data: this_.requestTime }
       })
      }
    }
  }
</script>