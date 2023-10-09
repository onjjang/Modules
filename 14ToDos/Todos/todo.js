function Todo({todo,index,remove}){
    function handle(){
      console.log('Ping:',index);
      remove(index);
    }
    return <div className="list-group" onClick={handle}>{todo.text} (-)</div>
  }
  