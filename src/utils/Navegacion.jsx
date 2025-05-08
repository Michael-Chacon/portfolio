import { useNavigate } from 'react-router-dom'

export { useNavigate } from 'react-router-dom'
export function Navegacion() {
    const navigate = useNavigate()
    const puedeRetroceder = window.history.length > 2;
    return (
        <div className="principal__flechas">
            <i onClick={() => navigate(-1)} className='bx bx-chevron-left'></i>
            <i onClick={() => navigate(1)} className='bx bx-chevron-right' style={puedeRetroceder ? { color: 'white' } : { color: 'gray' }}></i>
        </div >
    )
}