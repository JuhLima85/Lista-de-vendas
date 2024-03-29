import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id : number){ 
    axios(`${BASE_URL}/vendas/v1/${id}/notificacao`)
    .then(response => {
        toast.info("Mensagem enviada com sucesso!");
    });

}

function NotificationButton({saleId} : Props) {
    return (
        <div className= "listavendas-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;

