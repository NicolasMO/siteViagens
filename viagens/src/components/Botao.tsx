interface BotaoProps {
    id?: string
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao (props: BotaoProps) {
    return (
        <button
            onClick={props.onClick}
            className={`
            mx-3 my-2 outline-none
            ${props.className}`}>
                {props.children}
        </button>
    )
}