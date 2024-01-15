interface BotaoProps {
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao (props: BotaoProps) {
    return (
        <button
            onClick={props.onClick}
            className={`
            px-5 py-2 outline-none
            ${props.className}`}>
                {props.children}
        </button>
    )
}