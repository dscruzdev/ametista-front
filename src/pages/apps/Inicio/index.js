// @flow
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import HyperDatepicker from '../../../components/Datepicker';
import StatisticsWidget from '../../../components/StatisticsWidget';
import CampaignsChart from './CampaignsChart';

import Statistics from './Statistics';
import Status from './Status';
//import SessionsChart from './SessionsChart';
import CountrySessionsChart from './CountrySessionsChart';
import ViewsChart from './ViewsChart';
import BrowsersChart from './BrowsersChart';
import OsChart from './OsChart';
import Channels from './Channels';
import Social from './Social';
import Engagement from './Engagement';
import { inicio } from './Data'
import { useAsync } from "react-async";
import SearchByDate from './SearchByDate';

const Inicio = (): React$Element<React$FragmentType> => {
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
    
    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
        }
    }; 

    
    
    const { data, error, isPending } = useAsync({ promiseFn: inicio });
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        var filtrado = data.filter((request) => {
            var data_atual = new Date(request.createdAt)
            return data_atual >= iDate && data_atual <= fDate;
        })
        var totalchamados = 0;
        var totalchamadosatendidos =0;
        var totalchamadosfinalizados =0;
        var totalchamadosemandamento =0;
        var totalchamadosaberto =0;
        var totalpositivos =0;
        var totalcsat =0;
        var csat =0;
        var totalpromotores =0;
        var totaldetratores =0;
        var totalrespondentes =0;
        var ppromotores =0;
        var pdetratores =0;
        var nps =0;
        var totalchamadosmessenger =0;
        var totalchamadoswhatsapp =0;
        var totalchamadossms =0;
        var totalchamadosemail =0;
        filtrado.forEach((request, index) => {totalchamados = index + 1;
       
        if ((request.CSAT == 4 || request.CSAT == 5) && request.CSAT != null) {
            totalpositivos ++;
    
        }
        if ((request.CSAT >= 0 || request.CSAT <=5) && request.CSAT != null){
            totalcsat ++;
            
        }
        csat = (totalpositivos / totalcsat)*100;

        if ((request.NPS == 9 || request.NPS == 10) && request.CSAT != null) {
            totalpromotores ++;
        }
        if ((request.NPS <= 6) && request.CSAT != null) {
            totaldetratores ++;
        }
        if ((request.NPS >= 0 || request.CSAT <=10) && request.CSAT != null){
            totalrespondentes ++;
        }

        ppromotores = (totalpromotores/totalrespondentes)*100;

        pdetratores = (totaldetratores/totalrespondentes)*100;

        nps = ppromotores - pdetratores;

        if (request.idChannels == "1") { 
            totalchamadosmessenger ++;
        }

        if (request.idChannels == "2") { 
            totalchamadoswhatsapp ++;
        }

        if (request.idChannels == "3") { 
            totalchamadossms ++;
        }

        if (request.idChannels == "4") { 
            totalchamadosemail ++;
        }

        if (request.status == "Finalizado") { 
            totalchamadosfinalizados ++;
        }

        if (request.status == "Em andamento") { 
            totalchamadosemandamento ++;
        }

        if (request.status == "Em aberto") { 
            totalchamadosaberto ++;
        }

        
    }    
        )

    return (
        <>
            <div className="mt-2 mb-2">
            <Row>
            <Col xs={2}>
            <h4 className="page-title">Início</h4>
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
            
            <Row>
               <Col xl={12} lg={12}>
                    <Statistics totalchamados={totalchamados} totalchamadosatendidos={totalchamadosatendidos} totalcsat={csat} nps={nps}/>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={9}>
                    <Status totalchamados={totalchamados} totalchamadosfinalizados={totalchamadosfinalizados} totalchamadosemandamento={totalchamadosemandamento} totalchamadosaberto={totalchamadosaberto}/>
                </Col>
                {/*<Col xl={4} lg={6}>
                    <Statistics />
                </Col>*/}

                <Col xl={6} lg={9}>
                    <Channels totalchamados={totalchamados} totalchamadosmessenger={totalchamadosmessenger} totalchamadoswhatsapp={totalchamadoswhatsapp} totalchamadossms={totalchamadossms} totalchamadosemail={totalchamadosemail} />
                </Col>

                {/*<Col xl={4} lg={6}>
                    <CampaignsChart />
            </Col>*/}

                {/*<Col xl={4} sm={12}>
                    <StatisticsWidget
                        icon="mdi mdi-progress-star"
                        description="csat"
                        title="CSAT"
                        stats="30.56%"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '77.87%',
                            time: 'Desde mês passado',
                        }}></StatisticsWidget>

                <StatisticsWidget
                        icon="mdi mdi-star-half-full"
                        description="nps"
                        title="NPS"
                        stats="80"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '2',
                            time: 'Desde mês passado',
                        }}></StatisticsWidget>
                </Col>*/}

               

                {/*<Col xl={9} lg={8}>
                    <SessionsChart />
                                </Col>*/}
            </Row>

            <div className="mt-2 mb-3 text-end">
                        <Link to="/apps/dash">
                            Ver mais<i className="uil uil-arrow-right ms-1"></i>
                        </Link>
                    </div>

            {/*<Row>
                <Col>
                    <CountrySessionsChart />
                </Col>
            </Row>

             <Row>
                <Col xl={6} lg={12}>
                    <ViewsChart />
                </Col>
               {/* <Col xl={4} lg={6}>
                    <BrowsersChart />
                </Col>
                <Col xl={6} lg={6}>
                    <OsChart />
        </Col>
            </Row>*/}

            {/*<Row>
                <Col xl={4} lg={6}>
                    <Channels />
                </Col>
                <Col xl={4} lg={6}>
                    <Social />
                </Col>
                <Col xl={4} lg={6}>
                    <Engagement />
                </Col>
            </Row>*/}
        </>
    );
};
}

export default Inicio;
