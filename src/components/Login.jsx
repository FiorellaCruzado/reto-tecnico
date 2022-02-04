import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../api/user';
import Input from './Input';

const Login = () => {

    const [form, setForm] = useState({
        doc: null,
        placa: null,
        celular: null
    });
    const history = useHistory();

    const handleInput = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submit = async e => {
        e.preventDefault();
        const result = await login();
        console.log(result);
        history.push('/armatuplan');
    }

    const validateDocumentNumber = React.useMemo(() => {
        let isValid = true;
        if (form && form.doc && form.doc.length !== 8) {
            console.log(form.doc.length)
            isValid = false;
        }
        return !isValid;
    },[form]);

    const formatPlaca = React.useMemo(() => {
        if(form.placa && form.placa.length === 3){
            console.log(form.placa + '-')
            return form.placa + '-'
        }
    },[form])

    return (
        <form onSubmit={submit} className='form'>

            <div className="form__content">
                <div className='form__content__title'>
                    Déjanos tus datos
                </div>

                <div className='form__content__body'>
                    <div className='form__item grid'>
                        <div className='form__item__content-select form__item__content-select--groupselect grid-4'>
                            <select name="select" className='form__item__select form__item__select--groupinput'>
                                <option value="value1" selected>DNI</option>
                                <option value="value2" >RUC</option>
                            </select>
                            <img src="%PUBLIC_URL%/../images/chevrot.svg" alt="" />
                        </div>
                        <Input
                            error={validateDocumentNumber}
                            errortxt={validateDocumentNumber ? 'El campo requiere como mínimo 8 caracteres' : ''}
                            onChange={handleInput}
                            name='doc'
                            type='number'
                            className='d-flex form__item__input--groupinput'
                            placeholder='Nro. de doc'
                            maxlength='8'
                            classNameGroup='grid-8'
                            value={form.doc}
                            required
                        />
                    </div>
                    <Input
                        error={validateDocumentNumber}
                        errortxt={validateDocumentNumber ? 'El campo requiere como mínimo 8 caracteres' : ''}
                        onChange={handleInput}
                        name='celular'
                        type='number'
                        placeholder='Celular'
                        maxlength='9'
                        value={form.celular}
                        required
                    />
                    <Input
                        error={validateDocumentNumber}
                        errortxt={validateDocumentNumber ? 'El campo requiere como mínimo 8 caracteres' : ''}
                        onChange={handleInput}
                        name='placa'
                        type='text'
                        value={ '-' }
                        placeholder='Placa'
                        maxlength='9'
                        required
                    />
                </div>

                <div className="form__content__check">
                    <div className="form__content__check__input">
                        <input type="checkbox" id="cbox" name="politica" value="politica" />
                        <label for="cbox"></label>
                    </div>
                    <div className="form__content__check__label">
                        <label for="cbox">
                            <span>Acepto la </span>
                            <Link to="#">
                                <span>Política de Protección de Datos Personales</span>
                            </Link>
                            <span> y los </span>
                            <Link to="#">
                                <span>Términos y Condiciones.</span>
                            </Link>
                        </label>
                    </div>
                </div>
            </div>

            <button
                className='form__button'
                type='submit'
            >
                COTÍZALO
            </button>
        </form>

    )
}

export default Login;