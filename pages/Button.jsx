export default function Button({children, onClick}) {
    return (
        <button
        onClick={onClick}
        style={{
            padding: '50px 100px',
            backgroundColor: 'success',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            {children}
        </button>
    )
}