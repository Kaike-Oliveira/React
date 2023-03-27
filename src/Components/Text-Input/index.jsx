import './styles.css';


export const TextInput = ({searchValue, handleChange}) => {
    return(
        <input
            className='inputText'
            onChange={handleChange}
            value={searchValue}
            type='search'
            placeholder="I'm search about..."
        />
    )
}