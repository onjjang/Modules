// user input - includes validation
function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');

    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group">
        <input 
          id="item"
          type="text"
          className="form-control"
          value={value}
          placeholder="Input To Do.."
          onChange={e => setValue(e.target.value)} />
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
          </div>
      </form>
    )
  }