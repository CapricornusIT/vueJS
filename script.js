let id = 1

const app ={
  data(){
    return {
      title: 'Циклы',
      text: '',
      className: 'list',
      notes: [
        {id: id++, name: 'HTML'},
        {id: id++, name: 'Css'},
        {id: id++, name: 'Js'},
      ],
      open: false,
      inputStyle: 'style_input'
    }
  },
  methods: {
    addNote(){
      if (this.text.trim() != '') {
        this.notes.push({
          id: id++,
          name: this.text
         })
         this.text = ''
      }
    },
    delNote(note){
     this.notes = this.notes.filter((item) => item != note)
    }
  }
}

Vue.createApp(app).mount('#app')
