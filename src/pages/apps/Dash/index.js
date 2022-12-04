// @flow
import React, { useState } from 'react';
import { Row, Col, Nav, Card, Tab } from 'react-bootstrap';

// components
import HyperDatepicker from '../../../components/Datepicker';
import MensagensInst from './MensagensInst';
import Email from './Email';
import { inicio } from './Data'
import { useAsync } from "react-async";
import moment from 'moment/moment';
import SearchByDate from './SearchByDate';

const Dash = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    /*
     * handle date change*/
    
    const [iDate, setIDate] = useState(new Date(0));
    const [fDate, setFDate] = useState(new Date());
    const getInitialDate = (date) => {
        setIDate(date);
    }
    const getFinalDate = (date) => {
        setFDate(date);
    }

    const { data, error, isPending } = useAsync({ promiseFn: inicio });
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        var filtrado = data.filter((request) => {
            var data_atual = new Date(request.createdAt)
            return data_atual >= iDate && data_atual <= fDate;
        })
        var totalchamados = 0;
        var totalchamadosM = 0;
        var totalchamadosE = 0;
        var totalchamadosatendidos =0;
        var totalchamadosfinalizados =0;
        var totalchamadosemandamento =0;
        var totalchamadosaberto =0;
        var totalpositivos =0;
        var totalpositivosE =0;
        var totalcsatM =0;
        var totalcsatE =0;
        var csatM =0;
        var csatM1 =0;
        var csatE =0;
        var csatE1 =0;
        var totalpromotores =0;
        var totaldetratores =0;
        var totalrespondentes =0;
        var ppromotores =0;
        var pdetratores =0;
        var totalpromotoresE =0;
        var totaldetratoresE =0;
        var totalrespondentesE =0;
        var ppromotoresE =0;
        var pdetratoresE =0;
        var npsM =0;
        var npsM1 =0;
        var npsE =0;
        var npsE1 =0;
        var tempomedioM1 =0;
        var tempomedioM =0;
        var tempomedioE1 =0;
        var tempomedioE =0;
        var hoursM =0;
        var hoursE =0;
        
       filtrado.forEach((request, index) => {
        totalchamados = index + 1;
        if (request.idChannels != "4") {
            totalchamadosM ++;
        }

        if (request.idChannels == "4") {
            totalchamadosE ++;
        }
    
        if ((request.CSAT == 4 || request.CSAT == 5) && request.CSAT != null && request.idChannels != "4") {
            totalpositivos ++;
    
        }
        if ((request.CSAT >= 0 || request.CSAT <=5) && request.CSAT != null && request.idChannels != "4"){
            totalcsatM ++;
        }
        csatM1 = (totalpositivos / totalcsatM)*100;

        csatM = +(csatM1.toFixed(2))

        if ((request.CSAT == 4 || request.CSAT == 5) && request.CSAT != null && request.idChannels == "4") {
            totalpositivosE ++;
    
        }
        if ((request.CSAT >= 0 || request.CSAT <=5) && request.CSAT != null && request.idChannels == "4"){
            totalcsatE ++;
        }

        csatE1 = (totalpositivosE / totalcsatE)*100;

        csatE = +(csatE1.toFixed(2))

        if ((request.NPS == 9 || request.NPS == 10) && request.CSAT != null && request.idChannels != "4") {
            totalpromotores ++;
        }
        if ((request.NPS <= 6) && request.CSAT != null && request.idChannels != "4") {
            totaldetratores ++;
        }
        if ((request.NPS >= 0 || request.CSAT <=10) && request.CSAT != null && request.idChannels != "4"){
            totalrespondentes ++;
        }

        ppromotores = (totalpromotores/totalrespondentes)*100;

        pdetratores = (totaldetratores/totalrespondentes)*100;

        npsM1 = ppromotores - pdetratores;

        npsM = +(npsM1.toFixed(0))

        if ((request.NPS == 9 || request.NPS == 10) && request.CSAT != null && request.idChannels == "4") {
            totalpromotoresE ++;
        }
        if ((request.NPS <= 6) && request.CSAT != null && request.idChannels == "4") {
            totaldetratoresE ++;
        }
        if ((request.NPS >= 0 || request.CSAT <=10) && request.CSAT != null && request.idChannels == "4"){
            totalrespondentesE ++;
        }

        ppromotoresE = (totalpromotoresE/totalrespondentesE)*100;

        pdetratoresE = (totaldetratoresE/totalrespondentesE)*100;

        npsE1 = ppromotoresE - pdetratoresE;

        npsE = +(npsE1.toFixed(0))

        if (request.idChannels != "4") { 
           const dataFim = moment(request.endedAt);
           const dataInicio = moment(request.createdAt);

           const tempomedio = moment.duration(dataFim.diff(dataInicio));

           hoursM += tempomedio.asHours();
           
        }

        tempomedioM1 = hoursM/totalchamadosM;

        tempomedioM = +(tempomedioM1.toFixed(2))

        if (request.idChannels == "4") { 
            const dataFim = moment(request.endedAt);
            const dataInicio = moment(request.createdAt);
 
            const tempomedio = moment.duration(dataFim.diff(dataInicio));
 
            hoursE += tempomedio.asHours();
            
         }

         tempomedioE1 = hoursE/totalchamadosE;

         tempomedioE = +(tempomedioE1.toFixed(2))
        
    }    
    )
    return (
        <>
        <div className="mt-2 mb-2">
            <Row>
                <Col xs={2}>
                    
                        <h4 className="page-title">Dashboard</h4>
                    
                </Col>
                </Row>
            <Row>
                <Col xs={2}>
                    <SearchByDate eDate={getInitialDate} />
                </Col>
                <Col xs={2}>
                    <SearchByDate eDate={getFinalDate} />                  
                </Col>
            </Row>
            </div>

                    <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="1" className="nav-link rounded-0">
                                            <i className='mdi mdi-chat font-18'></i>
                                            <span className="d-none d-lg-block">Mensagens Instantâneas</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="2" className="nav-link rounded-0">
                                            <i className='mdi mdi-email font-18'></i>
                                            <span className="d-none d-lg-block">E-mail</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Row>
                                    <Col lg={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <MensagensInst tempomedioM={tempomedioM} csatM={csatM} npsM={npsM}/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Email tempomedioE={tempomedioE} csatE={csatE} npsE={npsE}/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};
}

export default Dash;
