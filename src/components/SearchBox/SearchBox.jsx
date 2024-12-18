import css from './SearchBox.module.css'

export default function SearchBox ({value, onChange}){
    return(
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder="Search..."
        />
    </div>
    )
}