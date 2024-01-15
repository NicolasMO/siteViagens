import { useRouter } from "next/router";


export default function Agendamento() {
    const router = useRouter()

    return (
        <div>Teste = {router.query.lugar}</div>
    )
}