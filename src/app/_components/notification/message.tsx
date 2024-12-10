import { notification, message } from 'antd';

type Props = {
    title?: string,
    label?: string
}

const customStyle = {
    fontFamily: 'Noto Sans Lao',
    padding: 0,
    fontSize: '14px'
}
export function notificationError({ title, label }: Props) {
    notification.error({
        placement: 'top',
        message: <p style={{ fontFamily: 'Noto Sans Lao', fontWeight: 'bold', padding: 0, fontSize: '18px' }}> {title}</p>,
        description: <p style={{ fontFamily: 'Noto Sans Lao', padding: 0, fontSize: '16px' }}>{label}</p>,
        duration: 5
    });
}

export function messageError({ label }: Props) {
    message.open({
        type: 'error',
        content: `${label}`,
        duration: 5,
        style: { ...customStyle, marginTop: '15px' }
    });
};