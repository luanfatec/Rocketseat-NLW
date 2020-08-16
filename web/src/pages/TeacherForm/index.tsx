import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// Images icons...
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

function TeacherForm() {

    const History = useHistory()

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");
    
    const [scheduleItem, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItemArea() {
        setScheduleItems([
            ...scheduleItem,
            { week_day: 1, from: '', to: '' }
        ]);        
    }

    function setScheduleItemsValue(position: number, field: string, value: string) {
        const updateScheduleItem = scheduleItem.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItem)
        
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name, avatar, whatsapp, bio, subject, 
            cost: Number(cost), 
            schedule: scheduleItem, 
        }).then(() => {
            alert("Cadastro realizado com sucesso!");
            History.push('/');
        }).catch(() => {
            alert("Erro no cadastro!");
        });

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItem
        });        
    }

    return (        

        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>

                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input name="whatsapp" label="WhatAapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />

                    </fieldset>

                    <fieldset>

                        <legend>Sobre a matéria</legend>

                        <Select 
                            name="subject" 
                            label="Matéria" 
                            value={subject} 
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: "Artes" },
                                { value: 'Astronomia', label: "Astronomia" },
                                { value: 'Filosofia', label: "Filosofia" },
                                { value: 'Programação Diferencial', label: "Programação diferencial" },
                                { value: 'Logica Humana', label: "Logica Humana" },
                                { value: 'Matemática', label: "Matemática" },
                                { value: 'Ingles', label: "Ingles" },
                            ]}
                        />

                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => { setCost(e.target.value) }}  />                    

                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                            <button type="button" onClick={addNewScheduleItemArea}>+ Novo horário</button>
                        </legend>

                        {scheduleItem.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name="subject" 
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '1', label: "Segunda-feira" },
                                            { value: '2', label: "Terça-feira" },
                                            { value: '3', label: "Quarta-feira" },
                                            { value: '4', label: "Quinta-feira" },
                                            { value: '5', label: "Sexta-feira" },
                                            { value: '6', label: "Sábado-feira" }
                                        ]}
                                    />
                                    <Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemsValue(index, 'from', e.target.value)} />
                                    <Input name="to" label="Até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemsValue(index, 'to', e.target.value)} />
                                </div>
                            );
                        })}
                    </fieldset>


                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso impotante"/>
                            Importante<br />
                            Preencha todos os dados
                        </p>
                        <button type="submit" >Salvar cadastro</button>
                    </footer>

                </form>
            </main>
            
        </div>
    )
}

export default TeacherForm