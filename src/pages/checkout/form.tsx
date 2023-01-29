import MaskedInput from 'react-text-mask'
import { BiRightArrowAlt } from 'react-icons/bi'

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    isDisable: boolean
}

function IdentificationForm({ onSubmit, isDisable }: FormProps) {
    return (
        <>
            <form action='*' onSubmit={onSubmit} >
                <label htmlFor="name">Nome</label>
                <input type="text" disabled={isDisable} required id="name" name="name" />

                <label htmlFor="cpf">CPF</label>
                <MaskedInput id="cpf" disabled={isDisable} required name="cpf"
                    mask={[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                    guide={false}
                />

                <label htmlFor="email">Email</label>
                <input type="email" disabled={isDisable} required id="email" name="email" />

                <label htmlFor="fone">Telefone</label>
                <MaskedInput id="fone" disabled={isDisable} required name="fone"
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    guide={false}
                />
                <label htmlFor="cep">CEP</label>
                <MaskedInput id="cep" disabled={isDisable} required name="cep"
                    mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    guide={false}
                />

                <label htmlFor="rua">Rua</label>
                <input type="text" disabled={isDisable} id="rua" required name="rua" />

                <label htmlFor="numero">Número</label>
                <input type="text" disabled={isDisable} id="numero" required name="numero" />

                <label htmlFor="bairro">Bairro</label>
                <input type="text" disabled={isDisable} id="bairro" required name="bairro" />

                <label htmlFor="cidade">Cidade</label>
                <input type="text" disabled={isDisable} id="cidade" required name="cidade" />

                <label htmlFor="estado">Estado</label>
                <input type="text" disabled={isDisable} id="estado" required name="estado" />

                <button disabled={isDisable} type="submit">
                    Prosseguir
                    <BiRightArrowAlt />
                </button>
            </form>


        </>
    );
}

export default IdentificationForm
