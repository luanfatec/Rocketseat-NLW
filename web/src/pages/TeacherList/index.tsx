import React, { useState, FormEvent } from 'react';

// Imports components...
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

// Imports css...
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState();
    const [week_day, setWeekDay] = useState();
    const [time, setTime] = useState();

    async function searchTeachars(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject, week_day, time
            }
        });       
        setTeachers(response.data);   
    }

    return (
        <div id="page-teacher-list" className="container">

            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teacher" onSubmit={searchTeachars}>
                    
                    <Select 
                        name="Subject" 
                        label="Matéria"
                        onChange={(e) => { setSubject(e.target.value)}}
                        value={subject}
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

                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        onChange={(e) => { setWeekDay(e.target.value)}}
                        value={week_day}
                        options={[
                            { value: '0', label: "Domingo" },
                            { value: '1', label: "Segunda-feira" },
                            { value: '2', label: "Terça-feira" },
                            { value: '3', label: "Quarta-feira" },
                            { value: '4', label: "Quinta-feira" },
                            { value: '5', label: "Sexta-feira" },
                            { value: '6', label: "Sábado" },
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" onChange={(e) => { setTime(e.target.value)}} value={time}/>

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>

                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>

        </div>
    )
}

export default TeacherList;